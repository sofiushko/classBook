define ('LecturesPageView', ['backbone', 'jquery', 'LectureView', 'lecturesPage.template'], function(Backbone, $, LectureView){
    return Backbone.View.extend ({
        className: 'lecturesPage',

        initialize: function(){
        },

        render: function() {
            $('.classBook').html(this.$el);
            this.collection.each(this.renderLecture, this); 
            return this;
        },

/*------Рендерим одну лекцию-----*/
        renderLecture: function(item) {
            item.set('lector', this.options.lectors.get(item.get("lector_id")))
            var lectureView = new LectureView({
                model:item
            });
            this.$el.append(lectureView.render().el);
          },
    });
});