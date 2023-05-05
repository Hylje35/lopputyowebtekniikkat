

document.getElementById("kommentoi").addEventListener("click", addComment); // lisätään kuuntelija kommentoi buttonille, klikkauksesta suoritetaan addComment funktio

var elements = document.querySelector("#respond");  //haetaan elementit h5 input textarea yms//
/* !!!!!!!!let checkbox = document.getElementById("#important");  
!!!!!!!!!!!jos important checkbox olisi käytössä niin tällä haetaan sen tieto
!!!!!!!!!!!sen jälkeen if lausekkeella määritellään lisätäänkö borderia tai punasta väriä tai mitä tahansa muuta mitä on css tiedostoon määritelty.*/
function addComment(){
    let div = document.createElement("div");
    let nimi = document.createElement("h3");
    let kommentti = document.createElement("p");
    let br = document.createElement("br");

    const date = new Date();

    // The toLocaleString() method returns a string with a language-sensitive representation of this date.//
    nimi.textContent = date.toLocaleString() + " " + user.value;
    kommentti.textContent = viesti.value;
    div.append(nimi);
    div.append(kommentti);
    div.append(br);

    elements.append(div, document.createElement("div"));


}






