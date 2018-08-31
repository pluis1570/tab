   /* places= [
        {area: 'Antelope canyon', information: 'The curves and hollows vary from one to 3 m Wide up to 50m deep. @@@ The upper antelope Canyon is called "the crack" but the Navajo know it as Tsé bighánílíní (" the place where water runs trough rocks"). @@@ Light beams start to peek into the canyon March 20 and disappear October 7 each year.'},
        {area: 'Sequoia national Park', information: 'They have the thickest bark on earth. @@@ They can live to be really, really old! The oldest is around 3200 years old. @@@ Theyre resistant to disease. Yealous yet? '},
        {area: 'Balboa Park', information: 'Its original name was " City Park" @@@ Did you know Balboa park is bigger then Central Park @@@ The parks buildings were used by the military during WW1 and 2'},
    ]*/
   

    function renderPlace(place){
      var div = document.createElement('div')
      var h1 = document.createElement('h1')
      var p = document.createElement('p')
 
         div.appendChild(h1)
         div.appendChild(p)
 
      var Area = document.createTextNode(place.Area)
      var Information = document.createTextNode(place.Information)
 
         h1.appendChild(Area)
         p.appendChild(Information)
 
         return div
     }
 
 function renderPlaces(places){
      var div = document.createElement('div')
         for(var i = 0;i < places.length; i= i +1){
                 var place =places[i]
                 var component = renderPlace(place)
                 div.appendChild(component)
              }
         return div
 }
 
 
 function init() {
    Tabletop.init({
 key: 'https://docs.google.com/spreadsheets/d/19c5VxyfV5P3-4jUwramk5fiyFLm4IPGqqLqo8_6f7-o/pubhtml',
    callback: function (tabletopData, tabletop) {
     var renderPlaces = renderPlaces(tabletopData)
      console.log(renderPlaces)
      document.getElementById("app-4").appendChild(renderPlaces)
    },
 
    simpleSheet: true
  })
 }
 
 window.addEventListener('DOMContentLoaded', init)