$(function() {

function backdropCreate(){
  var title = document.getElementById('ideafest-2018').innerText;
  var backdrop = document.createElement("div");   
  backdrop.className += "backdrop";
  backdrop.innerHTML = title; 
  document.body.appendChild(backdrop);
}
backdropCreate();

function addAnchorLink(){
  var boxId = "section";  
  $('h3').each(function(i){
    $(this).attr('id',boxId+i);
    $(this).wrap('<a href="#'+boxId+'"></a>');
    $(this).prepend('<ion-icon name="ios-link"></ion-icon>');
  });
  console.log("anchorLink ran!");
}
addAnchorLink();

});
