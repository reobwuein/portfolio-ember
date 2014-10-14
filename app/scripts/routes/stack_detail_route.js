Portfolio.StackDetailRoute = Portfolio.AnimatedTransitionRoute.extend({
    
  windowedView: true,
  
  model: function(params) {
        var _model = {};
        _model = this.store.find('stack', params.stack_id).then(splitCategories);

        return _model;
  }, 

  destroyEvents : ['outroStackDetailComplete', 'pageIntroComplete'],

  stopOutroTransition: function(e){

    jQuery(e.target)
      .off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');

    window.animationCompleteEmitter.trigger('outroStackDetailComplete');
  },

  stopIntroTransition: function(e){

    jQuery(e.target)
      .off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');

  }
  
});

function splitCategories(promise){
  promise.categories = promise.get("category").split(",");
  return promise;
}