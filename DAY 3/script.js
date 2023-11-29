// 1.how to combare two JSON have the same properties without order..?

// let obj1 ={name:"person 1",age:5}
// let obj2 ={age:5,name:"person"}
// if(obj1===obj2){
//     console.log("Same");
// }
// else{
//     console.log("Not Same")
// }




// 2.question anser

var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = () => {
    var result = JSON.parse(request.response)
    console.log(result)
    var flags = result.map((ele) => ele.flags)
    console.log(flags);
}
