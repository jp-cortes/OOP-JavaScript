class Users {
    constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    myCourses = [],
    learninPaths = learninPaths,
    }) {

    this._name = name;
    this._email = email;
    this.username = username;
    this.socialMedia = {
        twitter,
        instagram,
        facebook
    };
    this.myCourses = myCourses;
    this.learninPaths = learninPaths;

   }
   get name(){
    return this._name;
   }
   set name(newName) {
    if(newName !== this.name){
        console.error("Don't even try")
    } else {

        this._name = newName;
    }
    // this._name = newName;
}
};
export { Users };