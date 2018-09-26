function update_ok(result) {
alert("ok " + JSON.stringify(result));
}

function update_ko(result) {
alert("ko " + JSON.stringify(result));
}

var my_pattern = {};
my_pattern.routed_people = "oldmailaddress.com";


var my_object = {};

my_object.routed_people = "newmailaddress@lafarge.com";

col_approvalmatrix.updateMultiCallback(my_pattern,{$set:my_object},update_ok,update_ko);
