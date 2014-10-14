Portfolio.TimelineController = Ember.ObjectController.extend({
  
  set: false,

  actions:{

      scale: function(amount){
        jQuery(".time-line-list").removeClass("x1 x2 x3 x5 x10 x100").addClass("x"+amount);
        moveTimelineScrubber();
      },

      initScrubber: function(){


        jQuery(".time-line-list").scrollLeft(1000000);

        jQuery(".now").css("left", (this.model.nowPercentage * 100) + "%");

        //update scrubber on scroll
        jQuery(".time-line-list").on("scroll", moveTimelineScrubber);

        //update update scroll on scrub
        jQuery(".time-line-list + form .scrubber").on("mousedown",function(e){
          scrollTimeline.call(this, e);
          jQuery(this).on("mousemove", scrollTimeline);

          jQuery(this).one("mouseleave", function(){
            jQuery(this).off("mousemove", scrollTimeline);
          });
          jQuery(this).one("mouseup", function(){
            jQuery(this).off("mousemove", scrollTimeline);
          });
        
        })

      }
  },

});



function moveTimelineScrubber(e){

  var $list = jQuery(".time-line-list")
    , $scope = jQuery(".time-line-list + form .scope")
    , listWidth = $list.find(".time-line").innerWidth()
    , listLeft = $list.scrollLeft();

  $scope.css("left", (listLeft / listWidth * 100) + "%");
}

function scrollTimeline(e){
  var posX = $(this).position().left
    , $scope = jQuery(".time-line-list + form .scope")
    , $list = jQuery(".time-line-list")
    , listWidth = $list.find(".time-line").innerWidth()
    , halfScopeWidth = $scope.outerWidth() / 2
    , scrubberWidth = $scope.parent().innerWidth()
    , scrollOfTotal = (e.pageX - posX - halfScopeWidth) / scrubberWidth;


  $list.scrollLeft(listWidth * scrollOfTotal);
}
