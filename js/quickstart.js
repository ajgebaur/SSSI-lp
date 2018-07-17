var count = 10;
var redirect =  "http://www.socialsecuritysolutions.com/";
var host = '' + '/';

$(function() {

    $('.slider').each(function(index,value){
	$(value).slider({
	    formatter: function(value) {
		return  value;
	    }
	});
    });

    $('.slider-dollars').slider({
	formatter: function(value) {
	    return '$' + value;
	}
    });

    $("input[name=isMarriedYesNo]").change(function() {
	showHideSpouseFields();
    });

    showHideSpouseFields();

    new WOW().init();
    //var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '';
    //window.history.pushState({path: newurl}, '', newurl);

    $('#request-id').val(0);
    $("#quickstart-form").on("submit", function (e) {
	$('#send-report').button('loading');
	url =  host + 'quickstart/rest/form';
	e.preventDefault();
	$.ajax({
	    type: 'post',
	    url: url,
	    data: $(this).serialize(),
	    success: function (data) {
		$('#request-form-wrapper').hide();
		$('#thank-you-wrapper').show();

		$('#send-report').button('reset');
		countDown();
	    }
	});
    });

    for(var i = 0 ; i < acts.length ; i ++) {
	$('#' + acts[i].name).css("background-color",acts[i]['background-color']);
	$('#' + acts[i].name + '-box' ).css("background-color",acts[i]['background-color']);
	$('#' + acts[i].name + '-label').html(acts[i]['label']);
    }


    initSliderSync();


});


var initSlider= function(){
    $("#allocation-table").colResizable({liveDrag:true, draggingClass:"", gripInnerHtml:"<div class='foodGrip'></div>",onDrag:onAllocationResized,minWidth:3});
    onAllocationResized();
};

acts = [
    {'name':'taxable','label':'Taxable Accounts','background-color':'#a3925e'},
    {'name':'taxdef','label':'Tax Deferred Accounts','background-color':'#314c62'},
    {'name':'taxex','label':'Tax Exempt Accounts','background-color':'#8d8f97'},
    {'name':'annuity','label':'Annuity','background-color':'#6d4264'}

];


config = {
    account:{
	min:'0',
	max:'5000000',
    default:'100000',
	money:true
    },
    monthlyIncome:{
	min:'0',
	max:'10000',
    default:'1000',
	money:true
    },
    age:{
	min:'50',
	max:'95',
    default:'1000'
    },
    retirementAge:{
	min:'60',
	max:'95',
    default:'66'
    }

}

function onAllocationResized(e){

    totalAssets = $('#household-total-assets').val();
    pt=0;
    if (typeof e === 'undefined') {
	for(i=0; i<acts.length; i++){
	    if(i  == 0 ){
		precent = 100 ;
	    }else{
		precent = 0 ;
	    }

	    acts[i].precent = precent;
	    acts[i].absoluteValue = totalAssets * precent / 100 ;

	    $('#' + acts[i].name).html(precent + '%');
	    $('#' + acts[i].name +'-value').html(acts[i].absoluteValue);
	    $('#' + acts[i].name +'-input').val(acts[i].absoluteValue);

	    pt += precent;

	}

    }else{
	var columns = $(e.currentTarget).find("td");
	var ranges = [], total = 0, i, w;

	for(i = 0; i<columns.length; i++){
	    w = columns.eq(i).width();
	    ranges.push(w);
	    total+=w;
	}
	zeroMargin = total / 104;

	for(i=0; i<columns.length; i++){
	    ranges[i] = 100*(ranges[i] - zeroMargin) /(total - 4 * zeroMargin);
	    if(i  == columns.length - 1 ){
		precent = 100 - pt;
	    }else{
		precent = Math.round(ranges[i] ) ;
	    }
	    acts[i].precent = precent;
	    acts[i].absoluteValue = totalAssets * precent / 100 ;

	    $('#' + acts[i].name).html(precent + '%');
	    $('#' + acts[i].name +'-value').html(acts[i].absoluteValue);
	    $('#' + acts[i].name +'-input').val(acts[i].absoluteValue);

	    pt += precent;

	}

    }
}



function submitContact(e){
    url =  host + 'quickstart/rest/form';

    $.ajax({
	type: 'post',
	url: url,
	data: $('#quickstart-form').serialize(),
	success: function (data) {
	    $('#request-id').val(data.requestId);
	    $('#contact-container').hide();
	    $('#assets-container').show();
	    initSlider();
	}
    });
}


function goBack(){
    $('#request-id').val(0);
    $('#contact-container').show();
    $('#assets-container').hide();

}

function showHideSpouseFields() {
    var obj = $( "#isMarriedYesNo1" );
    var ischecked = $('#isMarriedYesNo1').is(':checked');
    if(ischecked) {
	$( ".spouse" ).show();
    } else {
	$( ".spouse" ).hide();
    }

}

function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
	count--;
	timer.innerHTML = "You will be automatically redirected back to retireeincome.com in "+count+" seconds.";
	setTimeout("countDown()", 1000);
    }else{
	window.location.href = redirect;
    }
}

function initSliderSync(){
    $('.slider-sync').each(function(index,value){
	var 	id='#' + $(this).attr('id');

	$(id  + '-input').change(function(){
	    val = $(id  + '-input').val();
	    $(id  ).slider('setValue',parseInt(val));
	});

	$(id).change(function(){
	    val = $(id).val();
	    if( $(id  + '-input' ).length > 0 ){
		$(id  + '-input' ).val(val);
	    }
	    if( $(id  + '-label-value' ).length){
		$(id  + '-label-value' ).html(val);
	    }
	});
    });
}




