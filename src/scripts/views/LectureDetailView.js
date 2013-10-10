define ('LectureDetailView', ['backbone', 'jquery', 'lectureDetail.template'], function(Backbone, $){
    return Backbone.View.extend ({
        el: $(".classBook"),

        initialize: function(){
        },

        render: function() {
            var compiled_template = yr.run ('lectureDetail', this.model.toJSON());
            console.log(this.model.toJSON())
            this.$el.html(compiled_template);
            return this;
        }
     });
});