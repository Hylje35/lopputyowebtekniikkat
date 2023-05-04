

document.getElementById("kommentoi").addEventListener("click", addComment);

var elements = document.querySelector("#respond");
let checkbox = document.getElementById("important");

function addComment(){
    let div = document.createElement("div");
    let nimi = document.createElement("h3");
    let kommentti = document.createElement("p");
    let br = document.createElement("br");

    let date = new Date();

    // The toLocaleString() method returns a string with a language-sensitive representation of this date.//
    nimi.textContent = date.toLocaleString() + " " + user.value;
    kommentti.textContent = viesti.value;
    div.append(nimi);
    div.append(kommentti);
    div.append(br);

    elements.append(div, document.createElement("div"));


}






