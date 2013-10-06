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

    var j3 = [ 0, 'link_facebook' ];

    var j4 = [ 0, 'link_vk' ];

    var j5 = [ 0, 'link_github' ];

    var j6 = [ 0, 'link_yaru' ];

    var j7 = [ 0, 'link_photo' ];

    var j8 = [ 0, 'about' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "personal" + "\">";
        r0 += "<h1 class=\"" + "personal__title" + "\">" + nodeset2xml( ( selectNametest('first_name', c0, []) ) ) + " " + nodeset2xml( ( selectNametest('last_name', c0, []) ) ) + "</h1>";
        r0 += "<div class=\"" + "personal__container" + "\">";
        r0 += "<div class=\"" + "personal__container_contacts" + "\">";
        r0 += "<h3 class=\"" + "contacts_title" + "\">" + "Контакты" + "</h3>";
        r0 += "<ul class=\"" + "contacts_list" + "\">";
        if (simpleBoolean('link_facebook', c0)) {
            r0 += "<li class=\"" + "list_item" + "\">";
            r0 += "<a class=\"" + "list-item-link link" + "\" href=\"" + nodeset2attrvalue( ( selectNametest('link_facebook', c0, []) ) ) + "\" title=\"" + "Facebook" + "\" target=\"" + "_blank" + "\">";
            r0 += "<div class=\"" + "list_item_icon" + "\"></div>";
            r0 += "Facebook";
            r0 += "</a>";
            r0 += "</li>";
        }
        if (simpleBoolean('link_vk', c0)) {
            r0 += "<li class=\"" + "list_item" + "\">";
            r0 += "<a class=\"" + "list-item-link link" + "\" href=\"" + nodeset2attrvalue( ( selectNametest('link_vk', c0, []) ) ) + "\" title=\"" + "ВКонтакте" + "\" target=\"" + "_blank" + "\">";
            r0 += "<div class=\"" + "list_item_icon" + "\"></div>";
            r0 += "ВКонтакте";
            r0 += "</a>";
            r0 += "</li>";
        }
        if (simpleBoolean('link_github', c0)) {
            r0 += "<li class=\"" + "list_item" + "\">";
            r0 += "<a class=\"" + "list-item-link link" + "\" href=\"" + nodeset2attrvalue( ( selectNametest('link_github', c0, []) ) ) + "\" title=\"" + "GitHub" + "\" target=\"" + "_blank" + "\">";
            r0 += "<div class=\"" + "list_item_icon" + "\"></div>";
            r0 += "GitHub";
            r0 += "</a>";
            r0 += "</li>";
        }
        if (simpleBoolean('link_yaru', c0)) {
            r0 += "<li class=\"" + "list_item" + "\">";
            r0 += "<a class=\"" + "list-item-link link" + "\" href=\"" + nodeset2attrvalue( ( selectNametest('link_yaru', c0, []) ) ) + "\" title=\"" + "Я.ру" + "\" target=\"" + "_blank" + "\">";
            r0 += "<div class=\"" + "list_item_icon" + "\"></div>";
            r0 += "Я.ру";
            r0 += "</a>";
            r0 += "</li>";
        }
        r0 += "</ul>";
        r0 += "</div>";
        r0 += "<div class=\"" + "personal__container_info" + "\">";
        if (!(cmpSN("", selectNametest('link_photo', c0, [])))) {
            r0 += "<img class=\"" + "container_info_photo" + "\" src=\"" + nodeset2attrvalue( ( selectNametest('link_photo', c0, []) ) ) + "\" alt=\"" + nodeset2attrvalue( ( selectNametest('first_name', c0, []) ) ) + " " + nodeset2attrvalue( ( selectNametest('last_name', c0, []) ) ) + "\"/>";
        }
        if (!(cmpSN("", selectNametest('about', c0, [])))) {
            r0 += "<div class=\"" + "container_info_about" + "\">" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</div>";
        }
        r0 += "</div>";
        r0 += "</div>";
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

    yr.register('studentPersonal', M);

})();
