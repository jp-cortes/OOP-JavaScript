function videoPlay(id) {
    const secretUrl = "https://srecreturel.com";
    console.log('playing from url ' + secretUrl)
}

function videoStop(id) {
    const secretUrl = "https://srecreturel.com";
    console.log('Pausing the  url ' + secretUrl)
}

class CourseClass {
    constructor({
        name,
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }
    playVideo() {
        videoPlay(this.videoID)
    }
    pauseVideo() {
        videoStop(this.videoID)
    }
};

export { CourseClass };