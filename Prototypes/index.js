//prototype function
function Student(name, age, approvedCourses) {
    this._name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
}
//using protoype is posible to creates methods outside of  objects
Student.prototype.approveCourse = function (newCourse) {
    let old = this.approvedCourses.includes("Python");
    if(old) {
        console.log('ya tomaste el curso de Python')
    }
    this.approvedCourses.push(newCourse);
}
//getters  and setter for prototypes
Student.prototype = {
    get name(){
        return this._name;
    }

},
Student.prototype = {
    set name(newName) {
        this._name = newName;
    }
}
// prototypes in javascript are created with the word new
const jane = new Student(
    "Jane Doe",
    15,
    [
        "javaSE advance",
        "Python fundaments",
    ],
);


// jane.approveCourse("Angular");
console.log(jane);
//example usisng setter to modify name  in prototype function
jane._name="zerooo";
console.log(jane._name)

//prototypes with class syntax
class Student2 {
    //patern RORO "Receive an Object, Return Object"
    //place the parameters of the  constructor as an object is easier to scalete the class an add more parameters
    constructor({
        name,
        courses = [],
        age,
        email,
    }) {

        this.name = name;
        this.email = email;
        this.age = age;
        this.courses = courses;
    }

    approveCourse(newCourse) {
        this.courses.push(newCourse);
    }
};
//this situation the order does not care
const mike = new Student2({
    name: "Michael",
    age: 33,
    email: "mikeflows@ahja.com",
});
//normal class
class Student3 {
    constructor(
        name,
        courses = [],
        age,
        email,
    ) {

        this.name = name;
        this.email = email;
        this.age = age;
        this.courses = courses;
    }

    approveCourse(newCourse) {
        this.courses.push(newCourse);
    }
};
//this situation the order cares
const mike2 = new Student3(
    "Michael",
     33,
    "mikeflows@ahja.com",
);
export { Student, Student2, Student3 }; 