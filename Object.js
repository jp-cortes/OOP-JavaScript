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