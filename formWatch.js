<script>
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
console.log( _d.getElementById("input_1_2").value );
console.log( _d.getElementById("input_1_4").value );
console.log( _d.getElementById("input_1_5").value );
console.log( _d.getElementById("input_1_13").value );
       
if( (_d.getElementById("input_1_2").value != "") && (_d.getElementById("input_1_4").value != "") ){
if( (_d.getElementById("input_1_5").value != "") && (_d.getElementById("input_1_13").value != "") ){
         if(typeof gtag != "undefined") gtag("event", "form", { "event_category": "click", "event_label": "form submission", "value": _d.getElementById("input_1_2").value });
         eV.target.submit();
}
}
      }, 800);
    }
  };
})( document, "FORM" );
oFormWatch.init();
</script>
