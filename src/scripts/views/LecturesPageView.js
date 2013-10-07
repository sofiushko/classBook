define ('LecturesPageView', ['backbone', 'jquery', 'LectureView', 'lecturesPage.template'], function(Backbone, $, LectureView){
    return Backbone.View.extend ({
        el: $(".classBook"),

        initialize: function(){
        },

        render: function() {
            $('.header__menu_item').removeClass('active');
            $('a[href="'+window.location.hash+'"]').parent().addClass('active');
            console.log('this', this)
            var compiled_template = yr.run ('lecturesPage', this.collection.toJSON());
            this.$el.html(compiled_template);
            this.collection.each(this.renderLecture, this); 
          //  this.collection.each(this.renderLector, this); 

            return this;
        },

        renderLecture: function(item) {
            var lectureView = new LectureView({
                model:item
            });
            this.$el.find('.lecturesPage__lectures').append(lectureView.render().el);
        }

    });
});