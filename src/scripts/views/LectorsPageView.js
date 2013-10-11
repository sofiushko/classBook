define ('LectorsPageView', ['backbone', 'jquery', 'LectorView'], function(Backbone, $, LectorView){
    return Backbone.View.extend ({
        tagName: "div",
        className: "peoplePage",

        render: function() {
            $('.header__menu_item').removeClass('active');
            $('a[href="'+window.location.hash+'"]').parent().addClass('active');
            $('.classBook').html(this.$el)
            this.collection.each(this.renderLector, this); 
            return this;
        },

        renderLector: function(item) {
            var lectorView = new LectorView({
                model:item
            });
            this.$el.append(lectorView.render().el);
        }

    });
});