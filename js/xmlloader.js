function loadXML(filename) {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {    // IE 5/6
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.overrideMimeType('text/xml');

    xhttp.open("GET", filename, false);
    xhttp.send(null);
    return xhttp.responseXML;
}