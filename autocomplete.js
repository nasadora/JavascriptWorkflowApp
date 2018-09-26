/* Function if List on collection fails */  
function list_ko(result) {  
    alert("Error :" + JSON.stringify(result));  
}
/* Function if List on collection is completed */  
function list_ok(result) {
    availableTags = [];  
    /* Organize information */  
    for (i = 0; i < result.length; i++) {  
        availableTags.push({  
            "label" : result[i].observation_plant_location,  
            "value" : result[i].observation_plant_location,
            "id" : result[i].id, 
            "plant_code" : result[i].plant_code,  
            "product_line" : result[i].product_line 
        });  
    }  
    /* Reset Autocomplete widget for next use */  
    jQuery("#id_observation_plant_location").autocomplete({  
    source : availableTags  
    }); 
}

/* Function launched when minLength is reached */  
function onSearch(event, ui) {  
    var my_pattern = {};  
    my_pattern.name = {  
    "$regex" : ".*" + jQuery("#id_observation_plant_location").val() + ".*",  
    "$options" : "i"  
    };
    var options = {};  
    options.asynchronous = false; /* Load synchronously the collection content */  
    col_My_tor_observation_plant_location.listCallback(my_pattern, options, list_ok, list_ko);
}

/* Function performed when user selects an entry */  
function onSelect(event, ui) { 
    /* Update User fields */  
    id_plant_id.setValue(ui.item.id); 
    id_plant_code.setValue(ui.item.plant_code);
    id_product_line.setValue(ui.item.plant_line);  
}

/* Initiate the widget */  
availableTags = [];  
jQuery("#id_observation_plant_location").autocomplete({ 
    /* Array that contains entries */
    source : availableTags,  
    /* Focus 1st entry on default */  
    autoFocus : true,
    select : onSelect,  
    search : onSearch,
    /* Number of characters from which it launch the search in collection */  
    minLength : 2
});
