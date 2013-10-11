define ('StudentsPageView', ['backbone', 'jquery', 'StudentView'], function(Backbone, $, StudentView){
    return Backbone.View.extend ({
        template: _.template('<div class="studentPage__students"></div>'),
        el: $(".classBook"),

        initialize: function(){
        },

        render: function() {
            $('.header__menu_item').removeClass('active');
            $('a[href="'+window.location.hash+'"]').parent().addClass('active');
            this.$el.html(this.template());
            this.collection.each(this.renderStudent, this); 
            return this;
        },

        renderStudent: function(item) {
            var studentView = new StudentView({
                model:item
            });
            this.$el.find('.studentPage__students').append(studentView.render().el);
        }

    });
});