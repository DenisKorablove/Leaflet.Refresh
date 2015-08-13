L.Control.Refresh = L.Control.extend({
    options: {
        position: 'topleft'
    },

    initialize: function (baseLayers, overlays, options) {
        L.setOptions(this, options);
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-control-refresh leaflet-bar leaflet-control');

        this.link = L.DomUtil.create('a', 'leaflet-control-refresh-button leaflet-bar-part', container);
        this.link.href = '#';

        this._map = map;


        L.DomEvent.on(this.link, 'click', this._click, this);

        return container;
    },

    _click: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this._map.invalidateSize();
    }
});

L.control.refresh = function (options) {
    return new L.Control.Refresh(options);
};
