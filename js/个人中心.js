/**
 * Created by Luofan on 2015/9/2.
 */
function state_change(state){
    for(var i = 1; i < 6; i++){
        var state_p_i = document.getElementById("state_p_"+i);
        if(i == state){
            state_p_i.style.backgroundColor = "#FFFFFF";
            state_p_i.style.borderTop = "2px solid #62B903";
            state_p_i.style.color = "#62B903";
        }
        else{
            state_p_i.style.background = "none";
            state_p_i.style.borderTop = "1px solid #DCDCDC";
            state_p_i.style.color = "#696969";
        }
    }
}

function manage_change(manage){
    var order_manage = document.getElementById("order_manage");
    if(manage == 1){
        order_manage.style.display = "block";
    }
    else{
        order_manage.style.display = "none";
    }
    for(var i = 1; i < 4; i++){
        var manage_p_i = document.getElementById("manage_p_"+i);
        var manage_i = document.getElementById("manage_"+i);
        if(i == manage){
            manage_p_i.style.color = "#62B903";
            manage_i.style.display = "block";
        }
        else{
            manage_p_i.style.color = "#696969";
            manage_i.style.display = "none";
        }
    }
}

function account_change(account){
    for(var i = 1; i < 5; i++){
        var account_p_i = document.getElementById("account_p_"+i);
        if(i == account){
            account_p_i.style.backgroundColor = "#FFFFFF";
            account_p_i.style.borderTop = "2px solid #62B903";
            account_p_i.style.color = "#62B903";
        }
        else{
            account_p_i.style.background = "none";
            account_p_i.style.borderTop = "1px solid #DCDCDC";
            account_p_i.style.color = "#696969";
        }
    }
}

function member_change(member){
    for(var i = 1; i < 3; i++){
        var member_p_i = document.getElementById("member_p_"+i);
        if(i == member){
            member_p_i.style.backgroundColor = "#FFFFFF";
            member_p_i.style.borderTop = "2px solid #62B903";
            member_p_i.style.color = "#62B903";
        }
        else{
            member_p_i.style.background = "none";
            member_p_i.style.borderTop = "1px solid #DCDCDC";
            member_p_i.style.color = "#696969";
        }
    }
}