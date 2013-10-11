define('LectorView', ['backbone', 'jquery', 'lector.template'], function (Backbone, $) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "lector",

        render: function() {
            var compiled_template = yr.run ('lector', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        },
        
    });
});