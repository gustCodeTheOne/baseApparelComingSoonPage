let form = document.querySelector("#emailForm");
let email = document.querySelector("#email");
let icon = document.querySelector("#iconVerifier");
let button = document.querySelector("#submit");
let message = document.querySelector(".message");
let param = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

email.addEventListener('keyup', e => {
    e.preventDefault();

    let result = param.test(email.value);

    if(result){
        icon.src = "images/check_green_success_icon.png";
        icon.style.width = "25px";
        icon.style.height = "25px";
        message.innerHTML = "Email is valid!";
        message.style.color = "hsl(106, 36%, 70%)";
    }else if (!result && email.value !== ""){
        icon.src = "images/icon-error.svg";
        icon.style.width = "24px";
        icon.style.height = "24px";
        message.innerHTML = "Please provide a valid email";
        message.style.color = "hsl(0, 36%, 70%)";
    }else if (!result && email.value === ""){
        icon.src = " ";
        icon.style.width = "0px";
        icon.style.height = "0px";
        message.innerHTML = "";
    }
});

button.addEventListener('click', e => {
    e.preventDefault();

    let result = param.test(email.value);

    if(email.value === ""){
        message.style.color = "hsl(0, 6%, 24%)";
        message.innerHTML = "Please enter an email";
        console.log("NOT SENT, please enter a valid email");
    } else if(email.value !== "" && !result){
        console.log("NOT SENT, please enter a valid email");
    } else if(email.value !== "" && result){
        console.log("Email sent successfully");
        icon.src = " ";
        icon.style.width = "0px";
        icon.style.height = "0px";
        message.innerHTML = "";
        form.reset();
    }
});