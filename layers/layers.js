var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_2Tiendasdeautoservicioydepartamentales_1 = new ol.format.GeoJSON();
var features_2Tiendasdeautoservicioydepartamentales_1 = format_2Tiendasdeautoservicioydepartamentales_1.readFeatures(json_2Tiendasdeautoservicioydepartamentales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Tiendasdeautoservicioydepartamentales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Tiendasdeautoservicioydepartamentales_1.addFeatures(features_2Tiendasdeautoservicioydepartamentales_1);
var lyr_2Tiendasdeautoservicioydepartamentales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Tiendasdeautoservicioydepartamentales_1, 
                style: style_2Tiendasdeautoservicioydepartamentales_1,
                interactive: true,
                title: '<img src="styles/legend/2Tiendasdeautoservicioydepartamentales_1.png" /> 2 Tiendas de autoservicio y departamentales'
            });
var format_2Mercadosytianguis_2 = new ol.format.GeoJSON();
var features_2Mercadosytianguis_2 = format_2Mercadosytianguis_2.readFeatures(json_2Mercadosytianguis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Mercadosytianguis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Mercadosytianguis_2.addFeatures(features_2Mercadosytianguis_2);
var lyr_2Mercadosytianguis_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Mercadosytianguis_2, 
                style: style_2Mercadosytianguis_2,
                interactive: true,
                title: '<img src="styles/legend/2Mercadosytianguis_2.png" /> 2 Mercados y tianguis'
            });
var format_2InstitucionesEducativas_3 = new ol.format.GeoJSON();
var features_2InstitucionesEducativas_3 = format_2InstitucionesEducativas_3.readFeatures(json_2InstitucionesEducativas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2InstitucionesEducativas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2InstitucionesEducativas_3.addFeatures(features_2InstitucionesEducativas_3);
var lyr_2InstitucionesEducativas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2InstitucionesEducativas_3, 
                style: style_2InstitucionesEducativas_3,
                interactive: true,
                title: '<img src="styles/legend/2InstitucionesEducativas_3.png" /> 2 Instituciones Educativas'
            });
var format_2Unidadesmdicasdeconsultaexterna_4 = new ol.format.GeoJSON();
var features_2Unidadesmdicasdeconsultaexterna_4 = format_2Unidadesmdicasdeconsultaexterna_4.readFeatures(json_2Unidadesmdicasdeconsultaexterna_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Unidadesmdicasdeconsultaexterna_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Unidadesmdicasdeconsultaexterna_4.addFeatures(features_2Unidadesmdicasdeconsultaexterna_4);
var lyr_2Unidadesmdicasdeconsultaexterna_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Unidadesmdicasdeconsultaexterna_4, 
                style: style_2Unidadesmdicasdeconsultaexterna_4,
                interactive: true,
                title: '<img src="styles/legend/2Unidadesmdicasdeconsultaexterna_4.png" /> 2 Unidades médicas de consulta externa'
            });
var format_2Unidadesdehositalizacinespecializada_5 = new ol.format.GeoJSON();
var features_2Unidadesdehositalizacinespecializada_5 = format_2Unidadesdehositalizacinespecializada_5.readFeatures(json_2Unidadesdehositalizacinespecializada_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Unidadesdehositalizacinespecializada_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Unidadesdehositalizacinespecializada_5.addFeatures(features_2Unidadesdehositalizacinespecializada_5);
var lyr_2Unidadesdehositalizacinespecializada_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Unidadesdehositalizacinespecializada_5, 
                style: style_2Unidadesdehositalizacinespecializada_5,
                interactive: true,
                title: '<img src="styles/legend/2Unidadesdehositalizacinespecializada_5.png" /> 2 Unidades de hositalización especializada'
            });
var format_2UnidadesdeHospitalizacingeneral_6 = new ol.format.GeoJSON();
var features_2UnidadesdeHospitalizacingeneral_6 = format_2UnidadesdeHospitalizacingeneral_6.readFeatures(json_2UnidadesdeHospitalizacingeneral_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2UnidadesdeHospitalizacingeneral_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2UnidadesdeHospitalizacingeneral_6.addFeatures(features_2UnidadesdeHospitalizacingeneral_6);
var lyr_2UnidadesdeHospitalizacingeneral_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2UnidadesdeHospitalizacingeneral_6, 
                style: style_2UnidadesdeHospitalizacingeneral_6,
                interactive: true,
                title: '<img src="styles/legend/2UnidadesdeHospitalizacingeneral_6.png" /> 2 Unidades de Hospitalización general'
            });
var format_2Proteccincivil_7 = new ol.format.GeoJSON();
var features_2Proteccincivil_7 = format_2Proteccincivil_7.readFeatures(json_2Proteccincivil_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Proteccincivil_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Proteccincivil_7.addFeatures(features_2Proteccincivil_7);
var lyr_2Proteccincivil_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Proteccincivil_7, 
                style: style_2Proteccincivil_7,
                interactive: true,
                title: '<img src="styles/legend/2Proteccincivil_7.png" /> 2 Protección civil'
            });
var format_2Estacindebomberos_8 = new ol.format.GeoJSON();
var features_2Estacindebomberos_8 = format_2Estacindebomberos_8.readFeatures(json_2Estacindebomberos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Estacindebomberos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Estacindebomberos_8.addFeatures(features_2Estacindebomberos_8);
var lyr_2Estacindebomberos_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Estacindebomberos_8, 
                style: style_2Estacindebomberos_8,
                interactive: true,
                title: '<img src="styles/legend/2Estacindebomberos_8.png" /> 2 Estación de bomberos'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_2Tiendasdeautoservicioydepartamentales_1.setVisible(true);lyr_2Mercadosytianguis_2.setVisible(true);lyr_2InstitucionesEducativas_3.setVisible(true);lyr_2Unidadesmdicasdeconsultaexterna_4.setVisible(true);lyr_2Unidadesdehositalizacinespecializada_5.setVisible(true);lyr_2UnidadesdeHospitalizacingeneral_6.setVisible(true);lyr_2Proteccincivil_7.setVisible(true);lyr_2Estacindebomberos_8.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_2Tiendasdeautoservicioydepartamentales_1,lyr_2Mercadosytianguis_2,lyr_2InstitucionesEducativas_3,lyr_2Unidadesmdicasdeconsultaexterna_4,lyr_2Unidadesdehositalizacinespecializada_5,lyr_2UnidadesdeHospitalizacingeneral_6,lyr_2Proteccincivil_7,lyr_2Estacindebomberos_8];
lyr_2Tiendasdeautoservicioydepartamentales_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Mercadosytianguis_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2InstitucionesEducativas_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Unidadesmdicasdeconsultaexterna_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Unidadesdehositalizacinespecializada_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2UnidadesdeHospitalizacingeneral_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Proteccincivil_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Estacindebomberos_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Tiendasdeautoservicioydepartamentales_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Mercadosytianguis_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2InstitucionesEducativas_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Unidadesmdicasdeconsultaexterna_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Unidadesdehositalizacinespecializada_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2UnidadesdeHospitalizacingeneral_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Proteccincivil_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Estacindebomberos_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Tiendasdeautoservicioydepartamentales_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Mercadosytianguis_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2InstitucionesEducativas_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Unidadesmdicasdeconsultaexterna_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Unidadesdehositalizacinespecializada_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2UnidadesdeHospitalizacingeneral_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Proteccincivil_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Estacindebomberos_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Estacindebomberos_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});