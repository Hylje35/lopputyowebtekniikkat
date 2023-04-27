document.querySelector("button").addEventListener("click", addComment);


let body = document.querySelector("body");
let name = document.getElementById("nimi");
let viesti = document.getElementById("kommentti");
let checkbox = document.getElementById("important");

function addComment(){


    let h3 = document.createElement("h3");
    h3.textContent = user.value + " " + new Date().toLocaleString();

    let p = document.createElement("p");
    p.textContent = viesti.value;

    if(checkbox.checked){
        h3.classList.add("important");
        p.classList.add("important");
    }

    body.append(h3,p, document.createElement("hr"));

}





