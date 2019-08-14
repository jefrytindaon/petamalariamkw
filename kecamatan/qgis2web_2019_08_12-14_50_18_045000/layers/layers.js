var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_KasusPerkecamatan_0 = new ol.format.GeoJSON();
var features_KasusPerkecamatan_0 = format_KasusPerkecamatan_0.readFeatures(json_KasusPerkecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KasusPerkecamatan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KasusPerkecamatan_0.addFeatures(features_KasusPerkecamatan_0);var lyr_KasusPerkecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KasusPerkecamatan_0, 
                style: style_KasusPerkecamatan_0,
    title: 'Kasus Perkecamatan<br />\
    <img src="styles/legend/KasusPerkecamatan_0_0.png" /> MANOKWARI BARAT<br />\
    <img src="styles/legend/KasusPerkecamatan_0_1.png" /> MANOKWARI SELATAN<br />\
    <img src="styles/legend/KasusPerkecamatan_0_2.png" /> MANOKWARI TIMUR<br />\
    <img src="styles/legend/KasusPerkecamatan_0_3.png" /> MANOKWARI UTARA<br />\
    <img src="styles/legend/KasusPerkecamatan_0_4.png" /> MASNI<br />\
    <img src="styles/legend/KasusPerkecamatan_0_5.png" /> PRAFI<br />\
    <img src="styles/legend/KasusPerkecamatan_0_6.png" /> SIDEY<br />\
    <img src="styles/legend/KasusPerkecamatan_0_7.png" /> TANAH RUBUH<br />\
    <img src="styles/legend/KasusPerkecamatan_0_8.png" /> WARMARE<br />\
    <img src="styles/legend/KasusPerkecamatan_0_9.png" /> SANGAT RAWAN<br />'
        });

lyr_KasusPerkecamatan_0.setVisible(true);
var layersList = [baseLayer,lyr_KasusPerkecamatan_0];
lyr_KasusPerkecamatan_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'JUMLAH_PEN': 'JUMLAH_PEN', 'MIKROSKOP': 'MIKROSKOP', 'RDT': 'RDT', 'PCR': 'PCR', 'TOTAL': 'TOTAL', 'SCORING': 'SCORING', 'Tingkat': 'Tingkat', });
lyr_KasusPerkecamatan_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'JUMLAH_PEN': 'TextEdit', 'MIKROSKOP': 'TextEdit', 'RDT': 'TextEdit', 'PCR': 'TextEdit', 'TOTAL': 'TextEdit', 'SCORING': 'TextEdit', 'Tingkat': 'TextEdit', });
lyr_KasusPerkecamatan_0.set('fieldLabels', {'KECAMATAN': 'header label', 'KABUPATEN': 'header label', 'PROVINSI': 'header label', 'JUMLAH_PEN': 'header label', 'MIKROSKOP': 'header label', 'RDT': 'header label', 'PCR': 'header label', 'TOTAL': 'header label', 'SCORING': 'header label', 'Tingkat': 'header label', });
lyr_KasusPerkecamatan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});