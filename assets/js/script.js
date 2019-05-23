var title = document.getElementById('ideafest-2018').innerText;
var backdrop = document.createElement("div");   
backdrop.className += "backdrop";
backdrop.innerHTML = title; 
console.log(title);
document.body.appendChild(backdrop);
