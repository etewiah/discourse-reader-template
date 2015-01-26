var Discette = Ember.Object.extend({
  name: "",
  createOnServer: function(complete, error) {
    var data = JSON.parse(JSON.stringify(this) );
    var create_discette_endpoint = '/drive/admin/discette';
    return $.ajax(create_discette_endpoint, {
      type: 'POST',
      dataType: 'json',
      data: data
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },
  updateOnServer: function(complete, error) {
    var self = this;
    var data = JSON.parse(JSON.stringify(this) );
    var update_discette_endpoint = '/drive/admin/discette/' + this.id;

    return $.ajax(update_discette_endpoint, {
      type: 'PUT',
      dataType: 'json',
      data: data
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }, function(result) {
      // Post failed to update
      if (error) {
        error(result);
      }
    });
  }
});


export default Discette;
