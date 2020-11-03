"use strict";  //  Bind to form submit 🚀 Electron && Vue.js && TypeScript && Go  🍰
var oFormWatch = (function( _d, _q){
  var aF = [].slice.call( _d.querySelectorAll( _q ) );
  return {
    "init": function(){
      aF.filter( function( eF ){
        eF.dataset.formWatch = "true";
        eF.addEventListener("submit", oFortWatch.event( eF ));
      });
    },
    "tick": function(){
      setTimeout(function(){ oFormWatch.tick(); }, 1000);
    },
    "event": function( eF ){
console.log("event | " + eF );
      //  if(typeof gtag != "undefined") gtag("event", "interactive", { "event_category": "click", "event_label": "cart", "value": "c2a" });
    }
  };
})( document, "FORM" );
oFormWatch.init();
