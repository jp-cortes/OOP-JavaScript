import { Courses } from "./Courses/index.js";
import { LearningPath } from "./LearningPath/index.js";
import { Users } from "./Users/index.js";
import { Student } from "./Prototypes/index.js";
import Comments from "./Comments/index.js";
import { CourseClass } from './Video/index.mjs';

const class10 = new CourseClass({name: "OPP JavaScript", videoID: "ujhvagdv",})
class10.playVideo();
class10.pauseVideo();

const htmlAndCssBasics = new Courses({
    name: "HTML and CSS basics", 
    teacher: "Diego DeGranda", 
    lessons: 30
});
const javascriptBasics = new Courses({
    name: "JavaScript and V8 engine", 
    teacher: "Diego DeGranda", 
    lessons: 20
});
const reactJS = new Courses({
    name: "Create your first REACT APP", 
    teacher: "Juan David Castro Gallego", 
    lessons: 37
});
const createYourOwnCryptoCurrency = new Courses({
    name: "Create your own Crypto currency", 
    teacher: "Diana Ocando", 
    lessons: 20
});



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



const jhonnyCage = new Users({
    name: "Jhonny Cage",
    username: "Jcage",
    email: "jhonny@mortalK.com",
    twitter: "jcage",
    learninPaths: [
        webDesignSchool,
        blockchainSchool
    ],
});
console.log(jhonnyCage);
console.log(jhonnyCage.name);

//the "_" i s used to  ask internally not to modify
console.log(jhonnyCage._name);


const jhonnyTest = new Users({
    name: "Jhonny Test",
    username: "duke99",
    email: "jhonny@duke.com",
    twitter: "jtuest",
    learninPaths: [
        fullStackJavascript,
        blockchainSchool
    ],
});

