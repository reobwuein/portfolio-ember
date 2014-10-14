/*global Ember*/
Portfolio.Article = DS.Model.extend({
    name: DS.attr('string'),

    type: DS.attr('string'),

    startStamp: DS.attr('string'),

    endStamp: DS.attr('string'),

    description: DS.attr('string'),

    location: DS.attr('string'),

    events: DS.hasMany('event', {async:true}),

    stackItems: DS.hasMany('stack', {async:true})
});

// delete below here if you do not want fixtures
Portfolio.Article.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',

    type: "employement",
    
    startStamp: 86400000 * 5,
    
    endStamp: 86400000 * 8,
    
    description: 'bar',
    
    location: 'foo',

    events: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 1,
    
    name: 'foo',

    type: "employement",
    
    startStamp: 86400000 * 5,
    
    endStamp: 86400000 * 12,
    
    description: 'bar',
    
    location: 'foo',

    events: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 2,
    
    name: 'deze',

    type: "employement",
    
    startStamp: 86400000 * 40,
    
    endStamp: 86400000 * 50,
    
    description: 'bar',
    
    location: 'foo',

    events: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 3,
    
    name: 'foo',

    type: "schooling",
    
    startStamp: 86400000 * 40,
    
    endStamp: 86400000 * 50,
    
    description: 'bar',
    
    location: 'foo',

    events: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 4,
    
    name: 'foo',

    type: "employement",
    
    startStamp: 86400000 * 35,
    
    endStamp: 86400000 * 38,
    
    description: 'bar',
    
    location: 'foo',

    events: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 5,
    
    name: 'foo',

    type: "employement",
    
    startStamp: 86400000 * 49,
    
    endStamp: 86400000 * 66,
    
    description: 'bar',
    
    location: 'foo',

    events: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 6,
    
    name: 'foo foo foo foo',

    type: "employement",
    
    startStamp: 86400000 * 30,
    
    endStamp: 86400000 * 31 - 1,
    
    description: 'bar',
    
    location: 'foo',

    events: [0,1],

    stackItems: [2,3]
    
  }
  
];
