var obj = {num1:10, num2:20}

var addThese = function(a,b){
    return this.num1 + this.num2 + a - b;
}

// Using Call
console.log(addThese.call(obj, 30,10));

// Using apply
var arr =[30,10]
console.log(addThese.apply(obj, arr));

// Using bind 
var bound = addThese.bind(obj);
console.log(bound(30,10));


//Student Age 
var Student = {age:20}

var studentage = function(){
    console.log(`Age of the Student is : ${this.age}`);
}

var agestud = studentage.bind(Student)
agestud();
