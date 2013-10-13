define ('LectureModel', ['backbone'], function(Backbone){
    return Backbone.Model.extend ({
        initialize: function() {
        },

        defaults: {
            name: "Введите название",
        }

    });
});