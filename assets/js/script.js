function isNull(id){
	//alert(id);
	var $msg=$("#"+id).parent().find("span.val-msg");
	
	if($('#'+id).val() == "" || $('#'+id).val() == null )					
	{
		$('#'+id).closest('.form-group').addClass('has-error');
		$msg.text('Please enter value');
		$('#'+id).focus();
		return false;
	}
	else
	{
		$('#'+id).closest('.form-group').removeClass('has-error');
		$('#'+id).closest('.form-group').addClass('has-sucess');
		$msg.text('');
		return true;
	}
}


//validation for take mobile number
function isMobile(id){
	var $msg=$("#"+id).parent().find("span.val-msg");
	
	var mbno = $('#'+id).val();
	
	if(mbno.charAt(0)=="0")
	{
		if(mbno.charAt(1)=="1" || mbno.charAt(1)=="2" || mbno.charAt(1)=="3" || mbno.charAt(1)=="4" || mbno.charAt(1)=="5")
		{
			$('#'+id).closest('.form-group').addClass('has-error');
			$msg.text("Invalid Mobile Number");
			$('#'+id).focus();
			return false;
		}
		else
			var phoneno = /^\d{11}$/;
	}
	else if(mbno.charAt(0)=="1" || mbno.charAt(0)=="2" || mbno.charAt(0)=="3" || mbno.charAt(0)=="4" || mbno.charAt(0)=="5")
	{
		$('#'+id).closest('.form-group').addClass('has-error');
		$msg.text("Mobile Number starts with only 6,7,8,9,0");
		$('#'+id).focus();
		return false;
	}
	else
	{
		var phoneno = /^\d{10}$/;
		//var phoneno = /^[0][1-9]\d{10}$|^[1-9]\d{10}$/;
	}
	
	if(mbno.match(phoneno))
	{
		$('#'+id).closest('.form-group').removeClass('has-error');
		$('#'+id).closest('.form-group').addClass('has-sucess');
		$msg.text('');
		return true;
	}
	else
	{
		$('#'+id).closest('.form-group').addClass('has-error');
		//$('#'+id).val('');
		$msg.text("Please Enter valid Mobile Number");
		return false;
	}
}

//validation for email id
function isEmail(id)
{
	var $msg=$("#"+id).parent().find("span.val-msg");
	var email = $("#"+id).val();
	
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email == "")
	{
		$('#'+id).closest('.form-group').addClass('has-error');
		$msg.text('Please Enter email id');
		return true;
	}
	else
	{
		if(email.match(mailformat))
		{
			$('#'+id).closest('.form-group').removeClass('has-error');
			$('#'+id).closest('.form-group').addClass('has-sucess');
			$msg.text('');
			return true;
		}
		else
		{
			$('#'+id).closest('.form-group').addClass('has-error');
			$msg.text("You have enter an invalid email address ! ");
			//msgBox("You have entered an invalid email address ! ","Invalid Entry","error");
			//$("#"+id).focus();
			return false;
		}
	}
}

//validation for take number
function isNumber(id)
{
	var $msg = $("#"+id).parent().find("span.val-msg");
	//var mt2 = "";

	if($('#'+id).val() == "" || $('#'+id).val() == null )					
	{
	//	mt += String.fromCharCode(unicode);
		$('#'+id).closest('.form-group').removeClass('has-error');
		$('#'+id).closest('.form-group').addClass('has-sucess');
		$msg.text('Please enter number');
		return false;

	}
	else
	{
		var regexp = /^[0-9]+$/;
	}
	
	if($('#'+id).val().match(regexp))					
	{
		$('#'+id).closest('.form-group').removeClass('has-error');
		$('#'+id).closest('.form-group').addClass('has-sucess');
		$msg.text('');
		return true;
	}
	else
	{
		$('#'+id).closest('.form-group').addClass('has-error');
		$msg.text("Please enter only number");
		$('#'+id).focus();
		return false;
	}
}


//function is for used for check combo box is null or not
function isDrop(id){
	var $msg=$("#"+id).parent().find("span.val-msg");
	
	if($('#'+id).val() == "" || $('#'+id).val() == null )					
	{
		$('#'+id).closest('.form-group').addClass('has-error');
		//$msg.text('Please select value.');
		$('#'+id).focus();
		return false;
	}
	else
	{
		$('#'+id).closest('.form-group').removeClass('has-error');
		$('#'+id).closest('.form-group').addClass('has-sucess');
		$msg.text('');
		return true;
	}
}


