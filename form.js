function formValidation() {

    var uemail = document.reg.email;

    var mgen = document.reg.gen[0].checked;
    var fgen = document.reg.gen[1].checked;
    //  For Email validation 

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {

    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }

    // For Dropdown selection 

    // Radio button Validation

    if ((mgen == false) && (fgen == false)) {
        alert("Please choose your Gender: Male or Female");
        return false;
    }


    //After Succesfully submited.. this alert message will show. 

    else {
        // alert('Form Succesfully Submitted');
        return true;
    }
}


function fill_details() {
    let is_form_valid = formValidation();
    // alert("hi");
    // alert(is_form_valid);
    if(!is_form_valid){
        // location.href("form.html");
        location.reload();
    }
    else{
        var age = document.reg.age.value;
        var mgen = document.reg.gen[0].checked;
        var fgen = document.reg.gen[1].checked;

        if (mgen) gender = "Male"
        else gender = "Female";

        var email = document.reg.email.value;
        sessionStorage.setItem("age", age);
        sessionStorage.setItem("gender", gender);
        sessionStorage.setItem("email", email);
        location.replace("./color_test.html");
    }
    
}

