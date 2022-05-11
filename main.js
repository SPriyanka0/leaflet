alert('hi');

       //initialize the map and set its view to our chosen geographical coordinates and a zoom level
       var map = L.map('map').setView( [35.2271, -80.8431], 13) ; //.setView([ 35.227085, -80.843124], 13);
       //add a tile layer to add to our map
       //mapbox/streets-v11 tiles from Mapbox’s Static Tiles API
       var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
           attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
           maxZoom: 18,
           id: 'mapbox/streets-v11',
           tileSize: 512,
           zoomOffset: -1,
           accessToken: 'pk.eyJ1IjoicHJpeWFua2EtLXNoYWgiLCJhIjoiY2wydHBzdGcxMDZudjNqcDJrcW92M3k5MSJ9.xlHGgmlWn5hrKjQOvSygAw'
       }).addTo(map);
       //marker
       var marker = L.marker([35.2271, -80.8431]).addTo(map) //[35.2271, -80.8431]
       .bindPopup('I am over here!!').openPopup();
       //let me get back to this in a minute
       console.log(marker.toGeoJSON());
       //get uesr location via making a fucntion
       //function locateUser() {
         //  this.map.locate({setView : true});}
        var user = L.control.locate().addTo(map);