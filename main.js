//everything with map goes in here under one variable
const leafMap = {
  //initialize outside of functions
  cord: [],
  business:[],
  lemap:{}, 
  pmarker: {},
  //gather the map in a function
  createMap(){
    this.map = L.map('map',{
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
    marker.addTo(map).bindPopop('You are here').openPopup()
  },
  //businesses 
}//ending of const leafMap

    