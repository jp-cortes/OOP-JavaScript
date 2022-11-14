class Courses {
    constructor({
        id,
        name,
        teacher,
        lessons = [],
        comments = [],
    }) {

        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
        this.comments = comments;
    }


};
export { Courses };