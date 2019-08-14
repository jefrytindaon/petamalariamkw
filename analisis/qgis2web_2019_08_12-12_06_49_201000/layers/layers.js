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
var format_TingkatPersebaran_0 = new ol.format.GeoJSON();
var features_TingkatPersebaran_0 = format_TingkatPersebaran_0.readFeatures(json_TingkatPersebaran_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TingkatPersebaran_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TingkatPersebaran_0.addFeatures(features_TingkatPersebaran_0);var lyr_TingkatPersebaran_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TingkatPersebaran_0, 
                style: style_TingkatPersebaran_0,
    title: 'Tingkat Persebaran<br />\
    <img src="styles/legend/TingkatPersebaran_0_0.png" /> Sangat Rawan<br />\
    <img src="styles/legend/TingkatPersebaran_0_1.png" /> Rawan<br />\
    <img src="styles/legend/TingkatPersebaran_0_2.png" /> Tidak Rawan<br />'
        });

lyr_TingkatPersebaran_0.setVisible(true);
var layersList = [baseLayer,lyr_TingkatPersebaran_0];
lyr_TingkatPersebaran_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'JUMLAH_PEN': 'JUMLAH_PEN', 'MIKROSKOP': 'MIKROSKOP', 'RDT': 'RDT', 'PCR': 'PCR', 'TOTAL': 'TOTAL', 'SCORING': 'SCORING', 'Tingkat': 'Tingkat', });
lyr_TingkatPersebaran_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'JUMLAH_PEN': 'TextEdit', 'MIKROSKOP': 'TextEdit', 'RDT': 'TextEdit', 'PCR': 'TextEdit', 'TOTAL': 'TextEdit', 'SCORING': 'TextEdit', 'Tingkat': 'TextEdit', });
lyr_TingkatPersebaran_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'KABUPATEN': 'inline label', 'PROVINSI': 'inline label', 'JUMLAH_PEN': 'inline label', 'MIKROSKOP': 'inline label', 'RDT': 'inline label', 'PCR': 'inline label', 'TOTAL': 'inline label', 'SCORING': 'inline label', 'Tingkat': 'inline label', });
lyr_TingkatPersebaran_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});