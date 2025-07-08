


	  mapboxgl.accessToken = mapToken;
        const map = new mapboxgl.Map({
        container: "map", 
        style: 'mapbox://styles/mapbox/streets-v12',// container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
 
    const marker = new mapboxgl.Marker({color : "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup( new mapboxgl.Popup({offset: 10})
    .setHTML(`<h4><b>${listing.location}</b><h4><h6>Exact location provided after booking</h6>`))
    .addTo(map);