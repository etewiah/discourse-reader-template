import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    startReplyToTopic: function(){
      this.controller.set('isEditing', true);
    },
    processReplyToTopic: function(){
      this.controller.set('isEditing', false);
      debugger;
    }
  },
  model: function(params) {
    // var topic = this.store.find('topic', params.id);
    // var apiUrl = "/api/topics/3";
    var apiUrl = "/t/" + params.slug + "/" + params.id + ".json";
    var topic = $.getJSON(apiUrl).then(
      function(detailedTopic) {
        return detailedTopic;
      });
    return topic;
  },
  setupController: function(controller, model) {
    // controller.set('model', model.get('data'));
    controller.set('model', model);
    controller.set('isEditing', false);
  }
});
