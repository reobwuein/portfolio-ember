Portfolio.StackRoute = Portfolio.AnimatedTransitionRoute.extend({
    
    //queryParams: ['filter'],

    model: function(params){
        var model = {};

        model.stack = this.store.find("stack");
        return model;
    },

    setupController: function(controller, model) {

        model = model || this.model();

        controller.set('model', model);
        controller.set('categories', DS.PromiseArray.create({
          promise: model.stack.then(getCategories)
        }));
    },

    renderTemplate: function(controller, model){
        
            this._super();

            var filters = decodeURIComponent(controller.get('filter')).split(",");
            controller.updateFilterList(filters);

    },

    actions:{
        didTransition:function(){
            var route = this;
            doWhenAdded(function(){
                var filters = decodeURIComponent(route.controller.get('filter')).split(",");
                route.controller.updateFilterList(filters);
            }, '.stack-item-list .stack-item');
        }
    }
});

function doWhenAdded(method, selector, i)
{
    i = i || 0;
    if(jQuery(selector).length > 0){
        method();
    }else{
        if(i < 50)
        setTimeout( function(){doWhenAdded(method, selector, i);}, 100 );
    }
}

function getCategories(promise){

    var categoryList  = []
      , l           = promise.content.length
      , i           = 0;


    for(;i<l;i++){

      var categoryCSV = promise.content[i].get('category') || ""
        , categoriesSplit = categoryCSV.split(",")
        , category
        , found
        , ll = categoriesSplit.length
        , ii = 0;

      for(;ii<ll;ii++){

        category = categoriesSplit[ii] || "uncategorized";
        found = categoryList.findBy("name", category);

        if(found){
            found.quantity++
        }else{
            categoryList.push({
                name: category,
                quantity: 1,
                position: i
            });
        } 
      }
    }

    return categoryList.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
}