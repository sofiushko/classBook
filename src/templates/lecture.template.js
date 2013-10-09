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

    var j1 = [ 0, 'id' ];

    var j2 = [ 0, 'name' ];

    var j3 = [ 0, 'lecture_date' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lecture__lector" + "\"></div>";
        r0 += "<a class=\"" + "link lecture__link" + "\" href=\"" + "#/lecture/" + nodeset2attrvalue( ( selectNametest('id', c0, []) ) ) + "\"><h2 class=\"" + "lecture__title" + "\">" + nodeset2xml( ( selectNametest('name', c0, []) ) ) + "</h2></a>";
        if (simpleBoolean('lecture_date', c0)) {
            r0 += "<p class=\"" + "lecture_date" + "\">" + nodeset2xml( ( selectNametest('lecture_date', c0, []) ) ) + "</p>";
        }

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

    yr.register('lecture', M);

})();
