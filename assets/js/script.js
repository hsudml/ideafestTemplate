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
  $('h3').each(function(i){
    var sectionId = "section";  
    sectionId = sectionId+i;
    $(this).attr('id',sectionId);
    $(this).wrap('<a href="#'+sectionId+'"></a>');
    $(this).prepend('<ion-icon name="ios-link"></ion-icon>');
  });
  console.log("anchorLink ran 2!");

}
addAnchorLink();

});
