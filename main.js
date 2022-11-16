import { Courses } from "./Courses.js";
import { LearningPath } from "./LearningPath.js";
import { Users } from "./Users.js";
import { Student } from "./Prototypes.js";
import { Comments } from "./Comments.js";
import { CourseClass } from './Video.js';
import { BasicStudent } from './BasicStudent.js';
import { ExpertStudent } from './ExpertStudent.js';
import { FreeStudent } from './FreeStudent.js';



const class10 = new CourseClass({name: "OPP JavaScript", videoID: "ujhvagdv",})
class10.playVideo();
class10.pauseVideo();

const htmlAndCssBasics = new Courses({
    name: "HTML and CSS basics", 
    teacher: "Diego DeGranda", 
    lessons: 30,
    isFree: true,
});
const javascriptBasics = new Courses({
    name: "JavaScript and V8 engine", 
    teacher: "Diego DeGranda", 
    lessons: 20,
    isFree: true,
});
const reactJS = new Courses({
    name: "Create your first REACT APP", 
    teacher: "Juan David Castro Gallego", 
    lessons: 37,
    isFree: false,
});
const createYourOwnCryptoCurrency = new Courses({
    name: "Create your own Crypto currency", 
    teacher: "Diana Ocando", 
    lessons: 20,
    lang: "English",
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



const jhonnyCage = new FreeStudent('Student',{
    name: "Jhonny Cage",
    username: "Jcage",
    email: "jhonny@mortalK.com",
    twitter: "jcage",
    learninPaths: [
        webDesignSchool,
        blockchainSchool
    ],
});

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

