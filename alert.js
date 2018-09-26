if(!RMPApplication.validate()){
alert("Please fill up the comments!");
}else{
alert("Thank you"); 
true;
}

var routed_people = RMPApplication.getVariable("routed_people");
var customer_type = RMPApplication.getVariable("customer_type");
var approved_credit_amount = RMPApplication.getVariable("approved_credit_amount")
if(!RMPApplication.validate()){
alert("Please fill mandatory fields!");
}else{
alert("Thank you"); 
true;
}
