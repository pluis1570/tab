
function renderPlace(place){
    var div = document.createElement('place')
    var h1 = document.createElement('h1')
    var p = document.createElement('p')
  
    var img = document.createElement('img')
    img.src = place.Image
  
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(img)
  
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
       var renderedPlaces = renderPlaces(tabletopData)
        console.log(renderedPlaces)
        document.getElementById("app-4").appendChild(renderedPlaces)
      },
   
      simpleSheet: true
    })
   }
   
   window.addEventListener('DOMContentLoaded', init)