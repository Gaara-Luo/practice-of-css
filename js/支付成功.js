/**
 * Created by Luofan on 2015/8/18.
 */
function open(){
    var how_get_state = document.getElementById("how_get");
    var change_rules_state = document.getElementById("change_rules");
    console.log(how_get_state.style.display);
    if(how_get_state.style.display == "none"){
        how_get_state.style.display = "block";
    }else if(how_get_state.style.display == "block"){
        how_get_state.style.display = "none";
    }
    if(change_rules_state.style.display == "none"){
        change_rules_state.style.display = "block";
    }else if(change_rules_state.style.display == "block"){
        change_rules_state.style.display = "none";
    }

}