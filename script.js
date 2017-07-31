


function account(fname, lname, email, phone){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.domElement = null;
    this.delete = function(){
        console.log("deleting row");
        this.domElement.remove();
    }
}

// $(document).ready(function(){
//    $(".insert_button").click(callInsertAjax);
//    $(".delete_button").click(callDeleteAjax);
//     callReadAjax();
// });

var account_list = [];


function regexEmail(input_string) {
    // console.log(input_string);
    // console.log(typeof input_string);
    var re = /^([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input_string);
}

function regexPhone(input_string){
    var re = /^[\+]?[0-9]?[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    return re.test(input_string);
};

function callInsertAjax(){
    console.log("Inside callInsertAjax");
    var values = $("#sign_up_form").serialize();
    //email regex
    // console.log("values:", values);
    if(regexEmail($("#email").val()) === false){
        console.log("input valid email");
        return false;
    }
    else if(regexPhone($("#phone").val()) === false){
        console.log("input valid phone");
        return false;
    }
    //phone regex

    $.ajax({
        url:"./form.php?operation=insert",
        method: "post",
        data: values,
        success: function(result){
            console.log("success: ", result);
            var Result = JSON.parse(result);
            if(Result.success === true){
                console.log("js success: ", Result);
                sgtObj.addaccountToDom(Result);
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
        url:"./form.php?operation=readAll",
        method:"get",
        success:function(result){
            var result = JSON.parse(result);
            console.log("success read function: ",result);
            for(var i=0; i<result["data"].length; i++){
                // var tempaccount = new account();
                var tempaccount = new account(result.data[i].first_name, result.data[i].last_name, result.data[i].email, result.data[i].phone);
                account_list.push(tempaccount);
            }
            $("tbody").html("");
            for(var i=0; i<account_list.length; i++){
                // var accountObj = account_list[i];
                var rowObj = $("<tr>");
                var account_fname = $("<td>").text(account_list[i].fname);
                var account_lname = $("<td>").text(account_list[i].lname);
                var account_email = $("<td>").text(account_list[i].email);
                var account_phone = $("<td>").text(account_list[i].phone);
                var button_delete = $("<button>").text("Delete").addClass("btn delete-btn delete-button");
                // button_delete[0].ouraccount = rowObj;
                // this.deleteElement(account, button_delete);
                account_list[i].domElement = rowObj;
                rowObj.append(account_fname, account_lname, account_email, account_phone, button_delete);
                $("tbody").append(rowObj);
            }
        }
    });
}


function callDeleteAjax(){
    // var value = $("#delete_form").serialize();
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





/**
 * sgt - constructor for sgtObj
 */
function sgt(){

    /**
     * Define all global variables here
     */
    /**
     * account_list - global array to hold account objects
     * @type {Array}
     */
    this.account_list = [];
    var self = this;
    this.tempObj = {};
    /**
     * inputIds - id's of the elements that are used to add accounts
     * @type {string[]}
     */

    /**
     * init - initializes the starting state of the DOM and adds event handlers to the buttons
     */

    this.init = function(){
        $(".insert_button").click(callInsertAjax);
        $(".delete_button").click(callDeleteAjax);
        callReadAjax();

        // $('.btn-success').click(this.addClicked);
        $('.btn-default').click(this.cancelClicked);
        // $('.btn-pull').click(this.pullData);
        // this.calculateAverage();
        //v2.0 -- initially get data from learningfuze server
        // this.pullData();
        $('#myModal').modal({ show: false})
    };

    /**
     * pullData - Event Handler when user clicks Get data From Server button
     */
    this.pullData = function() {
        $.ajax({
            dataType: 'json',
            method: 'POST',
            data: {api_key: "y2cGRR9aIc"},
            url: '../prototypes_C5.17/php_SGTserver/data.php?action=readAll',
            // url: 'http://s-apis.learningfuze.com/sgt/get',
            success: function(result) {
                if(result.success === true){
                    console.log("read request works!");
                    for(var i=0; i<result.data.length; i++){
                        var tempaccount = new account(result.data[i].name, result.data[i].course_name, result.data[i].grade, result.data[i].id);
                        self.account_list.push(tempaccount);
                    }
                    $("tbody").html("");
                    self.updateData();
                    // self.calculateAverage();
                    console.log(result);
                }
                else{
                    console.log("read request failed!")
                    $(".modal-body > p").html(result.errors);
                    $("#myModal").modal('show');
                }

            },
            error: function(e) {
                console.log("read request failed!")
                console.log(e);
                $(".modal-body > p").html(e);
                $("#myModal").modal('show');
            }
        });
    };


    /**
     * addClicked - Event Handler when user clicks the add button
     */
    this.addClicked = function(){
        if(self.account_list.length === 0){
            $("tbody").html("");
        }
        var accountObj = self.addaccount();
        $.ajax({
            dataType: 'json',
            method: 'POST',
            url: '../prototypes_C5.17/php_SGTserver/data.php?action=insert',
            // url: 'http://s-apis.learningfuze.com/sgt/create',
            data: {
                api_key: "y2cGRR9aIc",
                name: accountObj.name,
                course: accountObj.course,
                grade: accountObj.grade
            },
            success: function(result){
                accountObj.id = result.new_id;
                console.log("result: " , result);
                if(result.success === true){
                    console.log("create request works!");
                    accountObj.id = result.new_id;
                    self.addaccountToDom(accountObj);
                }
                else{
                    // console.log("result: ", result);
                    console.log("create request failed");
                    $(".modal-body > p").html(result.errors);
                    $("#myModal").modal('show');
                }
            },
            error: function(result){
                console.log("create request failed.");
                console.log(result);
                $(".modal-body > p").html(result.errors);
                $("#myModal").modal('show');
            }
        });
    };


    /**
     * cancelClicked - Event Handler when user clicks the cancel button, should clear out account form
     */
    this.cancelClicked = function(){
        self.clearAddaccountForm();
    };


    /**
     * addaccount - creates a account objects based on input fields in the form and adds the object to global account array
     *
     * @return undefined
     */
    this.addaccount = function() {
        self.tempObj = new account($("#accountName").val(), $("#course").val(), $("#accountGrade").val());
        if (this.tempObj.name === "" || this.tempObj.course === "" || this.tempObj.grade === "") {
            console.log("complete the input field");
        }
        else {
            self.account_list.push(this.tempObj);
            return this.tempObj;
        }
    };



    /**
     * clearAddaccountForm - clears out the form values based on inputIds variable
     */
    this.clearAddaccountForm = function(){
        $("#fname").val("");
        $("#lname").val("");
        $("#email").val("");
        $("#phone").val("");
    }



    /**
     * calculateAverage - loop through the global account array and calculate average grade and return that value
     * @returns {number}
     */
    // this.calculateAverage = function(){
    //     var tempTotal = 0;
    //     if(this.account_list.length === 0) {
    //         $(".avgGrade").html(tempTotal);
    //     }
    //     else{
    //         for(var i=0; i<this.account_list.length; i++){
    //             tempTotal += parseFloat(this.account_list[i].grade);
    //         }
    //         $(".avgGrade").html(tempTotal/this.account_list.length);
    //
    //     }
    // };

    /**
     * updateData - centralized function to update the average and call account list update
     * used after reading from the server
     */
    this.updateData = function(){
        // this.calculateAverage();
        this.updateaccountList();
    };


    /**
     * updateaccountList - loops through global account array and appends each objects data into the account-list-container > list-body
     */
    this.updateaccountList = function(){
        //add to dom
        for(var i=0; i<this.account_list.length; i++){
            var account = this.account_list[i];
            var rowObj = $("<tr>");
            var account_name = $("<td>").text(this.account_list[i].name);
            var account_course = $("<td>").text(this.account_list[i].course);
            var account_grade = $("<td>").text(this.account_list[i].grade);
            var button_delete = $("<button>").text("Delete").addClass("btn delete-btn");
            // button_delete[0].ouraccount = rowObj;
            this.deleteElement(account, button_delete);
            this.account_list[i].domElement = rowObj;
            rowObj.append(account_name, account_course, account_grade, button_delete);
            $("tbody").append(rowObj);
        }
    };



    /**
     * addaccountToDom - take in a account object, create html elements from the values and then append the elements
     * into the .account_list tbody
     * @param accountObj
     */
    this.addaccountToDom = function(stdObj){
        if(stdObj === undefined){
            return;
        }
        var rowObj = $("<tr>");
        var account_fname = $("<td>").text(stdObj.data.fname);
        var account_lname = $("<td>").text(stdObj.data.lname);
        var account_email = $("<td>").text(stdObj.data.email);
        var account_phone = $("<td>").text(stdObj.data.phone);
        var button_delete = $("<button>").text("Delete").addClass("btn delete-btn");
        button_delete.click(function() {
            self.removeaccount(stdObj);
            var index = self.account_list.indexOf(stdObj);
            self.account_list.splice(index,1);
            // self.calculateAverage();
        });
        stdObj.domElement = rowObj;
        rowObj.append(account_fname, account_lname, account_email, account_phone, button_delete);
        $("tbody").append(rowObj);
        this.cancelClicked();
        // this.calculateAverage();
    };




    this.deleteElement = function(account, button_delete){
        button_delete.click(function() {
            var index = self.account_list.indexOf(account);
            // console.log("index: " + index);
            // console.log("self.account_list[index]: ", self.account_list[index]);
            self.removeaccount(account, index);
        });
    };

    /**
     * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
     */


    /**
     * Listen for the document to load and reset the data to the initial state
     */



    /**
     * Base method to remove the account from the DOM.
     * @param account
     */

    this.removeaccount = function(account, index){
        // console.log(account);
        $.ajax({
            dataType: 'json',
            method: 'POST',
            url: '../prototypes_C5.17/php_SGTserver/data.php?action=delete',
            //url: 'http://s-apis.learningfuze.com/sgt/delete',
            data: {
                api_key: "y2cGRR9aIc",
                account_id : account.id,
            },
            success: function(result){
                if(result.success === true){
                    console.log("delete request works!");
                    console.log(result);
                    account.delete();
                    self.account_list.splice(index,1);
                    // self.calculateAverage();
                }
                else{
                    console.log("delete request failed!");
                    // console.log(result);
                    $(".modal-body > p").html(result.errors);
                    $("#myModal").modal('show');
                }
            },
            error: function(result){
                console.log("delete request failed!");
                // console.log(result);
                $(".modal-body > p").html(result.errors);
                $("#myModal").modal('show');
            }
        });
    }



}


var sgtObj= null;

$(document).ready(function(){
    sgtObj = new sgt();
    sgtObj.init();
    if(sgtObj.account_list.length === 0){
        // $("tbody").append("<tr><td></td><tr>");
        $("tbody").append("User Info Unavailable");
    }
    else{
        for(var i =0; i<sgtObj.account_list.length; i++){
            $("tbody").append(sgtObj.account_list[sgtObj.account_list.length-1]);
        }
    }
    // $(".insert_button").click(callInsertAjax);
    // $(".delete_button").click(callDeleteAjax);
    // callReadAjax();
});