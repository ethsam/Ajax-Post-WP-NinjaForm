jQuery(document).on( 'nfFormReady', function( e, layoutView ) { //fonction attente nfFormReady chargé
  jQuery("#nf-field-52").click(function(){

/* parcour des données dans les champs de la page */
    var nom_gardiennage = jQuery('#nf-field-47').val();
    var tel_gardiennage = jQuery('#nf-field-48').val();
    var email_gardiennage = jQuery('#nf-field-49').val();
    var date_depart_gardiennage = jQuery('#nf-field-50').val();
    var date_retour_gardiennage = jQuery('#nf-field-51').val();
    var agence_gardiennage = jQuery('#nf-field-53').val();
/* fin parcour des données dans les champs de la page */


    jQuery( '.nf-response-msg' ).on( 'visibility', function() { //Quand nf-response-msg apparait

      var $element = jQuery( this );
      var timer = setInterval( function() {  //ont démarre une boucle pour la verification

        if( $element.is( ':visible' ) ) {

          console.log("visible");

          clearInterval(timer); // si visible ont arrete la boucle de verification

          /* Debut AjaxPOST */
          var dataString = 'nom=' + nom_gardiennage + '' + '&tel=' + tel_gardiennage + '' + '&email=' + email_gardiennage + '' + '&date_depart=' + date_depart_gardiennage + '' + '&date_retour=' + date_retour_gardiennage + '&agence=' + agence_gardiennage + '';

          jQuery.ajax({
              type:"POST",
              url:"http://url.php",
              data:dataString,
              success:function () {
                  console.log("envois form ok");
              }
          });
          /* Fin AjaxPOST */

        } else {
          console.log("pas visible");
        }
      }, 300 ); //Si le champ est pas visible ont recommence la boucle de verification

    }).trigger( 'visibility' );

  });
});
