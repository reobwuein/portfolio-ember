
window.animationCompleteEmitter = window.animationCompleteEmitter || jQuery('<a>void</a>');

var a_forEach = Ember.EnumerableUtils.forEach,
    a_replace = Ember.EnumerableUtils.replace,
    get = Ember.get,
    set = Ember.set;

Portfolio.AnimatedTransitionRoute = Ember.Route.extend({

  animateOnDirectAccess : false,
  windowedView: false,
  windowedViewByQP: false,
  destroyEvents : ['pageIntroComplete'],

  startIntroTransition: function(view){

    var route = this;

    jQuery("#"+view.elementId)
      .on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e){route.stopIntroTransition(e, route)})

    setTimeout(function(){jQuery("#"+view.elementId).removeClass("pre-intro");}, 20);
  },

  stopIntroTransition: function(e, route){

    jQuery(e.target)
      .off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');

    if(!route.windowedView)
      window.animationCompleteEmitter.trigger('pageIntroComplete');
  },

  startOutroTransition: function(view, target){

    var route = this;

    if( !target.windowedView ){

      jQuery("#"+view.elementId)
        .addClass("outro")
        .on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e){route.stopOutroTransition(e, route)})
    }

  },

  stopOutroTransition: function(e, route){

    jQuery(e.target)
      .off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
    
    if(!route.windowedView)
      window.animationCompleteEmitter.trigger('pageOutroComplete');
  },

  beforeModel: function(transition, b) {

      /*
        All routes can be set to be loaded windowed.
      */
      if(this.windowedViewByQP ){
        if(transition.queryParams && transition.queryParams.aswindowed){
          this.set('windowedView', true);
        }else{
          this.set('windowedView', false);
        }
      }

      /*
        Handles return to previous route that has not been deleted. 
        Custom transition method; ember default will rerender all.
      */
      if(this.router._activeViews[this.routeName] && !this.windowedView){


          //TODO first handler might not always be the correct one;
          var handlerinfo = this.router.router.currentHandlerInfos[1]
            , paramString = ""
            , firstParamSet = false;

          handlerinfo.handler.teardownViews();

          this.router.router.currentHandlerInfos = transition.state.handlerInfos;
          this.router.router.state = transition.state;

          for(key in transition.state.queryParams){
            paramString += firstParamSet ? "&" : "?";
            paramString += encodeURIComponent(key) + "=" + encodeURIComponent(transition.state.queryParams[key]);
            firstParamSet = true;
          }
          
          this.router.location.setURL(transition.intent.url || "/"+transition.intent.name+paramString);
          transition.abort();

      }
  },

  render: function(name, options, skipIntro) {


    //Ember.assert("The name in the given arguments is undefined", arguments.length > 0 ? !isNone(arguments[0]) : true);

    var namePassed = typeof name === 'string' && !!name;

    if (typeof name === 'object' && !options) {
      options = name;
      name = this.routeName;
    }

    options = options || {};

    var templateName;

    if (name) {
      name = name.replace(/\//g, '.');
      templateName = name;
    } else {
      name = this.routeName;
      templateName = this.templateName || name;
    }

    var viewName = options.view || namePassed && name || this.viewName || name;

    var container = this.container,
        view = container.lookup('view:' + viewName),
        template = view ? view.get('template') : null;


    if (!template) {
      template = container.lookup('template:' + templateName);
    }

    if (!view && !template) {
      Ember.assert("Could not find \"" + name + "\" template or view.", Ember.isEmpty(arguments[0]));
      if (get(this.router, 'namespace.LOG_VIEW_LOOKUPS')) {
        Ember.Logger.info("Could not find \"" + name + "\" template or view. Nothing will be rendered", { fullName: 'template:' + name });
      }
      return;
    }

    options = normalizeOptions(this, name, template, options);
    view = setupView(view, container, options);
    view.classNames.push(viewName)
    if(!skipIntro) view.classNames.push("pre-intro");

    if (options.outlet === 'main') { this.lastRenderedTemplate = name; }

    appendView(this, view, options);
    view.on('didInsertElement', this, function(){this.startIntroTransition(view)})
  }

});

