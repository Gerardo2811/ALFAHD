function localizacion(posicion){

    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;

    var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=YOUR_API_KEY";

    output.innerHTML ="<img src='"+imgURL+"'>";

    

}

function error(){
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

}

navigator.geolocation.getCurrentPosition(localizacion,error);


