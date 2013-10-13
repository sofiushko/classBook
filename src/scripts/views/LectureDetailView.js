define ('LectureDetailView', ['backbone', 'jquery', 'lectureDetail.template'], function(Backbone, $){
    return Backbone.View.extend ({
        className: 'content',

        initialize: function(){
        },

        render: function() {
            var compiled_template = yr.run ('lectureDetail', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        }
     });
});