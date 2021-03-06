var configureSize = function() {
  var innerHeight = window.innerHeight;

  $('#map').css('height', innerHeight + 'px');
};

App.initializer({
  name: "initMap",
  initialize: function() {
    var options = {
      attributionControl: false,
      minZoom: 4,
      maxZoom: 14
    };

    map = L.map('map', options).setView([39.690280594818034, -95.5810546875], 4);
    // lat: 39.690280594818034, lng: -95.5810546875

    App.group = new L.LayerGroup().addTo(map);

    var ggl = new L.Google('ROADMAP', options);
    map.addLayer(ggl);

    // var clusterUrl = gogeoUrl + '/map/' + databaseName + '/' + collectionName + '/{z}/{x}/{y}/cluster.json?mapkey=' + mapkey + '&callback={cb}',
    //     subdomains = ['m1', 'm2', 'm3'];
    // addCluster(clusterUrl, subdomains, group);

    configureSize();

    var bounds = map.getBounds();

    $(window).resize(
      function() {
        configureSize();
      }
    );
  }
});