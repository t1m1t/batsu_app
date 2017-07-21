$(document).ready(function(){
   $(".insert_button").click(callInsertAjax);
   $(".delete_button").click(callDeleteAjax);
    //$(".delete_button").click(callUpdateAjax);
});

function callInsertAjax(){
    console.log("Inside callInsertAjax");
    var values = $("#sign_up_form").serialize();
    $.ajax({
        url:"./form.php?operation=insert",
        method: "post",
        data: values,
        success: function(result){
            console.log("success: ", typeof(result));
            var Result = JSON.parse(result);
            if(Result.success === true){
                console.log("js success: ", Result);
                // console.log()
            }
            else{
                console.log("js error: " , Result);
            }
        },
        error: function(e){
            console.log("ajax connection error: " + e);
        }
    });
}

function callUpdateAjax(){
    console.log("Inside callUpdateAjax");
    // var values = $("#sign_up_form").serialize();
    $.ajax({
        url:"./form.php?operation=update",
        method: "post",
        // data: values,
        success: function(result){
            console.log("success: ", typeof(result));
            var Result = JSON.parse(result);
            if(Result.success === true){
                console.log("js success: ", Result);
            }
            else{
                console.log("js error: " , Result);
            }
        },
        error: function(e){
            console.log("ajax connection error: " + e);
        }
    });
}

function callReadAjax(){
    console.log("Inside callReadAjax");
    $.ajax({
        url:"/form.php?operation=readAll",
        method:"get",
        success:function(result){
            console.log("success read function: ",result)
        }
    });
}


function callDeleteAjax(){
    var value = $("#delete_form").serialize();
    console.log("Inside callDeleteAjax");
    $.ajax({
        url: "./form.php?operation=delete",
        method: "post",
        data: value,
        success: function(result){
            console.log("success jax delete: ", result);
        }
    })
}
