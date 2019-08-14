var size = 0;
var placement = 'point';
function categories_KasusPerkecamatan_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'MANOKWARI BARAT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(243,10,22,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'MANOKWARI SELATAN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,81,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(151,48,229,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'MANOKWARI TIMUR':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,81,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,81,1,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'MANOKWARI UTARA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,81,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(138,32,5,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'MASNI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,81,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(138,32,5,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'PRAFI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,81,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(70,74,201,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'SIDEY':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,81,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(43,213,71,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'TANAH RUBUH':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,81,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(239,134,222,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'WARMARE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,81,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(226,32,77,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'TINGKAT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(243,10,22,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_KasusPerkecamatan_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("KECAMATAN");
    var labelText = "";
    size = 0;
    var labelFont = "13.325px \'Times New Roman\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("KECAMATAN") !== null) {
        labelText = String(feature.get("KECAMATAN"));
    }
    
var style = categories_KasusPerkecamatan_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
