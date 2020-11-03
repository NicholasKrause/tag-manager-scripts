"use strict";  //  Bind to form submit 🚀 Electron && Vue.js && TypeScript && Go  🍰
var oFormWatch = (function( _d, _q){
  var eF = _d.querySelectorAll( _q );
  return {
    "init": function(){
    },
    "tick": function(){
      setTimeout(function(){ oFormWatch.tick(); }, 1000);
    },
    "event": function(){
console.log("event");
      //  if(typeof gtag != "undefined") gtag("event", "interactive", { "event_category": "click", "event_label": "cart", "value": "c2a" });
    }
  };
})( document, "#gform_1" );
oFormWatch.init();
