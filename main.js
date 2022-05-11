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
       .bindPopup('Starting point!!').openPopup();
       //let me get back to this in a minute
       console.log(marker.toGeoJSON());
       //get uesr location via making a fucntion
       //function locateUser() {
         // this.map.locate({setView : true});}
        //in alternate to the function I was able to find a line of code easier to implement to find user location
        //https://www.youtube.com/watch?v=FaABCCKf97c  
        var user = L.control.locate().addTo(map);
        //layer group categories???
        var restaurants = L.layerGroup().addTo(map);
        var hotel = L.layerGroup().addTo(map);
        var gas = L.layerGroup().addTo(map);
        var grocery = L.layerGroup().addTo(map);
        var icecream = L.layerGroup().addTo(map);
        //event listeners for options from html 
        document.getElementById("places").addEventListener('click', async(event)=>{
            event.preventDefault(); //no other actions if things fail when first writng the code
            let locations = document.getElementById('places');
            console.log(location);
        })
        //businesses and such
        const options = {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: 'fsq3IAVEFGdQUJTjjpbxYLMmeb/aeKj1qdXesqSzPumOwK4='
            }
          };
          
          fetch('https://api.foursquare.com/v3/places/search', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));