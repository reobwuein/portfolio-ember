Portfolio.StackController = Ember.ObjectController.extend({
  
  queryParams: ['filter'],
  
  filter: "",
  categories:null,

  filteredStack: function() {
    var categories = this.get('categories');
    var filters = decodeURIComponent(this.get('filter')).split(",");
    var self = this;

    if(filters && categories){

      categories.then(function(promise){


        var l = promise.length
          , i = 0;

        for(;i<l;i++){
          if(filters.indexOf(promise[i].name) > -1){
            promise[i].activeFilter = true;
          }else{
            promise[i].activeFilter = false;
          }
        }

       self.updateFilterList(filters);

      })

    }
  }.observes('filter', 'categories'),

    
  actions:{
    toggleView: function(element){
      console.log("toggleView", element)
      jQuery("."+element).toggleClass("open")
    },

    toggleFilter: function(filter,a){

      jQuery("html, body").animate({ scrollTop: "0" });

      if(decodeURIComponent( this.get('filter') ).split(",").indexOf(filter) == -1){

        jQuery('.filter[data-filter-name="'+filter+'"]').removeClass("inactive").addClass("active");
        this.set("filter", encodeURIComponent( updateCSV( decodeURIComponent( this.get('filter') ) , [filter] ) ) );

      }else{

        this.set("filter", encodeURIComponent( updateCSV( decodeURIComponent( this.get('filter') ) , false, [filter] ) ) );
        jQuery('.filter[data-filter-name="'+filter+'"]').removeClass("active").addClass("inactive");

      }
    }
  },

  originalList: false,

  updateFilterList: function(filters){

    if(!this.originalList && jQuery(".stack-item-list .stack-item").length > 0 == false)
      return;

    filters = filters && filters[0].length > 0 ? filters : [];
    var originalList = this.originalList = this.originalList && this.originalList.find("*").not("script").length > 0 && this.originalList || jQuery(".stack-item-list").clone();

    var currentList = jQuery(".stack-item-list");

    var newList = originalList.clone().find(".stack-item").filter(function(index, element){
      var itemCategories = getStackItemCategories(jQuery(element)),
        l = filters.length,
        i = 0,
        allowed = true;

      if(l > 0){
        for(; i<l; i++){
          if(itemCategories.indexOf(filters[i]) < 0){
            allowed = false;
            break;
          }
        }
      }
      return allowed;
    })
      
    if(newList.length > 0){
    
      currentList.find(".stack-item").filter(function(index, element){
        var match = true;
        newList.each(function(){
          if(jQuery(this).html() == jQuery(element).html())
            match = false
        })
        return match;
      }).remove();

          
      newList.each(function(index, element){

        var match = true;
        currentList.find(".stack-item").each(function(){
          if(jQuery(this).html() == jQuery(element).html())
            match = false;
        })

        if(match){
          jQuery(element).addClass("pre-intro");
          if(index == 0){
            currentList.prepend(element)
          }else{
            currentList.find(".stack-item").eq(index-1).after(element)
          }
          setTimeout(function(){jQuery(element).removeClass("pre-intro");}, 20);
        }
      });
    }else{

      currentList.find(".stack-item").remove();
    }
  }

});


function getStackItemCategories(stackItemjQueryObject){
  var categoryCSV = stackItemjQueryObject.data("category") || "uncategorized";
  return categoryCSV.split(",")
}

function updateCSV(csv, addValues, removeValues){

    addValues = addValues || [];
    removeValues = removeValues || [];
    csv = csv.length > 0 ? csv : "";

    var csvSplit = csv.length > 0 ? csv.split(",") : []
      , l = removeValues && removeValues.length || 0
      , ll = addValues && addValues.length || 0
      , i = 0
      , f;
    

    for(;i<l;i++){

        f = csvSplit.indexOf(removeValues[i]);

        if(f > -1){
            csvSplit.splice(f,1)
        }
    }

    for(i=0;i<ll;i++){

        f = csvSplit.indexOf(addValues[i]);

        if(f == -1){
            csvSplit.push(addValues[i])
        }
    }

    return csvSplit.join(",")
}