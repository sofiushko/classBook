define('LectureView', ['backbone', 'jquery', 'lecture.template'], function (Backbone, $) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "lecture",
        
        initialize: function(){
        },

        events: {
            "click" : "openLectureData",
        },

        render: function() {
            var compiled_template = yr.run ('lecture', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        },
        
        openLectureData: function() {
            Backbone.history.navigate("//lectures/" + this.model.get("id"), {trigger: true});
        }

    });
});