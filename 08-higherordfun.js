//ForEach
let mark = [50 , 85 , 33 , 78]
mark.forEach((mark)=>{
console.log(mark);
});
//Map
let users =["Fatima", "Maida", "Sania"]
let result = users.map((users)=>
{
    return "Added" + users;
});
console.log(result); 
//filter
let marks = [50 , 85 , 33 , 78]
let passed = marks.filter((marks)=>{
return marks >= 50;
});

console.log(passed);

