let latitude= null
let longitude= null

      
      //user cords
      //fail safe to make sure it is working but easier to write code = if, else :))
      if(!navigator.geolocation){
          console.log('error')
      }else{
          navigator.geolocation.getCurrentPosition(getPosition)
      }
      function getPosition(position){
          var lat = position.cord.latitude
          var lng = position.cord.longitude
          latitude = lat
          longitude = lng
          console.log('Latitude = '+ lat)
          console.log('Longitude  = '+ lng)
          //marker for locations
          

      }
          
      //lemap = leaflet map 
      if(latitude !== null && longitude!== null){
        const lemap = L.map('map',{
            center: [latitude, longitude],//35.2271, -80.8431
            zoom: 13
        })
        //add a tile layer to add to our map
       //mapbox/streets-v11 tiles from Mapbox’s Static Tiles API
       var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoicHJpeWFua2EtLXNoYWgiLCJhIjoiY2wydHBzdGcxMDZudjNqcDJrcW92M3k5MSJ9.xlHGgmlWn5hrKjQOvSygAw'
    }).addTo(lemap);
    const userLoc = L.marker([latitude,longitude]).addTo(lemap)
      }//curly for if 
      
       
       
      
      
        //layer group categories???
        var restaurants = L.layerGroup().addTo(lemap);
        var hotel = L.layerGroup().addTo(lemap);
        var gas = L.layerGroup().addTo(lemap);
        var grocery = L.layerGroup().addTo(lemap);
        var icecream = L.layerGroup().addTo(lemap);
        //event listeners for options from html 
        document.getElementById("places").addEventListener('click', async(event)=>{
            event.preventDefault(); //no other actions if things fail when first writng the code
            let menu = document.getElementById('places');
            console.log(menu);
        })
        //businesses and such
        //async
        async function getFoodLocations(){
            const options = {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  Authorization: 'fsq3IAVEFGdQUJTjjpbxYLMmeb/aeKj1qdXesqSzPumOwK4='
                }
              };
              
              const reply = await fetch('https://api.foursquare.com/v3/places/search', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
       
            }
        