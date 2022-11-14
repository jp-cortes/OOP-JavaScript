class Comments {
    constructor({
        name, 
        comments = []
        }) {
        this.name = name;
        this.comments = comments;
    }
    addNewComments(newComment) {
        this.comments.push(newComment)
    }
};
export { Comments };