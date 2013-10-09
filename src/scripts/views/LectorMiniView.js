define('LectorMiniView', ['backbone', 'jquery', 'lectorMini.template'], function (Backbone, $) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "lectorMini",
        
        initialize: function(){
        },

        events: {
        },

        render: function() {
            var compiled_template = yr.run ('lectorMini', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        }
    });
});