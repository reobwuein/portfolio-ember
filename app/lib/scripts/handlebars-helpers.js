Ember.Handlebars.helper("timeline_event_block", function(event_block) {
  
  var eventName   = event_block.get('name')
    , type        = event_block.get('type')
    , color        = event_block.get('color')
    , id          = event_block.get('id') 
    , start       = new Date(event_block.get("startStamp"))
    , end         = new Date(event_block.get("endStamp"))
    , formatedDateSpan = formatDate(start, end);

  return new Ember.Handlebars.SafeString(
    '<a href="/#/timeline/'+id+'" class="event meetup '+type+(event_block.singleDay ? " single" : "")+'" id="'+eventName+'_'+event_block.get('id')+'" data-name="'+eventName+'" data-time-span="'+formatedDateSpan+'" style="left:'+event_block.startPercentage+'%; width:'+event_block.lengthPercentage+'%; border-color:'+color+'">'+eventName+ " (" + formatedDateSpan+')</a>'
  );
})

Ember.Handlebars.helper("category_link", function(category) {

  return new Ember.Handlebars.SafeString(
    '<a class="category" href="/#/stack?filter='+encodeURIComponent(category)+'">'+category+'</a>'
  );
})

Ember.Handlebars.helper("svg", function(image, name) {

  if(image){

    return new Ember.Handlebars.SafeString(
      '<img src="'+image+'" alt="'+name+'" />'
    );
  }else{

    return new Ember.Handlebars.SafeString(
      '<img src="images/stack/empty.svg" alt="No image" />'
    );
  }
})

Ember.Handlebars.helper("filter_path", function(name) {

    return new Ember.Handlebars.SafeString(
      '#hoi'
    );
})

function formatDate(start, end){

  var noSpan = start.getFullYear() == end.getFullYear() && start.getMonth() == end.getMonth()
    , months = ["January","February","March","April","May","June","July","August","September","November","October","December"]
    , string = "";

  if(noSpan){
    string = months[start.getMonth()] + " " + start.getFullYear();
  }else{
    string = months[start.getMonth()].slice(0,3) + " " + start.getFullYear() + " - "+ months[end.getMonth()].slice(0,3) + " " + end.getFullYear();
  }

  return string;
}