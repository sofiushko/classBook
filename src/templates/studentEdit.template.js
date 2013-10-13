var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    var j0 = [ ];

    var j1 = [ 0, 'first_name' ];

    var j2 = [ 0, 'last_name' ];

    var j3 = [ 0, 'city' ];

    var j4 = [ 0, 'link_photo' ];

    var j5 = [ 0, 'link_facebook' ];

    var j6 = [ 0, 'link_vk' ];

    var j7 = [ 0, 'link_github' ];

    var j8 = [ 0, 'link_yaru' ];

    var j9 = [ 0, 'about' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "personalEdit" + "\">";
        r0 += "<form class=\"" + "personalEdit__form" + "\">";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "Имя" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<input value=\"" + nodeset2attrvalue( ( selectNametest('first_name', c0, []) ) ) + "\" name=\"" + "first_name" + "\" type=\"" + "text" + "\" class=\"" + "line-edit" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "Фамилия" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<input value=\"" + nodeset2attrvalue( ( selectNametest('last_name', c0, []) ) ) + "\" name=\"" + "last_name" + "\" type=\"" + "text" + "\" class=\"" + "line-edit" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "Город" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<input value=\"" + nodeset2attrvalue( ( selectNametest('city', c0, []) ) ) + "\" name=\"" + "city" + "\" type=\"" + "text" + "\" class=\"" + "line-edit" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "Ссылка на фото" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<input value=\"" + nodeset2attrvalue( ( selectNametest('link_photo', c0, []) ) ) + "\" name=\"" + "link_photo" + "\" type=\"" + "text" + "\" class=\"" + "line-edit" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "Ссылка на Facebook" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<input value=\"" + nodeset2attrvalue( ( selectNametest('link_facebook', c0, []) ) ) + "\" name=\"" + "link_facebook" + "\" type=\"" + "text" + "\" class=\"" + "line-edit" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "Ссылка на ВКонтакте" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<input value=\"" + nodeset2attrvalue( ( selectNametest('link_vk', c0, []) ) ) + "\" name=\"" + "link_vk" + "\" type=\"" + "text" + "\" class=\"" + "line-edit" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "Ссылка на GitHub" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<input value=\"" + nodeset2attrvalue( ( selectNametest('link_github', c0, []) ) ) + "\" name=\"" + "link_github" + "\" type=\"" + "text" + "\" class=\"" + "line-edit" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "Ссылка на Я.ру" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<input value=\"" + nodeset2attrvalue( ( selectNametest('link_yaru', c0, []) ) ) + "\" name=\"" + "link_yaru" + "\" type=\"" + "text" + "\" class=\"" + "line-edit" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personalEdit__edit-container" + "\">";
        r0 += "<label class=\"" + "edit-container__label" + "\">" + "О студенте" + "</label>";
        r0 += "<div class=\"" + "edit-container__area" + "\">";
        r0 += "<textarea name=\"" + "about" + "\" class=\"" + "textarea-edit" + "\">" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</textarea>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "buttons" + "\">";
        r0 += "<input type=\"" + "submit" + "\" class=\"" + "edit-container__submit button" + "\" value=\"" + "Сохранить" + "\"/>";
        r0 += "<input type=\"" + "reset" + "\" class=\"" + "edit-container__cancel button " + "\" value=\"" + "Отмена" + "\"/>";
        r0 += "</div>";
        r0 += "</form>";
        r0 += "</div>";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        }
    };
    M.imports = [];

    yr.register('studentEdit', M);

})();
