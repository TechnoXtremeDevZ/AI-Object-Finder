var status_var = "";
var object = [];

function preload() {

}

function setup() {
    canvas = createCanvas(290, 290);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 290, 290);
    console.log(status_var == true);
    if (status_var == true) {
        detector.detect(video, gotResults);
        var item = document.getElementById("user_input").value;
        for (i = 0; i < object.length; i++) {
            if (item == object[i].label) {
                document.getElementById("object_found").innerHTML = item + " was found";
            }
        }
    }
}

function start() {
    detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded");
    status_var = true;
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        object = results;
    }
}
