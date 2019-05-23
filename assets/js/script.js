function backdropCreate(){
  var title = document.getElementById('ideafest-2018').innerText;
  var backdrop = document.createElement("div");   
  backdrop.className += "backdrop";
  backdrop.innerHTML = title; 
  document.body.appendChild(backdrop);
}
backdropCreate();

function addAnchorLink(){
  var anchor = document.getElementsByTagName('h3');
    for (var i = 0; i < anchor.length; i++) {
		  var anchorLink = document.createElement("ion-icon");   
      anchorLink.setAttribute("name","ios-link");
      anchor[i].prepend(anchorLink);
    }
}
addAnchorLink();
