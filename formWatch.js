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
    "tick": function(){
      setTimeout(function(){ oFormWatch.tick(); }, 1000);
    },
    "event": function( eV ){
      eV.preventDefault();
console.log("event | " + eV );
      //  if(typeof gtag != "undefined") gtag("event", "interactive", { "event_category": "click", "event_label": "cart", "value": "c2a" });
    }
  };
})( document, "FORM" );
oFormWatch.init();
