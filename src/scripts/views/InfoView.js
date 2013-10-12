define('InfoView', ['backbone', 'jquery', 'data', 'info.template'], function (Backbone, $, data) {
    return Backbone.View.extend ({
        className: 'content',
        
        initialize: function(){
        },

        render: function() {
            var compiled_template = yr.run ('info', data.about);
            this.$el.html(compiled_template);
            return this;
        }

    });
});