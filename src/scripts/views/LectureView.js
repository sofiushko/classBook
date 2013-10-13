define('LectureView', ['backbone', 'jquery', 'LectorModel', 'lecture.template'], function (Backbone, $, LectorModel) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "lecturesPage__lecture",
        
        initialize: function(){
        },

        events: {
        },

        render: function() {
            var compiled_template = yr.run ('lecture', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        },
        
    });
});