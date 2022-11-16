import { Users } from './Users.js';
import { Comments } from './Comments';
class Teacher extends Users {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    newComment(addComment) {
        const comment = new Comments({
            content: addComment,
            name: this.name,
            id: "Teacher",
        });
        comment.addNewComments();
    }
};

export { Teacher };