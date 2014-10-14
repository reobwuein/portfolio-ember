Portfolio.ArticlesRoute = Portfolio.AnimatedTransitionRoute.extend({
    
    model: function(){
      var model = {};
      model.articles = this.store.find("article");
      return model;
    }
    
});
