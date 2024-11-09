ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.061660, -7.416733, 109.081261, -7.402730]);
var wms_layers = [];

var format_gadm41_IDNADM_ADM_4_0 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_0 = format_gadm41_IDNADM_ADM_4_0.readFeatures(json_gadm41_IDNADM_ADM_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm41_IDNADM_ADM_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_0.addFeatures(features_gadm41_IDNADM_ADM_4_0);
var lyr_gadm41_IDNADM_ADM_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_0, 
                style: style_gadm41_IDNADM_ADM_4_0,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDNADM_ADM_4_0.png" /> gadm41_IDN — ADM_ADM_4'
            });
var format_Sawah_1 = new ol.format.GeoJSON();
var features_Sawah_1 = format_Sawah_1.readFeatures(json_Sawah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sawah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_1.addFeatures(features_Sawah_1);
var lyr_Sawah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_1, 
                style: style_Sawah_1,
                popuplayertitle: "Sawah",
                interactive: true,
                title: '<img src="styles/legend/Sawah_1.png" /> Sawah'
            });
var format_RW_2 = new ol.format.GeoJSON();
var features_RW_2 = format_RW_2.readFeatures(json_RW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_2.addFeatures(features_RW_2);
var lyr_RW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_2, 
                style: style_RW_2,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_2_0.png" /> RW01<br />\
    <img src="styles/legend/RW_2_1.png" /> RW02<br />\
    <img src="styles/legend/RW_2_2.png" /> RW03<br />\
    <img src="styles/legend/RW_2_3.png" /> RW04<br />\
    <img src="styles/legend/RW_2_4.png" /> RW05<br />\
    <img src="styles/legend/RW_2_5.png" /> RW06<br />\
    <img src="styles/legend/RW_2_6.png" /> RW07<br />\
    <img src="styles/legend/RW_2_7.png" /> RW08<br />\
    <img src="styles/legend/RW_2_8.png" /> RW09<br />\
    <img src="styles/legend/RW_2_9.png" /> RW12<br />\
    <img src="styles/legend/RW_2_10.png" /> RW10<br />\
    <img src="styles/legend/RW_2_11.png" /> RW11<br />'
        });
var format_RT_3 = new ol.format.GeoJSON();
var features_RT_3 = format_RT_3.readFeatures(json_RT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_3.addFeatures(features_RT_3);
var lyr_RT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_3, 
                style: style_RT_3,
                popuplayertitle: "RT",
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_3_0.png" /> RT01/RW01<br />\
    <img src="styles/legend/RT_3_1.png" /> RT01/RW02<br />\
    <img src="styles/legend/RT_3_2.png" /> RT01/RW03<br />\
    <img src="styles/legend/RT_3_3.png" /> RT01/RW04<br />\
    <img src="styles/legend/RT_3_4.png" /> RT01/RW05<br />\
    <img src="styles/legend/RT_3_5.png" /> RT01/RW12<br />\
    <img src="styles/legend/RT_3_6.png" /> RT02/RW01<br />\
    <img src="styles/legend/RT_3_7.png" /> RT02/RW02<br />\
    <img src="styles/legend/RT_3_8.png" /> RT02/RW03<br />\
    <img src="styles/legend/RT_3_9.png" /> RT02/RW04<br />\
    <img src="styles/legend/RT_3_10.png" /> RT02/RW05<br />\
    <img src="styles/legend/RT_3_11.png" /> RT02/RW12<br />\
    <img src="styles/legend/RT_3_12.png" /> RT03/RW01<br />\
    <img src="styles/legend/RT_3_13.png" /> RT03/RW02<br />\
    <img src="styles/legend/RT_3_14.png" /> RT03/RW03<br />\
    <img src="styles/legend/RT_3_15.png" /> RT03/RW04<br />\
    <img src="styles/legend/RT_3_16.png" /> RT03/RW05<br />\
    <img src="styles/legend/RT_3_17.png" /> RT03/RW12<br />\
    <img src="styles/legend/RT_3_18.png" /> RT04/RW01<br />\
    <img src="styles/legend/RT_3_19.png" /> RT04/RW02<br />\
    <img src="styles/legend/RT_3_20.png" /> RT04/RW03<br />\
    <img src="styles/legend/RT_3_21.png" /> RT04/RW04<br />\
    <img src="styles/legend/RT_3_22.png" /> RT04/RW05<br />\
    <img src="styles/legend/RT_3_23.png" /> RT04/RW12<br />\
    <img src="styles/legend/RT_3_24.png" /> RT05/RW01<br />\
    <img src="styles/legend/RT_3_25.png" /> RT05/RW02<br />\
    <img src="styles/legend/RT_3_26.png" /> RT05/RW03<br />\
    <img src="styles/legend/RT_3_27.png" /> RT05/RW04<br />\
    <img src="styles/legend/RT_3_28.png" /> RT05/RW05<br />\
    <img src="styles/legend/RT_3_29.png" /> RT05/RW12<br />\
    <img src="styles/legend/RT_3_30.png" /> <br />\
    <img src="styles/legend/RT_3_31.png" /> RT01/RW10<br />\
    <img src="styles/legend/RT_3_32.png" /> RT02/RW10<br />\
    <img src="styles/legend/RT_3_33.png" /> RT03/RW10<br />\
    <img src="styles/legend/RT_3_34.png" /> RT04/RW10<br />\
    <img src="styles/legend/RT_3_35.png" /> RT01/RW09<br />\
    <img src="styles/legend/RT_3_36.png" /> RT02/RW09<br />\
    <img src="styles/legend/RT_3_37.png" /> RT03/RW09<br />\
    <img src="styles/legend/RT_3_38.png" /> RT05/RW10<br />\
    <img src="styles/legend/RT_3_39.png" /> RT04/RW09<br />\
    <img src="styles/legend/RT_3_40.png" /> RT05/RW09<br />\
    <img src="styles/legend/RT_3_41.png" /> RT01/RW11<br />\
    <img src="styles/legend/RT_3_42.png" /> RT02/RW11<br />\
    <img src="styles/legend/RT_3_43.png" /> RT03/RW11<br />\
    <img src="styles/legend/RT_3_44.png" /> RT04/RW11<br />\
    <img src="styles/legend/RT_3_45.png" /> RT05/RW11<br />'
        });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_4.png" /> Clipped'
            });
