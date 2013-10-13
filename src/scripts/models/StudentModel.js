define ('StudentModel', ['backbone'], function(Backbone){
    return Backbone.Model.extend ({
        initialize: function() {
        },

        defaults: {
            first_name: "Имя",
            last_name: "Фамилия",
            link_photo: "img/defaultPhoto.jpg",
            city: "Город"
        },

        validate: function(attrs) {
       
            if (attrs.first_name === "") {
                return "Имя не может быть пустым";
            }

            if (attrs.last_name === "") {
                return "Фамилия не может быть пустой";
            }
 
        },

    });
});