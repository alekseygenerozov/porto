var pausing_function = function(){
    if(this.currentTime >= 10) {
        this.pause();

        // remove the event listener after you paused the playback
        this.removeEventListener("timeupdate",pausing_function);
    }
};