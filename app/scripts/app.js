var Portfolio = window.Portfolio = Ember.Application.create({

    ready: function() {
        this.register('device:state', Portfolio.DeviceState, {singleton: true});
        this.inject('controller', 'deviceState', 'device:state');
    }

});

Portfolio.DeviceState = Ember.Object.extend({
  //in real world this would be set after a request to the server
  useDashboardView: true
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');

require('lib/scripts/*');

require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
