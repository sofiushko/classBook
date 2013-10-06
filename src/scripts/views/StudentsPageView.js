define ('StudentsPageView', ['backbone', 'jquery', 'text!templates/studentsPage.template', 'StudentView'], function(Backbone, $, studentsPage_templ, StudentView){
    return Backbone.View.extend ({
        template: _.template( studentsPage_templ ),
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