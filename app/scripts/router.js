/*
Portfolio.Router.reopen({
  location: 'history'
});
*/

Portfolio.Router.map(function () {
    
     this.resource('timeline');
     this.resource('timeline_detail', {path : 'timeline/:event_id'});

     this.resource('stack');
     this.resource('stack_detail', {path : 'stack/:stack_id'});

     this.resource('articles');
     this.resource('articles_detail', {path : 'articles/:article_id'});

     this.resource('dev.swatches', {path : 'swatches'});
     this.resource('dev.experiments', {path : 'lab'});
});
