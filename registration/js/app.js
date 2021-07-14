//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader

//start registration form validation
class RegisterFormValidation {
    validation(formData) {
        $(formData.submit).on(formData.eventName, () => {
            // elements  value;
            const firstName = $(formData.firstName).val().trim();
            const lastName = $(formData.lastName).val().trim();
            const email = $(formData.email).val().trim();
            const password = $(formData.password).val().trim();
            const confirmPassWord = $(formData.confirmPassWord).val().trim();


            // email Validation with array function
            const emailValidation = (emailValue) => {
                var symbol = emailValue.indexOf('@');
                var dot = emailValue.indexOf('.');
                console.log('dotposition ', dot);
                if (symbol < 1) {
                    return false;
                }
                if (dot < symbol + 2) {
                    return false;
                }
                if (dot === email.length - 1) {
                    return false;
                }
                return true
            };


            // first name
            if (firstName === '') {
                this.setError($(formData.firstName)[0], "please firstName cont'be blank!..", formData);
                return false;
            } else if (firstName.length <= 2) {
                this.setError($(formData.firstName)[0], "please firstName shoul be more than 2 characters!..", formData);
                return false;
            } else {
                this.setSuccess($(formData.firstName)[0], formData);
            }
            // last name
            if (lastName === '') {
                this.setError($(formData.lastName)[0], "please lastName cont'be blank!..", formData);
                return false;
            } else if (lastName.length <= 2) {
                this.setError($(formData.lastName)[0], "please lastName shoul be more than 2 characters!..", formData);
                return false;
            } else {
                this.setSuccess($(formData.lastName)[0], formData);
            }

            // email
            if (emailValidation === '') {
                this.setError($(formData.email)[0], "please email cont'be blank!..", formData);
                return false;
            } else if (!emailValidation(email)) {
                this.setError($(formData.email)[0], "not valid email adress!..", formData);
                return false;
            } else {
                this.setSuccess($(formData.email)[0], formData);
            }

            // password
            if (password === '') {
                this.setError($(formData.password)[0], "please password cont'be blank!..", formData);
                return false;
            } else if (password.length <= 5) {
                this.setError($(formData.password)[0], "please enter your password at least 6 characters.", formData);
                return false;
            } else {
                this.setSuccess($(formData.password)[0], formData);
            }

            // confirm password
            if (confirmPassWord === '') {
                this.setError($(formData.confirmPassWord)[0], "please confirmPassWord cont'be blank!..", formData);
                return false;
            } else if (confirmPassWord !== password) {
                this.setError($(formData.confirmPassWord)[0], "please enter your match confirmPassWord to password.", formData);
                return false;
            } else {
                this.setSuccess($(formData.confirmPassWord)[0], formData);
            }

            // show submit message to users
            const successData = (datInputs) => {
                $(datInputs.allInput).each((indx, input) => {
                    if ($(input).attr('class') === formData.sucessCls) {
                        console.log('xx');
                    }

                });

            }
            successData(formData);







        });
    }
    setError(element, msg, data) {
        // add error class and remove successClas
        console.log('sed', element);

        $(element).addClass(data.errorCls).removeClass(data.sucessCls);
        // add msg 
        const smallEle = $(element).next()[0];
        $(smallEle).html(msg);

    }
    setSuccess(element, data) {
        // remove error class and add successClas
        $(element).removeClass(data.errorCls).addClass(data.sucessCls);
    }

}
//end registration form validation




// dom content is loading
$(() => {
    // registration form validation
    const contactCls = new RegisterFormValidation;
    contactCls.validation({
        allInput: '.formControl input',
        firstName: '#firstName',
        lastName: '#lastName',
        email: '#email',
        password: '#password',
        confirmPassWord: '#confirmPassword',
        visualFeedBack: '.formControl small',
        checBox: '#myCheck',
        sucessCls: 'scucessField',
        errorCls: 'errorField',
        submit: '#submit',
        eventName: 'click',
    });
});