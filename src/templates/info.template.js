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

    var j1 = [ 0, 'title' ];

    var j2 = [ 0, 'text' ];

    var j3 = [ 0, 'subtitle' ];

    var j4 = [ 0, 'photo' ];

    var j5 = [ 0, 'susubtitle' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "info" + "\">";
        r0 += "<h1 class=\"" + "info__title" + "\">" + nodeset2xml( ( selectNametest('title', c0, []) ) ) + "</h1>";
        r0 += "<div class=\"" + "info__container" + "\">";
        var items0 = selectNametest('text', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('subtitle', c1)) {
                r0 += "<h2 class=\"" + "info__container_subtitle" + "\">" + nodeset2xml( ( selectNametest('subtitle', c1, []) ) ) + "</h2>";
            }
            if (simpleBoolean('photo', c1)) {
                r0 += "<img class=\"" + "info__photo" + "\" src=\"" + nodeset2attrvalue( ( selectNametest('photo', c1, []) ) ) + "\" alt=\"" + "ШРИ" + "\"/>";
            }
            var items1 = selectNametest('text', c1, []);
            for (var i2 = 0, l2 = items1.length; i2 < l2; i2++) {
                var c2 = items1[ i2 ];
                if (simpleBoolean('susubtitle', c2)) {
                    r0 += "<h3 class=\"" + "info__container_susubtitle" + "\">" + nodeset2xml( ( selectNametest('susubtitle', c2, []) ) ) + "</h3>";
                }
                r0 += "<p class=\"" + "info__container_text" + "\">" + ( simpleScalar('text', c2) ) + "</p>";
            }
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

    yr.register('info', M);

})();
