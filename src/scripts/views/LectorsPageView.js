define ('LectorsPageView', ['backbone', 'jquery', 'LectorView'], function(Backbone, $, LectorView){
    return Backbone.View.extend ({
        template: _.template('<div class="lectorsPage"></div>'),
        el: $(".classBook"),

        render: function() {
            $('.header__menu_item').removeClass('active');
            $('a[href="'+window.location.hash+'"]').parent().addClass('active');
            this.$el.html(this.template());
            this.collection.each(this.renderLector, this); 
            return this;
        },

        renderLector: function(item) {
            var lectorView = new LectorView({
                model:item
            });
            this.$el.find('.lectorsPage').append(lectorView.render().el);
        }

    });
});