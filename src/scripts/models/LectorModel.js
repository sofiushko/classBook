define ('LectorModel', ['backbone'], function(Backbone){
    return Backbone.Model.extend ({
        initialize: function() {
        },

        defaults: {
            name: "Имя"
        }

    });
});