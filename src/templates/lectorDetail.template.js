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

    var j1 = [ 0, 'name' ];

    var j2 = [ 0, 'photo_url' ];

    var j3 = [ 0, 'first_name' ];

    var j4 = [ 0, 'last_name' ];

    var j5 = [ 0, 'about' ];

    var j6 = [ 0, 'all_lectures' ];

    var j7 = [ 0, 'url' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lectorDetail" + "\">";
        r0 += "<h1 class=\"" + "lectorDetail__title big_title" + "\">" + nodeset2xml( ( selectNametest('name', c0, []) ) ) + "</h1>";
        r0 += "<div class=\"" + "lectorDetail__container_info" + "\">";
        if (!(cmpSN("", selectNametest('photo_url', c0, [])))) {
            r0 += "<div class=\"" + "lectorDetail__photo-container" + "\"><img class=\"" + "lectorDetail__photo" + "\" src=\"" + nodeset2attrvalue( ( selectNametest('photo_url', c0, []) ) ) + "\" alt=\"" + nodeset2attrvalue( ( selectNametest('first_name', c0, []) ) ) + " " + nodeset2attrvalue( ( selectNametest('last_name', c0, []) ) ) + "\"/></div>";
        }
        if (!(cmpSN("", selectNametest('about', c0, [])))) {
            r0 += "<div class=\"" + "lectorDetail_about" + "\"><p>" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</p></div>";
        }
        r0 += "</div>";
        r0 += "<div class=\"" + "lectorDetail__lectures" + "\">";
        r0 += "<p class=\"" + "lectorDetail__list-title" + "\">" + "Лекции:" + "</p>";
        var items0 = selectNametest('all_lectures', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<a class=\"" + "lectorDetail__list-item link" + "\" href=\"" + nodeset2attrvalue( ( selectNametest('url', c1, []) ) ) + "\" target=\"" + "_blank" + "\">" + nodeset2xml( ( selectNametest('name', c1, []) ) ) + "</a>";
        }
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

    yr.register('lectorDetail', M);

})();
