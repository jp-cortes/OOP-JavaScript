class Courses {
    constructor({
        id,
        name,
        teacher,
        isFree = false,
        lang = "Spanish",
        lessons = [],
        comments = [],
    }) {

        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.isFree = isFree;
        this.lang = lang;
        this.lessons = lessons;
        this.comments = comments;
    }


};
export { Courses };