//validation for take  number
function isNum(e)
{
	var mt2 = "";

	var unicode = e.charCode ? e.charCode : e.keyCode;
	if ((unicode == 8) || (unicode == 9) || (unicode == 46) || (unicode > 47 && unicode < 58))
	{
		mt2 += String.fromCharCode(unicode);
		return true;

	}
	else
	{
		//alert("This field accepts only Numbers(0-9)");
		alert("This field accepts only Numbers(0-9)");
		/*msgBox("This field accepts only Numbers(0-9)", "Invalid Entry", "error");*/
		return false;
	}
}

/*
$('#contact_printer_for').change(function(){
     if($('#contact_printer_for').val() == "Rental Printer for")
     {
	 	$("#divContactOption").removeClass('d-none');
	 	$("#divContactOption").addClass('d-block');
	 }
	 else
	 {
	 	$("#divContactOption").removeClass('d-block')	;
	 	$("#divContactOption").addClass('d-none')	;
	 }
 });

$('#offer_printer_for').change(function(){
     if($('#offer_printer_for').val() == "Rental Printer for")
     {
	 	$("#divOfferOption").removeClass('d-none');
	 	$("#divOfferOption").addClass('d-block');
	 }
	 else
	 {
	 	$("#divOfferOption").removeClass('d-block')	;
	 	$("#divOfferOption").addClass('d-none')	;
	 }
 });

$('#inquiry_printer_for').change(function(){
     if($('#inquiry_printer_for').val() == "Rental Printer for")
     {
	 	$("#divInquiryOption").removeClass('d-none');
	 	$("#divInquiryOption").addClass('d-block');
	 }
	 else
	 {
	 	$("#divInquiryOption").removeClass('d-block');
	 	$("#divInquiryOption").addClass('d-none');
	 }
 });

$('#printer_for').change(function()
{
     if($('#printer_for').val() == "Rental Printer for")
     {
	 	$("#divDemoOption").removeClass('d-none');
	 	$("#divDemoOption").addClass('d-block');
	 }
	 else
	 {
	 	$("#divDemoOption").removeClass('d-block')	;
	 	$("#divDemoOption").addClass('d-none')	;
	 }
 });

*/

