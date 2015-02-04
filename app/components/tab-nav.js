import Ember from 'ember';

export default Ember.Component.extend({
  baseNavItems: function() {
    var currentSiteSlug = this.get('currentSiteSlug') || "";
    var baseNavItems = [{
      name: "Conversations",
      route: "discourse-sites.site.default",
      params: currentSiteSlug
    }, {
      name: "About",
      route: "discourse-sites.site.about",
      params: currentSiteSlug
    }];
    return baseNavItems;
  }.property('currentSiteSlug'),
  navItems: function() {
    var navItems = [];
    var baseNavItems = this.get('baseNavItems');
    if (baseNavItems) {
      baseNavItems.forEach(function(navItem) {
        var navItemObject = Ember.Object.create(navItem);
        if (navItem.name === this.get('activeName')) {
          navItemObject.set('class','active');
        };
        navItems.pushObject(navItemObject);
      }.bind(this));

    }
    var viewedTopics = this.get('viewedTopics');
    if (viewedTopics) {
      viewedTopics.forEach(function(navItem) {
        var navItemObject = Ember.Object.create(navItem);
        if (navItem.name === this.get('activeName')) {
          navItemObject.set('class','active');
        };
        navItems.pushObject(navItemObject);
      }.bind(this));
    }
    return navItems;
  }.property('baseNavItems', 'viewedTopics', 'viewedTopics.length','activeName'),
  // activeNameChanged: function() {
  //   var navItems = this.get('navItems');
  //   var previousActiveItem = navItems.findBy('class', 'active');
  //   if (previousActiveItem) {
  //     previousActiveItem.set('class', '');
  //   }
  //   var currentNavItem = navItems.findBy('name', this.get('activeName'));
  //   if (currentNavItem) {
  //     currentNavItem.set('class', "active");
  //   }
  // }.observes('activeName').on('init'),

  // viewedTopicsChanged: function() {
  //     var viewedTopics = this.get('viewedTopics');
  //     if (viewedTopics) {
  //       var navItems = this.get('navItems');
  //       viewedTopics.forEach(function(navItem) {
  //         navItems.pushObject(navItem);
  //       });
  //       // debugger;
  //     }
  //   }.observes('viewedTopics', 'viewedTopics.length').on('init')
  // .on('init')
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