var format_Kali_5 = new ol.format.GeoJSON();
var features_Kali_5 = format_Kali_5.readFeatures(json_Kali_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kali_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kali_5.addFeatures(features_Kali_5);
var lyr_Kali_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kali_5, 
                style: style_Kali_5,
                popuplayertitle: "Kali",
                interactive: true,
    title: 'Kali<br />\
    <img src="styles/legend/Kali_5_0.png" /> 1<br />\
    <img src="styles/legend/Kali_5_1.png" /> 2<br />'
        });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: "Jalan",
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_6_0.png" /> 10<br />\
    <img src="styles/legend/Jalan_6_1.png" /> 5<br />\
    <img src="styles/legend/Jalan_6_2.png" /> 7<br />\
    <img src="styles/legend/Jalan_6_3.png" /> 8<br />\
    <img src="styles/legend/Jalan_6_4.png" /> 9<br />\
    <img src="styles/legend/Jalan_6_5.png" /> <br />'
        });
var format_Poin_7 = new ol.format.GeoJSON();
var features_Poin_7 = format_Poin_7.readFeatures(json_Poin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poin_7.addFeatures(features_Poin_7);
var lyr_Poin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poin_7, 
                style: style_Poin_7,
                popuplayertitle: "Poin",
                interactive: true,
                title: '<img src="styles/legend/Poin_7.png" /> Poin'
            });

lyr_gadm41_IDNADM_ADM_4_0.setVisible(true);lyr_Sawah_1.setVisible(true);lyr_RW_2.setVisible(true);lyr_RT_3.setVisible(true);lyr_Clipped_4.setVisible(true);lyr_Kali_5.setVisible(true);lyr_Jalan_6.setVisible(true);lyr_Poin_7.setVisible(true);
var layersList = [lyr_gadm41_IDNADM_ADM_4_0,lyr_Sawah_1,lyr_RW_2,lyr_RT_3,lyr_Clipped_4,lyr_Kali_5,lyr_Jalan_6,lyr_Poin_7];
lyr_gadm41_IDNADM_ADM_4_0.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Sawah_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RW_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RT_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Clipped_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'aeroway': 'aeroway', 'leisure': 'leisure', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'military': 'military', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_Kali_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lebar': 'lebar', });
lyr_Jalan_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lebar': 'lebar', });
lyr_Poin_7.set('fieldAliases', {'id': 'id', 'kategori': 'kategori', 'nama': 'nama', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Sawah_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RW_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RT_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Clipped_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'aeroway': 'TextEdit', 'leisure': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'emergency': 'TextEdit', 'highway': 'TextEdit', 'water': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', });
lyr_Kali_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'lebar': 'TextEdit', });
lyr_Jalan_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'lebar': 'TextEdit', });
lyr_Poin_7.set('fieldImages', {'id': 'TextEdit', 'kategori': 'TextEdit', 'nama': 'TextEdit', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Sawah_1.set('fieldLabels', {'id': 'no label', 'nama': 'hidden field', });
lyr_RW_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RT_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'aeroway': 'no label', 'leisure': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'layer': 'no label', 'military': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_Kali_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'lebar': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'lebar': 'no label', });
lyr_Poin_7.set('fieldLabels', {'id': 'no label', 'kategori': 'no label', 'nama': 'no label', });
lyr_Poin_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});