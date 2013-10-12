define('AppView', ['backbone', 'jquery', 'NavigationView'], function (Backbone, $, NavigationView) {
    return Backbone.View.extend ({
        
        el: $('.classBook'),

        Navigation: new NavigationView(),

        initialize: function() {
            this.render();
        },

        setContent: function(View, options) {
            if (this.Content) {
                this.Content.remove();
            }
            this.Content = new View(options);
            this.$el.html(
                this.Content.render().el
            );
        }
    });
});