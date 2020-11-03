"use strict";  //  Bind to form submit UX artisan ⚡ illustrator ⚡ front-end engineer
var oFormWatch = (function( _d, _q){
  var aF = [].slice.call( _d.querySelectorAll( _q ) );
  return {
    "init": function(){
      aF.filter( function( eF ){
        eF.dataset.formWatch = "true";
        eF.addEventListener("submit", oFormWatch.event );
      });
    },
    "event": function( eV ){
      eV.preventDefault();
console.log( eV.target );
      setTimeout( function(){
      //  if(typeof gtag != "undefined") gtag("event", "interactive", { "event_category": "click", "event_label": "cart", "value": "c2a" });
        eV.target.submit();
      }, 800);
    }
  };
})( document, "FORM" );
oFormWatch.init();
