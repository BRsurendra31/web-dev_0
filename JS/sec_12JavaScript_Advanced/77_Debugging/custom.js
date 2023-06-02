var u_name = document.myform.u_name;
var u_pass = document.myform.u_pass;

var username = "surendra20";
var password = "123";

function runMe()
{
    if(u_name.value == username && u_pass.value == password)
    {
        console.log('login successful');
    }else{
        console.log('login error');
    }
}