function freeDemo()
{
	var name = $('#name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var printer_for = $('#printer_for').val();
	var monthly_print = $('#monthly_print').val();
	var message = $('#message').val();

	if(name == "" && email == "" &&  phone == "" &&  printer_for == "" &&  monthly_print == "" &&  message == "")
	{
		alert("Fill all details");
		$('#name').focus();
	}
	else if(name == "")
	{
		$('#name').closest('.form-group').addClass('has-error');
		var $msg = $("#name").parent().find("span.val-msg");
		$msg.text('Please enter Name.');
		$('#name').focus();
		return false;
	}
	else if(email == "")
	{
		$('#email').closest('.form-group').addClass('has-error');
		var $msg = $("#email").parent().find("span.val-msg");
		$msg.text('Please enter email.');
		$('#email').focus();
		return false;
	}
	else if(phone == "")
	{
		$('#phone').closest('.form-group').addClass('has-error');
		var $msg = $("#phone").parent().find("span.val-msg");
		$msg.text('Please enter phone.');
		$('#phone').focus();
		return false;
	}
	else if(printer_for == "")
	{
		$('#printer_for').closest('.form-group').addClass('has-error');
		var $msg = $("#printer_for").parent().find("span.val-msg");
		$msg.text('Please select printer for.');
		$('#printer_for').focus();
		return false;
	}
	else if(monthly_print == "")
	{
		$('#monthly_print').closest('.form-group').addClass('has-error');
		var $msg = $("#monthly_print").parent().find("span.val-msg");
		$msg.text('Please enter monthly print.');
		$('#monthly_print').focus();
		return false;
	}
	else if(message == "")
	{
		$('#message').closest('.form-group').addClass('has-error');
		var $msg = $("#message").parent().find("span.val-msg");
		$msg.text('Please enter message.');
		$('#message').focus();
		return false;
	}
	else
	{
		$('#freeDemoForm')[0].reset();

		var data =
		{
			name :	name,
			email :	email,
			phone :	phone,
			printer_for :	printer_for,
			monthly_print :	monthly_print,
			message :	message,
			action : "freeDemo"
		};

		$.ajax(
			{
				url: 'action.php',
				data:
				{
					myData: data
				},
				type: 'POST',
				dataType: "json",
				success: function (data)
				{
					if(data.status=="success")
					{
						$('#freeDemo').modal('hide');
						$('#thankModal').modal('show');
					}
					else if(data.status=="error")
					{
						alert(data.err_msg);
						location.reload(); 
					}
				},
			});
	}
}

function superOffer()
{
	
	var name = $('#offer_name').val();
	var email = $('#offer_email').val();
	var phone = $('#offer_phone').val();
	var printer_for = $('#offer_printer_for').val();
	var monthly_print = $('#offer_monthly_print').val();
	var message = $('#offer_message').val();

	if(name == "" && email == "" &&  phone == "" && printer_for == "" && monthly_print == "" &&  message == "")
	{
		alert("Fill all details");
		$('#offer_name').focus();
	}
	else if(name == "")
	{
		$('#offer_name').closest('.form-group').addClass('has-error');
		var $msg = $("#offer_name").parent().find("span.val-msg");
		$msg.text('Please enter Name.');
		$('#offer_name').focus();
		return false;
	}
	else if(email == "")
	{
		$('#offer_email').closest('.form-group').addClass('has-error');
		var $msg = $("#offer_email").parent().find("span.val-msg");
		$msg.text('Please enter email.');
		$('#offer_email').focus();
		return false;
	}
	else if(phone == "")
	{
		$('#offer_phone').closest('.form-group').addClass('has-error');
		var $msg = $("#offer_phone").parent().find("span.val-msg");
		$msg.text('Please enter phone.');
		$('#offer_phone').focus();
		return false;
	}
	else if(printer_for == "")
	{
		$('#offer_printer_for').closest('.form-group').addClass('has-error');
		var $msg = $("#offer_printer_for").parent().find("span.val-msg");
		$msg.text('Please select printer for.');
		$('#offer_printer_for').focus();
		return false;
	}
	else if(monthly_print == "")
	{
		$('#offer_monthly_print').closest('.form-group').addClass('has-error');
		var $msg = $("#offer_monthly_print").parent().find("span.val-msg");
		$msg.text('Please enter monthly print.');
		$('#offer_monthly_print').focus();
		return false;
	}
	else if(message == "")
	{
		$('#offer_message').closest('.form-group').addClass('has-error');
		var $msg = $("#offer_message").parent().find("span.val-msg");
		$msg.text('Please enter message.');
		$('#offer_message').focus();
		return false;
	}
	else
	{
		$('#superOfferForm')[0].reset();

		var data =
		{
			name :	name,
			email :	email,
			phone :	phone,
			printer_for :	printer_for,
			monthly_print :	monthly_print,
			message :	message,
			action : "superOffer"
		};

		$.ajax(
			{
				url: 'action.php',
				data:
				{
					myData: data
				},
				type: 'POST',
				dataType: "json",
				success: function (data)
				{
					if(data.status=="success")
					{
						$('#superOffer').modal('hide');
						$('#thankModal').modal('show');
					}
					else if(data.status=="error")
					{
						alert(data.err_msg);
						location.reload(); 
					}
				},
			});
	}
}

function productInquiry()
{
	var product_name = $('#product_name').text();
	var name = $('#inquiry_name').val();
	var email = $('#inquiry_email').val();
	var phone = $('#inquiry_phone').val();
	var printer_for = $('#inquiry_printer_for').val();
	var monthly_print = $('#inquiry_monthly_print').val();
	var message = $('#inquiry_message').val();

	if(name == "" && email == "" &&  phone == "" && printer_for == "" && monthly_print == "" &&  message == "")
	{
		alert("Fill all details");
		$('#inquiry_name').focus();
	}
	else if(name == "")
	{
		$('#inquiry_name').closest('.form-group').addClass('has-error');
		var $msg = $("#inquiry_name").parent().find("span.val-msg");
		$msg.text('Please enter Name.');
		$('#inquiry_name').focus();
		return false;
	}
	else if(email == "")
	{
		$('#inquiry_email').closest('.form-group').addClass('has-error');
		var $msg = $("#inquiry_email").parent().find("span.val-msg");
		$msg.text('Please enter email.');
		$('#inquiry_email').focus();
		return false;
	}
	else if(phone == "")
	{
		$('#inquiry_phone').closest('.form-group').addClass('has-error');
		var $msg = $("#inquiry_phone").parent().find("span.val-msg");
		$msg.text('Please enter phone.');
		$('#inquiry_phone').focus();
		return false;
	}
	else if(printer_for == "")
	{
		$('#inquiry_printer_for').closest('.form-group').addClass('has-error');
		var $msg = $("#inquiry_printer_for").parent().find("span.val-msg");
		$msg.text('Please select printer for.');
		$('#inquiry_printer_for').focus();
		return false;
	}
	else if(monthly_print == "")
	{
		$('#inquiry_monthly_print').closest('.form-group').addClass('has-error');
		var $msg = $("#inquiry_monthly_print").parent().find("span.val-msg");
		$msg.text('Please enter monthly print.');
		$('#inquiry_monthly_print').focus();
		return false;
	}
	else if(message == "")
	{
		$('#inquiry_message').closest('.form-group').addClass('has-error');
		var $msg = $("#inquiry_message").parent().find("span.val-msg");
		$msg.text('Please enter message.');
		$('#inquiry_message').focus();
		return false;
	}
	else
	{
		$('#productInquiryForm')[0].reset();

		var data =
		{
			product_name :	product_name,
			name :	name,
			email :	email,
			phone :	phone,
			printer_for :	printer_for,
			monthly_print :	monthly_print,
			message :	message,
			action : "productInquiry"
		};

		$.ajax(
			{
				url: 'action.php',
				data:
				{
					myData: data
				},
				type: 'POST',
				dataType: "json",
				success: function (data)
				{
					if(data.status=="success")
					{
						$('#productInquiry').modal('hide');
						$('#thankModal').modal('show');
					}
					else if(data.status=="error")
					{
						alert(data.err_msg);
						location.reload(); 
					}
				},
			});
	}
}



function contactUs()
{
	//alert("Hello");
	var name = $('#contact_name').val();
	var phone = $('#contact_phone').val();
	var email = $('#contact_email').val();
	//var subject = $('#contact_subject').val();
	var printer_for = $('#contact_printer_for').val();
	var monthly_print = $('#contact_monthly_print').val();
	var message = $('#contact_message').val();

	if(name == "" && phone == "" && email == "" &&  printer_for == "" && monthly_print == "" && message == "")
	{
		alert("Fill all details");
		$('#contact_name').focus();
	}
	else if(name == "")
	{
		$('#contact_name').closest('.form-group').addClass('has-error');
		var $msg = $("#contact_name").parent().find("span.val-msg");
		$msg.text('Please enter name.');
		$('#contact_name').focus();
		return false;
	}
	else if(phone == "")
	{
		$('#contact_phone').closest('.form-group').addClass('has-error');
		var $msg = $("#contact_phone").parent().find("span.val-msg");
		$msg.text('Please enter phone number.');
		$('#contact_phone').focus();
		return false;
	}
	else if(email == "")
	{
		$('#contact_email').closest('.form-group').addClass('has-error');
		var $msg = $("#contact_email").parent().find("span.val-msg");
		$msg.text('Please enter Full name.');
		$('#contact_email').focus();
		return false;
	}
	/*else if(subject == "")
	{
		$('#contact_subject').closest('.form-group').addClass('has-error');
		var $msg = $("#contact_subject").parent().find("span.val-msg");
		$msg.text('Please enter subject.');
		$('#contact_subject').focus();
		return false;
	}*/
	else if(printer_for == "")
	{
		$('#contact_printer_for').closest('.form-group').addClass('has-error');
		var $msg = $("#contact_printer_for").parent().find("span.val-msg");
		$msg.text('Please subject printer for.');
		$('#contact_printer_for').focus();
		return false;
	}
	else if(monthly_print == "")
	{
		$('#contact_monthly_print').closest('.form-group').addClass('has-error');
		var $msg = $("#contact_monthly_print").parent().find("span.val-msg");
		$msg.text('Please enter monthly print.');
		$('#contact_monthly_print').focus();
		return false;
	}
	else if(message == "")
	{
		$('#contact_message').closest('.form-group').addClass('has-error');
		var $msg = $("#contact_message").parent().find("span.val-msg");
		$msg.text('Please enter message.');
		$('#contact_message').focus();
		return false;
	}
	else
	{
		$('#contactUsForm')[0].reset();
		var data =
		{
			name :	name,
			phone :	phone,
			email :	email,
			subject	: subject,
			printer_for	: printer_for,
			monthly_print	: monthly_print,
			message	: message,
			action : "contactUs"
		};

		$.ajax(
			{
				url: 'action.php',
				data:
				{
					myData: data
				},
				type: 'POST',
				dataType: "json",
				success: function (data)
				{
					if(data.status=="success")
					{
						//alert(data.sus_msg);
						$('#thankModal').modal('show');
						//location.reload();
					}
					else if(data.status=="error")
					{
						alert(data.err_msg);
						location.reload(); 
					}
				},
			});
	}
}


//setting callback function for 'hidden.bs.modal' event
$('#thankModal').on('hidden.bs.modal', function(){
  //remove the backdrop
  $('.modal-backdrop').remove();
})



function hireMe()
{
	//alert("Hello");
	var name = $('#hire_name').val();
	var phone = $('#hire_phone').val();
	var location = $('#hire_location').val();
	var desig = $('#hire_desig').val();
	var message = $('#hire_message').val();

	if(name == "" && phone == "" && location == "" &&  desig == "" && message == "")
	{
		alert("Fill all details");
		$('#hire_name').focus();
	}
	else if(name == "")
	{
		$('#hire_name').closest('.form-group').addClass('has-error');
		var $msg = $("#hire_name").parent().find("span.val-msg");
		$msg.text('Please enter name.');
		$('#hire_name').focus();
		return false;
	}
	else if(phone == "")
	{
		$('#hire_phone').closest('.form-group').addClass('has-error');
		var $msg = $("#hire_phone").parent().find("span.val-msg");
		$msg.text('Please enter phone number.');
		$('#hire_phone').focus();
		return false;
	}
	else if(location == "")
	{
		$('#hire_location').closest('.form-group').addClass('has-error');
		var $msg = $("#hire_location").parent().find("span.val-msg");
		$msg.text('Please enter location.');
		$('#hire_location').focus();
		return false;
	}
	else if(desig == "")
	{
		$('#hire_desig').closest('.form-group').addClass('has-error');
		var $msg = $("#hire_desig").parent().find("span.val-msg");
		$msg.text('Please enter desig.');
		$('#hire_desig').focus();
		return false;
	}
	else if(message == "")
	{
		$('#hire_message').closest('.form-group').addClass('has-error');
		var $msg = $("#hire_message").parent().find("span.val-msg");
		$msg.text('Please enter message.');
		$('#hire_message').focus();
		return false;
	}
	else
	{
		$('#hiringForm')[0].reset();
		var data =
		{
			name :	name,
			phone :	phone,
			location :	location,
			desig	: desig,
			message	: message,
			action : "hiring"
		};

		$.ajax(
			{
				url: 'action.php',
				data:
				{
					myData: data
				},
				type: 'POST',
				dataType: "json",
				success: function (data)
				{
					if(data.status=="success")
					{
						//alert(data.sus_msg);
						$('#thankModal').modal('show');
						//location.reload();
					}
					else if(data.status=="error")
					{
						alert(data.err_msg);
						location.reload(); 
					}
				},
			});
	}
}



//User Login validation

"use strict";	

var hire_form = $('#hiringForm');
var error_hire = $('.alert-danger', hire_form);
var success_hire = $('.alert-success', hire_form);

$('#hiringForm').validate({
		errorElement: 'div',
		errorClass: 'vd_red',
		focusInvalid: false,
		ignore: "",
		rules: {
			hire_name: {
				required: true,
			},
			hire_phone: {
				required: true,
				number: true
			},
			hire_location: {
				required: true,
			},
			hire_desig: {
				required: true,
			},
			hire_file: {
				required: true	
			},			
			hire_message: {
				required: true
			}
		},

		messages: {
			hire_name		: {required: "please enter name"},
			hire_phone		: {
					required: "please enter phone number",
					number: "please enter only number"},
			hire_location		: {required: "please enter location"},
			hire_desig		: {required: "please enter designation"},
			hire_file		: {required: "please eupload file"},
			hire_message		: {required: "please enter message"},
		},
		errorPlacement: function(error, element) {
			if (element.parent().hasClass("vd_checkbox") || element.parent().hasClass("vd_radio")){
				element.parent().append(error);
			} else if (element.parent().hasClass("vd_input-wrapper")){
				error.insertAfter(element.parent());
			}else {
				error.insertAfter(element);
			}
		}, 

		invalidHandler: function (event, validator) { 
			success_hire.fadeOut(500);
			error_hire.fadeIn(500);
			scrollTo(hire_form,-100);
		},

		highlight: function (element) {
			$(element).addClass('vd_bd-red');
		},

		unhighlight: function (element) {
			$(element).closest('.control-group').removeClass('error');
		},

		success: function (label, element) {
			label.closest('.control-group').removeClass('error').addClass('success'); 
			$(element).removeClass('vd_bd-red');
		},

		submitHandler: function (form) {
			form.submit();				
		}
	});
