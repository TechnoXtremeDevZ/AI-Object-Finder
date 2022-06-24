var status = "";

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
}

function start() {
    detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded");
    status = true;

}
