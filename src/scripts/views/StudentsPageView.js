define ('StudentsPageView', ['backbone', 'jquery', 'StudentView'], function(Backbone, $, StudentView){
    return Backbone.View.extend ({
        tagName: "div",
        className: "peoplePage",

        render: function() {
            $('.header__menu_item').removeClass('active');
            $('a[href="'+window.location.hash+'"]').parent().addClass('active');
            $('.classBook').html(this.$el)
            this.collection.each(this.renderStudent, this); 
            return this;
        },

        renderStudent: function(item) {
            var studentView = new StudentView({
                model:item
            });
            this.$el.append(studentView.render().el);
        }

    });
});