function uniqueId(){
    var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {                
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        var ascicode=Math.floor((Math.random()*42)+48);
        if (ascicode<58 || ascicode>64){
            // exclude all chars between : (58) and @ (64)
            idstr+=String.fromCharCode(ascicode);    
        }                
    } while (idstr.length<32);

    return (idstr);
}

function clean_item() {
    //empty section to create a new one
    id_section_item.setVisible(true);
    id_section_item.open();
    RMPApplication.set("my_item", "{}");
    RMPApplication.set("action", "add");
}

//add item
function add_ok(result) {
    id_html_msg.setHtml("<font color='green'><i>Item added</font><i>");
    clean_item();
    id_report.refresh();
}

function add_ko(result) {
    //Error while adding item in the collection
    id_html_msg.setHtml("<font color='red'><i>Error while adding new item</font><i>");
}

function add_item() {
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');
	my_object.credit_amount_from = parseFloat(my_object.credit_amount_from);
	my_object.credit_amount_to = parseFloat(my_object.credit_amount_to);
my_object.user_id = uniqueId();
col_cndn_plant_picw.saveCallback(my_object, add_ok, add_ko);
   }

//udpate item
function update_ok(result) {
    id_html_msg.setHtml("<font color='green'><i>Item Saved</font><i>");
    clean_item();
    id_report.refresh();
}

function update_ko(result) {
    //Error while updating item in the collection
    id_html_msg.setHtml("<font color='red'><i>Error while saving item</font><i>");
}

function update_item() {
    var my_pattern = {};
    my_pattern.user_id = RMPApplication.get("my_item.user_id");
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');
	my_object.credit_amount_from = parseFloat(my_object.credit_amount_from);
	my_object.credit_amount_to = parseFloat(my_object.credit_amount_to);
 col_cndn_plant_picw.updateCallback(my_pattern, my_object, update_ok, update_ko);
}

//load_item
function load_ok(result) {
    id_html_msg.setHtml("<font color='green'><i>Item loaded</font><i>");
    id_section_item.setVisible(true);
    id_section_item.open();
    RMPApplication.set("my_item", result[0]);
    RMPApplication.set("action", "update");
}


function load_ko(result) {
    id_html_msg.setHtml("<font color='red'><i>Error while loading item</font><i>");
    id_report.refresh();
}

function load_item(user_id) {
    var my_pattern = {};
    my_pattern.user_id = user_id;
   col_cndn_plant_picw.listCallback(my_pattern, {}, load_ok, load_ko);
}

//delete_item
function delete_ok(result) {

    id_html_msg.setHtml("<font color='green'><i>Item deleted</font><i>");
    id_report.refresh();
    //empty custom widget
    RMPApplication.set("my_item", "{}");
    RMPApplication.set("action", "add");
}

function delete_ko(result) {
    //Error while deleting item from the collection
    id_html_msg.setHtml("<font color='red'><i>Error while deleting item</font><i>");
}

function delete_item(item_id) {
    var my_pattern = {};
    my_pattern.item_id = item_id;
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');
    col_cndn_plant_picw.removeCallback(my_pattern, delete_ok, delete_ko);
}
function exists_ok(result) {
    if(result[0]){
        res=true;
    }else{
        res=false;
    }
}

