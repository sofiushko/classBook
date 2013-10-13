define('NavigationView', ['backbone', 'jquery', 'navMenu.template'], function (Backbone, $) {
    return Backbone.View.extend ({
        el: $(".navigation"),
        
        render: function() {
            if (this.navLinks===undefined) {
                this.$el.html('');  
            } else {
                var compiled_template = yr.run ('navMenu', this.navLinks);
                this.$el.html(compiled_template); 
            }
            return this;
        },


        setNavigation: function(mainitem, items) {
            $('.header__menu_item').removeClass('active');
            $('a[href="#'+mainitem+'"]').parent().addClass('active');
            this.navLinks = items;
            this.render();
        },

    });
});