// Place this file inside the theme directory (I use a sub-directory with the name "js")
var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
jQuery(document).ready(function($) {
	$('#contactbutton').click(function() {
		$('#rate-cards').html('<img src="'+baseUrl+'/wp-content/plugins/consultation_form/images/loading.gif" alt="Loading...">');
		var PCV = $('#postcode_value').val();

		if (!PCV) {
			$('#alert').html('Enter Postcode value');
     $( "#alert" ).fadeIn( 600 ).delay( 2000 ).fadeOut( 600 );

     $( ".after-suburb" ).fadeOut( 600 ).delay( 2000 );

			return false;
		} if(PCV.length < 4) {
          $('#alert').html("Sorry, rates for your postcode are not available. Please try a different postcode or give us a call");
     $( "#alert" ).fadeIn( 600 ).delay( 2000 ).fadeOut( 600 );

     $( ".after-suburb" ).fadeOut( 600 ).delay( 2000 );
}
      else    {

			     $.ajax({ //Ajax call.

     	type: "GET",
     	url: baseUrl+"/wp-content/plugins/consultation_form/ajaxData.php",
     	data: 'postcode=' + PCV, 
     	

     }).done (function(data){
     	 // alert(data);     
     // $( ".after-suburb" ).fadeIn( 600 ).delay( 2000 );

     	$('#rate-cards').html('');
     	// $( ".after-suburb" ).fadeOut( 600 ).delay( 2000 );
    

     	// $.each(data, function (d,i){console.log(d)});
     	data = JSON.parse(data);	

     	if(data.length > 0) {
     $( ".after-suburb" ).fadeIn( 600 ).delay( 2000 );
    

     	}else{
			$('#alert').html('Sorry, rates for your postcode are not available. Please try a different postcode or give us a call');

     $( "#alert" ).fadeIn( 600 ).delay( 2000 ).fadeOut( 600 );
     $( ".after-suburb" ).fadeOut( 600 ).delay( 2000 );
     

     	}

     	
				        //--------------------------------------------------------------------
				        // 3) Update html content
				        //--------------------------------------------------------------------
     	jQuery.each(data, function (i,d){
     		// console.log(d);
    // $('#rate-cards').append("<label class='col-xs-12 col-sm-12 service item'><input type='radio' name='rate_type' value="+d.service_name+" class='hidden'><div class='service-inner'><div class='service-name rates-carousel-header'>"+d.service_name+"</div><div class='service-rates'>$<span class='rate-catchup-base' id='zoneOneoff_initVal'>"+d.s_min_cost+"</span> for <span class='rate-catchup-hours' id='zoneOneoff_initHrs'>"+d.s_minimum_hrs+"</span> hours<br>$<span class='rate-catchup-additional'id='zoneOneoff_addVal'>"+d.s_additional_cost+"</span>per hour thereafter</div><div class='service-description'>"+d.service_detail+"</div><button type='button'  id='act_s'>Select</button></div></label>");

    $('#rate-cards').append("<label class='col-xs-12 col-sm-12 service item'><input type='radio' name='rate_type' value="+d.service_name+" class='hidden'><div class='service-inner'><div class='col1'><div class='service-name rates-carousel-header'>"+d.service_name+"</div><div class='service-rates'>$<span class='rate-catchup-base' id='zoneOneoff_initVal'>"+d.s_min_cost+"</span> for <span class='rate-catchup-hours' id='zoneOneoff_initHrs'>"+d.s_minimum_hrs+"</span> hours<br>$<span class='rate-catchup-additional'id='zoneOneoff_addVal'>"+d.s_additional_cost+"</span>per hour thereafter</div></div><div class='col2'><div class='service-description'>"+d.service_detail+"</div></div><div class='col3'><button type='button' id='act_s'>Select</button></div></div></label>");




});
     
				        
				        //recommend reading up on jquery selectors they are awesome 
				        // http://api.jquery.com/category/selectors/
				    }).fail(function(data) {
    // An error occurred
     $( ".after-suburb" ).fadeOut( 600 ).delay( 2000 );
     	
    
});
		}		


 })
});