function normalizeOptions(route, name, template, options) {
  options = options || {};
  options.into = options.into ? options.into.replace(/\//g, '.') : parentTemplate(route);
  options.outlet = options.outlet || 'main';
  options.name = name;
  options.template = template;
  options.LOG_VIEW_LOOKUPS = get(route.router, 'namespace.LOG_VIEW_LOOKUPS');

  Ember.assert("An outlet ("+options.outlet+") was specified but was not found.", options.outlet === 'main' || options.into);

  var controller = options.controller,
      model = options.model,
      namedController;

  if (options.controller) {
    controller = options.controller;
  } else if (namedController = route.container.lookup('controller:' + name)) {
    controller = namedController;
  } else {
    controller = route.controllerName || route.routeName;
  }

  if (typeof controller === 'string') {
    var controllerName = controller;
    controller = route.container.lookup('controller:' + controllerName);
    if (!controller) {
      throw new EmberError("You passed `controller: '" + controllerName + "'` into the `render` method, but no such controller could be found.");
    }
  }

  if (model) {
    controller.set('model', model);
  }

  options.controller = controller;

  return options;
}

function setupView(view, container, options) {

  if (view) {

    if (options.LOG_VIEW_LOOKUPS) {
      Ember.Logger.info("Rendering " + options.name + " with " + view, { fullName: 'view:' + options.name });
    }
  } else {

    var defaultView = options.into ? 'view:default' : 'view:toplevel';
    view = container.lookup(defaultView);
    if (options.LOG_VIEW_LOOKUPS) {
      Ember.Logger.info("Rendering " + options.name + " with default view " + view, { fullName: 'view:' + options.name });
    }
  }

  if (!get(view, 'templateName')) {
    set(view, 'template', options.template);

    set(view, '_debugTemplateName', options.name);
  }

  set(view, 'renderedName', options.name);
  set(view, 'controller', options.controller);

  return view;
}

function appendView(route, view, options) {


  if (options.into) {

    var parentView = route.router._lookupActiveView(options.into);
    var teardownOutletView = generateDelayedTeardown(generateOutletTeardown(parentView, options.outlet), route);
    if (!route.teardownOutletViews) { route.teardownOutletViews = []; }

    a_replace(route.teardownOutletViews, 0, 0, [teardownOutletView]);
    parentView.connectOutlet(options.outlet, view);
  } else {
    // tear down view if one is already rendered
    if (route.teardownTopLevelView) {
      route.teardownTopLevelView();
    }

    var rootElement = get(route, 'router.namespace.rootElement');

    route.router._connectActiveView(options.name, view);
    route.teardownTopLevelView = generateDelayedTeardown(generateTopLevelTeardown(view, route), route, view);
    view.appendTo(rootElement);
  }
}

function generateDelayedTeardown(tearDownMethod, route, view){

   return function() { 

    var _router = route.router.router
      , _recognizer = _router.recognizer
      , _targetHandler = _router.getHandler(_recognizer.handlersFor(_router.activeTransition.targetName).pop().handler);

    if(_targetHandler instanceof Portfolio.AnimatedTransitionRoute || route.animateOnDirectAccess ){
      
      var l = route.destroyEvents.length
        , i;

      route.startOutroTransition(view, _targetHandler);

      for(i=0;i<l;i++){ 
        window.animationCompleteEmitter.on(route.destroyEvents[i], function(a){ tearDownMethod();});
      }
      return false;
    }

    //Fall back to instant transition if one or both routes are not of the Portfolio.AnimatedTransitionRoute class;
    tearDownMethod(); 
  };
}

function generateTopLevelTeardown(view, route) {
  return function() { view.destroy(); };
}

function generateOutletTeardown(parentView, outlet) {
  return function() { parentView.disconnectOutlet(outlet); };
}


function parentRoute(route) {
  var handlerInfos = route && route.router && route.router.state && route.router.state.handlerInfos;

  if (!handlerInfos) { return; }

  var parent, current;

  for (var i=0, l=handlerInfos.length; i<l; i++) {
    current = handlerInfos[i].handler;
    if (current === route) { return parent; }
    parent = current;
  }
}

function parentTemplate(route) {
  var parent = parentRoute(route), template;

  if (!parent) { return; }

  if (template = parent.lastRenderedTemplate) {
    return template;
  } else {
    return parentTemplate(parent);
  }
}
