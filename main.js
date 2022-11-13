//object
const jhonny = {
    name: "Jhonny",
    age: 20,
    approvedCourses: [
        "JavaScript basics",
        "HTML & CSS basics",
    ],
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);      
    },
};
// jhonny.approveCourse("REACT JS");


//prototype function
function Student(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
}
//using protoype is posible to crates methos outside of  objects
Student.prototype.approveCourse = function (newCourse) {
    let old = this.approvedCourses.includes("Python");
    if(old) {
        console.log('ya tomaste el curso de Python')
    }
    this.approvedCourses.push(newCourse);
}

//prototypes in javascript are created with the word new
// const jane = new Student(
//     "Jane Doe",
//     15,
//     [
//         "javaSE advance",
//         "Python fundaments",
//     ],
// );

// jane.approveCourse("Angular");


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


////////
class Courses {
    constructor({
        id,
        name,
        teacher,
        lessons = [],
    }) {

        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }


};
const htmlAndCssBasics = new Courses({name: "HTML and CSS basics", teacher: "Diego DeGranda", lessons: 30});
const javascriptBasics = new Courses({name: "JavaScript an V8 engine", teacher: "Diego DeGranda", lessons: 20});
const reactJS = new Courses({name: "Create your first REACT APP", teacher: "Juan David Castro Gallego", lessons: 37});
const createYourOwnCryptoCurrency = new Courses({name: "Create your own Crypto currency", teacher: "Diana Ocando", lessons: 20});

class LearningPath {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
    addNewCourse(newCourse) {
        const addedCourse = this.courses.every(i => i.name);
        if(addedCourse !== newCourse) {

            this.courses.push(newCourse);
        }
    }
}

const webDesignSchool = new LearningPath({
        name: "Web design school",
        courses: [
            htmlAndCssBasics,
            javascriptBasics,
            reactJS,
        ],
    });
const blockchainSchool = new LearningPath({
        name: "Blockchain school",
        courses: [
            createYourOwnCryptoCurrency,
        ],
        });
const fullStackJavascript = new LearningPath({
            name: "Fullstack developer with JavaScript", 
            courses: [
                htmlAndCssBasics,
                javascriptBasics,
            ],
        });

class Users {
    constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    myCourses = [],
    learninPaths = learninPaths,
    }) {

    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
        twitter,
        instagram,
        facebook
    };
    this.myCourses = myCourses;
    this.learninPaths = learninPaths;
   }
};

const jhonny2 = new Users({
    name: "Jhonny Cage",
    username: "Jcage",
    email: "jhonny@mortalK.com",
    twitter: "jcage",
    learninPaths: [
        webDesignSchool,
        blockchainSchool
    ],
});

const jhonny3 = new Users({
    name: "Jhonny Tuest",
    username: "duke99",
    email: "jhonny@duke.com",
    twitter: "jtuest",
    learninPaths: [
        fullStackJavascript,
        blockchainSchool
    ],
});