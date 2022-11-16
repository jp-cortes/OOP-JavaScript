import { Users } from './Users.js';
import { Comments } from './Comments';

class BasicStudent extends Users {
    constructor(id,props) {
        this.id = id;
        super(props);
    }
    approveCourse(newCourse) {
        if(newCourse.lang !== "English") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('Sorry, ' + this.name + ', You only can take Coures in Spanish');
        }
    }

    newComment(addComment) {
        const comment = new Comments({
            content: addComment,
            name: this.name,
        });
        comment.addNewComments();
    }
}

export { BasicStudent };