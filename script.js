let emailId = document.getElementById("emailId");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
    icon.style.display="inline-block";
    if(emailId.value.match(mailRegex)){
        icon.innerHTML = ' <i class="fa-solid fa-check"></i>';
        icon.style.color = "#2ECC71";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #2ecc71";
    }
    else if(emailId.value == ""){
        icon.style.display = "none";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #d1d3d4"; 
    }
    else{
        icon.innerHTML = '<i class="fa-solid fa-exclamation"></i>';
        icon.style.color = "#ff2851";
        errorMsg.style.display = "block";
        emailId.style.border = "2px solid #ff2851";
    }
}