// Write code related to Home page here 

let form=document.querySelector("form");
let submitLS=JSON.parse(localStorage.getItem("submit"))||[]

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(submitLS.length===0){
        alert("Please enter the name");
        return;
    }
    let obj={
        name:form.name.value,
        Description:form.Description.value,
    }
    isSignedin = false;
    submitLS.forEach(function(ele){
        if(ele.name===obj.name && ele.desc===obj.desc){
            isSignedin=true;
            localStorage.setItem("submit",JSON.stringify(ele));
            alert("form submit");
            window.location.href="index.js"


        }
        if(isSignedin==false){
            alert("no there user present")
        }
    })
}) 

