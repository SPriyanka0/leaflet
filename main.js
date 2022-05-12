//everything with map goes in here under one variable
const leafMap = {
  //initialize outside of functions
  cord: [],
  locations:[],
  lemap:{}, 
  pmarker: {},
  //gather the map in a function
  createMap(){
    const lemap = L.map('map',{
      center: this.cords, 
      zoom:13,
    })
 //add a tile layer to add to our map
       //mapbox/streets-v11 tiles from Mapbox’s Static Tiles API
       var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoicHJpeWFua2EtLXNoYWgiLCJhIjoiY2wydHBzdGcxMDZudjNqcDJrcW92M3k5MSJ9.xlHGgmlWn5hrKjQOvSygAw'
    }).addTo(lemap);
    var marker = L.marker(this.cords)
    marker.addTo(lemap).bindPopop('You are here').openPopup()
  },
  //businesses 
 createMarkers(){
   for(var i =0; i < this.locations.length; i++){
     this.markers = L.marker([
       this.locations[i].lat,
       this.locations[i].long
     ])
     .bindPopop('marker').addTo(lemap)
   }
 },
}//ending of const leafMap
//foursquare api
//async
async function fourSquare(business){
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq3IAVEFGdQUJTjjpbxYLMmeb/aeKj1qdXesqSzPumOwK4='
    }
  };
  //rewrite fetch so that certain things like types of businesses can be replacable
  let fq = await fetch('https://api.foursquare.com/v3/places/search?query=${business}&ll=35.2271%2C%20-80.8431&limit=5', options)
  let data = await response.text()
  let parseData = JSON.parse(data)

  let locations = parseData.results
    let lat = lemap.cords
    let lng = lemap.cords
    return locations
    

    
}//end of fourSquare


 //go button
 document.getElementById('places').addEventListener('click', async(event)=>{
   event.preventDefault9
   let businesses = document.getElementById('places').value
 })
    

  