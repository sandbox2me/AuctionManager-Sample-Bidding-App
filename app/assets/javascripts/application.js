  //= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){

$(".check-value").hide();
   
$("input:radio[name='user[is_active]']").change(function(){ 
  // alert('entered') 
         
    if(this.value == "false" && this.checked){
    //	alert('oookss');
        $(".check-value").show();
    }else{
        $(".check-value").hide();
    }

    });

$( "#datepicker1" ).datepicker({ changeYear: true, changeMonth: true, yearRange: '1950:2000',dateFormat: 'yy-mm-dd'});
$( "#datepicker2" ).datepicker({ changeYear: true, changeMonth: true, yearRange: '1980:2050',dateFormat: 'yy-mm-dd'});
$( "#datepicker3" ).datepicker({ changeYear: true, changeMonth: true, yearRange: '2000:2050',dateFormat: 'yy-mm-dd'});
});
