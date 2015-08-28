/**
 * Created by Luofan on 2015/8/26.
 */
function get_open(){

}

function send_open(){
    var send_open = document.getElementById("send_open");
    var send_car = document.getElementById("send_car");
    if(send_open.style.display == "none"){
        send_open.style.display = "block";
        send_car.style.height = "244px";
        send_car.style.border = "3px solid #5fbb03";
    }
    else if(send_open.style.display == "block"){
        send_open.style.display = "none";
        send_car.style.height = "64px";
        send_car.style.border = "none";
        send_car.style.borderBottom = "1px dashed #E5E5E5";
    }
}

function method_open(){
    var change_method = document.getElementById("change_method");
    var method= document.getElementById("method");
    var pay_method = document.getElementById("pay_method");
    change_method.style.display = "block";
    method.style.display = "none";
    pay_method.style.border = "3px solid #5fbb03";
}

function invoice_open(){
    var change_invoice = document.getElementById("change_invoice");
    var invoice= document.getElementById("invoice");
    var invoice_method = document.getElementById("invoice_method");
    change_invoice.style.display = "block";
    invoice.style.display = "none";
    invoice_method.style.border = "3px solid #5fbb03";
}

function save_invoice(){
    var change_invoice = document.getElementById("change_invoice");
    var invoice= document.getElementById("invoice");
    var invoice_method = document.getElementById("invoice_method");
    change_invoice.style.display = "none";
    invoice.style.display = "block";
    invoice_method.style.border = "none";
    invoice_method.style.borderBottom = "1px dashed #E5E5E5";
}

document.getElementById("form").onclick = function(){
    var form = document.getElementById("form");
    for(var i = 0; i < form.change_method.length; i++){
        var p_id = document.getElementById("p-"+i);
        if(form.change_method[i].checked){
           p_id.style.backgroundColor = "#E5E5E5";
        }
        else{
            p_id.style.backgroundColor = "#FFFFFF";
        }
    }
}

function save(){
    var form = document.getElementById("form");
    var change_method = document.getElementById("change_method");
    var method= document.getElementById("method");
    var pay_method = document.getElementById("pay_method");
    change_method.style.display = "none";
    method.style.display = "block";
    var changed_method;
    for(var i = 0; i < form.change_method.length; i++){
        if(form.change_method[i].checked){
            changed_method = i;
        }

    }
    switch (changed_method){
        case 0: method.innerHTML = "账户余额支付";  break;
        case 1: method.innerHTML = "在线支付";  break;
        case 2: method.innerHTML = "门店支付";  break;
    }
    pay_method.style.border = "none";
    pay_method.style.borderBottom = "1px dashed #E5E5E5";
}