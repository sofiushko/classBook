define('StudentView', ['backbone', 'jquery', 'student.template'], function (Backbone, $) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "person",
        
        initialize: function(){
        },

        events: {
        },

        render: function() {
            var compiled_template = yr.run ('student', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        },
        
    });
});