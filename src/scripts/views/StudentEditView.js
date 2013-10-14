define('StudentEditView', ['backbone', 'jquery', 'StudentModel', 'studentEdit.template'], function (Backbone, $, StudentModel) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "content",
        
        initialize: function(){

            switch(this.options.mode) {

                case "edit":
                    this.model = this.options.model;
                break;

                case "create":
                    this.model = new StudentModel();
                    this.model.set("id", this.model.cid)
                break;
            }
        },

        events: {
            'click  .edit-container__submit': 'applyEdit',
            'click  .edit-container__cancel': 'cancelEdit',
        },

        render: function() {
            var compiled_template = yr.run ('studentEdit', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        },

        applyEdit: function() {
            var form = $(".personalEdit__form");
            var formJSON = this.serializeJson(form);


            switch(this.options.mode) {
                case "edit":
                case "create":
                    App.studentsC.add(this.model);
                break;
            }

            var error = true;
            this.model.save(formJSON, {
                success: function (model, response) {
                    Backbone.history.navigate('#/students/'+model.get("id"), {trigger: true});
                    error = false;
                },
                error: function (model, error) { //not trigger this
                }
            });

            if (error) {
                alert("Ошибка заполнения формы.\nИмя и фамилия должны быть заполнены!")                    
            };
       
         
        },

        serializeJson: function(form) {
            var outJson = {};
            var formData = form.serializeArray();
            _.each(formData, function(param){
                outJson[param.name] = param.value;
            }, this);

            return outJson;
        },

        cancelEdit: function() {
            switch(this.options.mode) {
                case "edit":
                    Backbone.history.navigate('#/students/'+this.model.get("id"), {trigger: true});
                break;
                case "create":
                    Backbone.history.navigate('#/students', {trigger: true});
                break;
            }
        },
        
    });
});