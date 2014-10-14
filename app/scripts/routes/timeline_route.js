Portfolio.TimelineRoute = Portfolio.AnimatedTransitionRoute.extend({

    windowedViewByQP:true,
    
    model: function(){

        var model = {}

        return this.store.find("event").then(function(result){return filterTimelineEventsByCategory.call(model, result)});
    },

    startIntroTransition: function(view){
      
      this._super(view);
      this.controller.send("initScrubber");
    }
    
});

function filterTimelineEventsByCategory(result, model){

    var filteredItems = {}
      , length = result.content.length
      , categoryArray = [];



    this.earliestEventTime = result.content[0].get("startStamp") || 999999999999999999999;
    this.latestEventTime = result.content[0].get("endStamp") || 0;

    for(var i =0; i<length; i++){

      var timelineEvent = result.content[i]
        , type = timelineEvent.get("type")
        , level = 0
        , overlap;

      filteredItems[type] = filteredItems[type] || [[]];

      overlap = checkOverlap(timelineEvent, filteredItems, type, level);

      while(overlap){
          filteredItems[type][++level] = filteredItems[type][level] || []
          overlap = checkOverlap(timelineEvent, filteredItems, type, level);
      }


      this.earliestEventTime  = Math.min(timelineEvent.get("startStamp"), this.earliestEventTime);
      this.latestEventTime    = Math.max(this.latestEventTime, timelineEvent.get("endStamp"));
      timelineEvent.singleDay = timelineEvent.get("endStamp") - timelineEvent.get("startStamp") < 86400000

      filteredItems[type][level].push(timelineEvent); 
      filteredItems[type][level].name = type; 

    }

    for(category in filteredItems){
      categoryArray = categoryArray.concat(filteredItems[category]);
    }


    //6 months forward and backward; Who knows what the future holds
    this.earliestEventTime = this.earliestEventTime - 15768000000;
    this.latestEventTime = this.latestEventTime + 15768000000;

    setPercentages(result.content, this.earliestEventTime, this.latestEventTime);

    this.nowPercentage = ( new Date().getTime() - this.earliestEventTime ) / (this.latestEventTime - this.earliestEventTime);

    this.categories = categoryArray;

    return this
}

function checkOverlap(timelineEvent, filteredItems, type, level){
    
    var items   = filteredItems[type][level]
      , length  = items.length
      , start   = timelineEvent.get("startStamp")
      , stop    = timelineEvent.get("endStamp");


    for(var i =0; i<length; i++){

      if(start > items[i].get("startStamp") && stop < items[i].get("endStamp") || stop > items[i].get("startStamp") && start < items[i].get("endStamp")){
        return true;
      }

    }
    return false;
}

function setPercentages(items, startTime, stopTime){

    var length  = items.length
      , stopFromOffset  = stopTime - startTime;

    for(var i =0; i<length; i++){

      var startFromOffset = items[i].get("startStamp") - startTime
        , endFromOffset   = items[i].get("endStamp") - startTime
        , itemLength      = endFromOffset - startFromOffset;

      items[i].startPercentage = startFromOffset / stopFromOffset * 100;
      items[i].endPercentage = endFromOffset / stopFromOffset * 100;
      items[i].lengthPercentage = itemLength / stopFromOffset * 100;

    }
}