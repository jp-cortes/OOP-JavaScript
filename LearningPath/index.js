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
};

export { LearningPath };