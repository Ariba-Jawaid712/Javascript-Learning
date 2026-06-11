// Promise 

let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("data fatched successfully");
    }else{
     reject("something went wrong")
    }
});

myPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);   
});

let promise = new Promise((resolve,reject)=>{

setTimeout(()=>
{
    resolve("Transactiom Successfully");
}, 2000);
});

promise.then((data)=>{
    console.log(data);
});

//async/await
function getMarks(){
    return new Promise((resolve)=>{
setTimeout(()=>{
    resolve(85);
}, 3000);

})
}
async function showMarks() {
    let marks = await getMarks();
    console.log(marks);
}

showMarks();
