define ('StudentView', ['backbone', 'jquery', 'text!templates/student.template'], function(Backbone, $, student_templ){
    return Backbone.View.extend ({
        //tagName: "div",
        //className: "student",
        template: _.template( student_templ ),
        el: $(".classBook"),

        initialize: function(){
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

    });
});