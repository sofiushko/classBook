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

    var j2 = [ 0, 'lector', 0, 'attributes', 0, 'id' ];

    var j3 = [ 0, 'lector', 0, 'attributes', 0, 'photo_url' ];

    var j4 = [ 0, 'lector', 0, 'attributes', 0, 'name' ];

    var j5 = [ 0, 'about' ];

    var j6 = [ 0, 'video_url' ];

    var j7 = [ 0, 'slides_url' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lectureDetail_container" + "\">";
        r0 += "<h1 class=\"" + "lectureDetail__title big_title" + "\">" + nodeset2xml( ( selectNametest('name', c0, []) ) ) + "</h1>";
        r0 += "<div class=\"" + "lectureDetail__container_info" + "\">";
        r0 += "<div class=\"" + "lectureDetail_lector-container" + "\">";
        r0 += "<a href=\"" + "#/lectors/" + nodeset2attrvalue( ( m.s(j2, c0) ) ) + "\" class=\"" + "link lectureDetail_llink" + "\">";
        if (!(cmpSN("", m.s(j3, c0)))) {
            r0 += "<div class=\"" + "lectureDetail__photo-container" + "\">";
            r0 += "<img class=\"" + "lectureDetail__photo" + "\" src=\"" + nodeset2attrvalue( ( m.s(j3, c0) ) ) + "\" alt=\"" + nodeset2attrvalue( ( m.s(j4, c0) ) ) + "\"/>";
            r0 += "</div>";
        }
        r0 += "<p class=\"" + "lectureDetail__lector-name" + "\">" + nodeset2xml( ( m.s(j4, c0) ) ) + "</p>";
        r0 += "</a>";
        r0 += "</div>";
        if (simpleBoolean('about', c0)) {
            r0 += "<div class=\"" + "lectureDetail_about" + "\"><p>" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</p></div>";
        }
        r0 += "<div class=\"" + "lectureDetail_links" + "\">";
        if (simpleBoolean('video_url', c0)) {
            r0 += "<a class=\"" + "lectureDetail_vlink link" + "\" href=\"" + nodeset2attrvalue( ( selectNametest('video_url', c0, []) ) ) + "\" target=\"" + "_blank" + "\">" + "Посмотреть видео" + "</a>";
        }
        if (simpleBoolean('slides_url', c0)) {
            r0 += "<a class=\"" + "lectureDetail_vlink link" + "\" href=\"" + nodeset2attrvalue( ( selectNametest('slides_url', c0, []) ) ) + "\" target=\"" + "_blank" + "\">" + "Посмотреть презентацию" + "</a>";
        }
        r0 += "</div>";
        r0 += "</div>";
        if (simpleBoolean('slides_url', c0)) {
            r0 += "<iframe class=\"" + "lectureDetail_slideshare" + "\" src=\"" + nodeset2attrvalue( ( selectNametest('slides_url', c0, []) ) ) + "\">" + " " + "</iframe>";
        }
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

    yr.register('lectureDetail', M);

})();
