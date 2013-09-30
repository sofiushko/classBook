define ('StudentModel', ['backbone'], function(Backbone){
    return Backbone.Model.extend ({
        initialize: function() {
        },

        defaults: {
            first_name: "Введите имя",
            last_name: "Введите фамилию",
            link_photo: "img/defaultPhoto.jpg",
            city: "Введите город"
        }

    });
});