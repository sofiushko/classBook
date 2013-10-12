define ('LecturesPageView', ['backbone', 'jquery', 'LectureView', 'lecturesPage.template'], function(Backbone, $, LectureView){
    return Backbone.View.extend ({
        className: 'content',

        initialize: function(){
        },

        render: function() {
            var compiled_template = yr.run ('lecturesPage');
            this.$el.html(compiled_template);
            this.collection.each(this.renderLecture, this); 
            return this;
        },

/*------Рендерим одну лекцию-----*/
        renderLecture: function(item) {
            item.set('lector', this.options.lectors.get(item.get("lector_id")))
            var lectureView = new LectureView({
                model:item
            });
            this.$el.find('.lecturesPage__lectures').append(lectureView.render().el);
          },
    });
});