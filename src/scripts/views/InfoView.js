define('InfoView', ['backbone', 'jquery', 'data', 'info.template'], function (Backbone, $, data) {
    return Backbone.View.extend ({
        el: $(".classBook"),
        
        initialize: function(){
        },

        render: function() {
            $('.header__menu_item').removeClass('active');
            $('.header__menu_item a[href="#"]').parent().addClass('active');
            var compiled_template = yr.run ('info', data.about);
            this.$el.html(compiled_template);
            return this;
        }

    });
});