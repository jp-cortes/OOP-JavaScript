class Comments {
    constructor({
        content,
        name, 
        id = "Student",
        }) {
        this.content = content;
        this.name = name;
        this.id = id;
        this.likes = 0;
    }
    addNewComments() {
        console.log(this.name + "(" + this.id + ")");
        console.log(this.likes + " likes");
        console.log(this.content)
    }
};
export { Comments };