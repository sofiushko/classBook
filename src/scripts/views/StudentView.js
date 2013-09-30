define ('StudentView', ['backbone', 'jquery'], function(Backbone, $){
    return Backbone.View.extend ({
        //tagName: "div",
        //className: "student",
        template: _.template('<h1><%= first_name + last_name %></h1><img class="contact__photo" src="<%= link_photo %>" alt="<%= first_name %>" />'),
        el: $(".classBook"),

        initialize: function(){
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

    });
});