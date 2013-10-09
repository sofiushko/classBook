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

    var j1 = [ 0, 'photo_url' ];

    var j2 = [ 0, 'name' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lectorMidl__container" + "\">";
        if (!(cmpSN("", selectNametest('photo_url', c0, [])))) {
            r0 += "<div class=\"" + "lectorMidl__photo-container" + "\">";
            r0 += "<img class=\"" + "lectorMidl__photo" + "\" src=\"" + nodeset2attrvalue( ( selectNametest('photo_url', c0, []) ) ) + "\" alt=\"" + nodeset2attrvalue( ( selectNametest('name', c0, []) ) ) + "\"/>";
            r0 += "</div>";
        }
        r0 += "<div class=\"" + "lectorMidl_name-container" + "\">";
        r0 += "<p class=\"" + "lectorMidl_name-container_name" + "\">" + nodeset2xml( ( selectNametest('name', c0, []) ) ) + "</p>";
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

    yr.register('lectorMidl', M);

})();
