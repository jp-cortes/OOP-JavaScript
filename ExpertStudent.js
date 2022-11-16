import { Users } from './Users.js';
import { Comments } from './Comments';

class ExpertStudent extends Users {
    constructor(id,props) {
        this.id = id;
        super(props);
    }
    newComment(addComment) {
        const comment = new Comments({
            content: addComment,
            name: this.name,
        });
        comment.addNewComments();
    }
}

export { ExpertStudent };