define ('StudentModel', ['backbone'], function(Backbone){
    return Backbone.Model.extend ({
        initialize: function() {
        },

        defaults: {
            first_name: "Имя",
            last_name: "Фамилия",
            link_photo: "img/defaultPhoto.jpg",
            city: "Город"
        }

    });
});