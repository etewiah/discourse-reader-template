import Ember from 'ember';

export default Ember.Component.extend({
  navItems: function() {
    var navItems = [{
      name: "Conversations",
      route: "discourse-sites.site"
    }, {
      name: "About",
      route: "discourse-sites.site.about"
    }];
    return navItems;
  }.property(),

  activeNameChanged: function() {
      var navItems = this.get('navItems');
      var currentNavItem = navItems.findBy('name', this.get('activeName'));
      if (currentNavItem) {
        currentNavItem.class = "active"
      }
      debugger;
      // deal with the change
    }.observes('activeName').on('init')
    // classNameBindings: [':tip', 'good', 'bad'],

  // // shouldRerender: Discourse.View.renderIfChanged('validation'),
  // // below is reimplementation of above from discourse:
  // shouldRerender: function(){
  //   Ember.run.once(this, 'rerender');
  // }.observes('validation'),
  // bad: Em.computed.alias('validation.failed'),
  // good: Em.computed.not('bad'),

  // render: function(buffer) {
  //   var reason = this.get('validation.reason');
  //   if (reason) {
  //     var icon = this.get('good') ? 'fa-check' : 'fa-times';
  //     return buffer.push("<i class=\"fa " + icon + "\"></i> " + reason);
  //   }
  // }
});
