var a = {
    name:"Muhammad Shahid",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:0,
}
var b = {
    name:"Umar",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:1,
}
var c = {
    name:"Ibrahim",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:1,
}
var d = {
    name:"Imam",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:0,
}
var e = {
    name:"Waleed",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:1,
}
var f = {
    name:"Adnan",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:0,
}
var g = {
    name:"Ismail",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:1,
}
var h = {
    name:"Auranzaib",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:0,
}
var i = {
    name:"Usman",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:1,
}
var j = {
    name:"Yousuf",
    contact:03083647124,
    school:"Karachi Grammer Sec. School",
    result:1,
}

var arr = [a,b,c,d,e,f,g,h,i,j]

for(var i = 0;i < arr.length; i++){
    arr[i].rollNo = i+1

}


var user = document.getElementById("user");
var sname = document.getElementById("sname")
var sresult = document.getElementById("sresult")

function searchres(){

    for(var i = 0;i < arr.length; i++){
        if(arr[i].rollNo == user.value){
            if(arr[i].result){
                sname.innerHTML = arr[i].name 
                sresult.innerHTML = "pass"
            }else{
                sname.innerHTML = arr[i].name 
                sresult.innerHTML = "fail"
            }
        }
        
    }
    
}