define('StudentView', ['backbone', 'jquery', 'student.template'], function (Backbone, $) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "student",
        
        initialize: function(){
        },

        render: function() {
            var compiled_template = yr.run ('student', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        }

    });
});