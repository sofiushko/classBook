define('LectorMidlView', ['backbone', 'jquery', 'lectorMidl.template'], function (Backbone, $) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "lectorMidl",
        
        initialize: function(){
        },

        events: {
        },

        render: function() {
            var compiled_template = yr.run ('lectorMidl', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        }
    });
});