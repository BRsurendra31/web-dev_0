// // written js code
// var u_name = document.myform.u_name;
// var message = document.getElementById('message');
  

// function runMe()
// { // start doing validation 
//     if(u_name.value.length <5)
//     {
//         message.innerHTML = "need mor character";
//         message.style.color ='red';
//         u_name.style.backgroundColor ='red';
//         u_name.style.color ='white';
        
//     }else if(u_name.value.length ==5)
//     {
//         message.innerHTML = "nice, ok";
//         message.style.color ='green';
//         u_name.style.backgroundColor ='green';
//         u_name.style.color ='white';
//     }else if(u_name.value.length > 5)
//     {
//         message.innerHTML = "character length exceed";
//         message.style.color ='orange';
//         u_name.style.backgroundColor ='orange';
//         u_name.style.color ='white';
//     }
// }

// // similarlly for password 


// minified js code
var u_name=document.myform.u_name,message=document.getElementById("message");function runMe(){u_name.value.length<5?(message.innerHTML="need mor character",message.style.color="red",u_name.style.backgroundColor="red",u_name.style.color="white"):5==u_name.value.length?(message.innerHTML="nice, ok",message.style.color="green",u_name.style.backgroundColor="green",u_name.style.color="white"):u_name.value.length>5&&(message.innerHTML="character length exceed",message.style.color="orange",u_name.style.backgroundColor="orange",u_name.style.color="white")}