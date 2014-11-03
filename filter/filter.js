(function($){


$(document).ready(function(){
	
//temporary for mobile
//$('#mobile-nav').addClass('filter-open');


//start of with all checkboxes checked
$('.flt input[type="checkbox"]').each(function(){ 

$(this).bootstrapSwitch('state', true);

 });


//click on filter tab toggles filter-open class and opens/closes tray
$('li.flt>a').click(function(e){
	
	e.preventDefault();
	$('#main-navigation-inner').toggleClass('filter-open');
	$('#mobile-nav').toggleClass('filter-open');

});

//for mobile
$('#mobile-nav li.flt>a').click(function(e){
	
	e.preventDefault();
	$('#mobile-nav').toggleClass('filter-open');

});

//clicking on x closes tray
// and toggles remove class filter-open
$('.flt a.close').click(function(e){
	
	e.preventDefault();
	$('#main-navigation-inner').toggleClass('filter-open');	
	$('#mobile-nav').toggleClass('filter-open');
	
});

//change to 'all' checkbox
$('.flt input[name="all"]').on('switchChange.bootstrapSwitch', function(e,s){
    
	//toggle all checkboxes with it
	
	$('.flt input[type="checkbox"]:not(input[name="all"])').each(function(){
		
		$(this).bootstrapSwitch('state', s);	
	});
	
	//keep browser toggled on
	if(s===false){
		$('.flt input[name="browser"]').bootstrapSwitch('state', true);
	}
	
	showHideLoader();
});



$('.flt input[type="checkbox"]:not(input[name="all"])').on('switchChange.bootstrapSwitch', function(e,s){
	
	var i = 0;

	//if any of the checkboxes are turn off turn off all
	if(s===false){
	  $('.flt input[name="all"]').bootstrapSwitch('state', s, true); // dont trigger change to 'all' toggle
	}
	
	//if all checkboxes are toggle to on, toggle all checkbox 
	else{
		$('.flt input[type="checkbox"]:not(input[name="all"])').each(function(){
			if($(this).bootstrapSwitch('state') === true){
				i++;
			}
		});
		if( i === 5 ){
			$('.flt input[name="all"]').bootstrapSwitch('state', true, true);
		}
	}
	
	
	showHideLoader();
});

});//end doc

function showHideLoader(){
	$('.fl-loader').show(0).delay(4000).hide(0);
}


})(jQuery);