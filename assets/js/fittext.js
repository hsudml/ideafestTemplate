$(function() {
 $('.fittext-dynamic').each(function(){
    let t          = $(this),
        width      = t.data("width") * 2,
        characters = t.html().length,
        size       = width/characters;
    
    $(this).css('font-size', `${size}vw`);
  }); 
 console.log( 'fittext!' );
}); 


