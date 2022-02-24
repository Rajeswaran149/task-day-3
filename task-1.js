const student = {
    "Name" :"Rajeswaran",
    "age" : "26",
    "id" : "12345"
};
let len=Object.keys(student).length;
for(let i=0;i<len;i++){
    let a = Object.keys(student);
    let b = Object.values(student);
    console.log(`${a[i]} : ${b[i]}`);
}

for(let i in student){
    console.log(i + ":" + student[i]);
}

for(let i of Object.keys(student)){
    console.log(i,`:`,student[i]);
};

Object.keys(student).forEach(function(i) {
    console.log(i,`:`, student[i]);
});
