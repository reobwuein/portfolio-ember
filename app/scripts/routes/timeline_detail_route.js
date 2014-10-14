Portfolio.TimelineDetailRoute = Portfolio.AnimatedTransitionRoute.extend({
  
  windowedView: true,

  model: function(params) {

        var _model = {};
        _model = this.store.find('event', params.event_id);

        return _model;
  },

  destroyEvents : ['introTimelineDetailComplete', 'pageIntroComplete'],

  stopOutroTransition: function(e){
    
    jQuery(e.target)
      .off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');

  },

  startOutroTransition: function(view, target){

    view.$().find("script").remove();
    this._super(view, target);

  },

  stopIntroTransition: function(e){

    jQuery(e.target)
      .off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');

    window.animationCompleteEmitter.trigger('introTimelineDetailComplete');

  },

});
