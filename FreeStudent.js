import { Users } from '../Users.js';
import { Comments } from './Comments';

class FreeStudent extends Users {
    constructor(id,props) {
        this.id = id;
        super(props);
    }
    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('Sorry, ' + this.name + ', you only can take free Courses');
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

export { FreeStudent };