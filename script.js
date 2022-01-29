function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(400, 400);
    canvas.position(570, 140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    //background("ffbcbc");
}

function modelLoaded() {
    console.log("inside model loaded");
}

function gotPoses(error, result) {
    if(error) {
        console.error(error);
    }
    else {
        if(results.length > 0) {
            console.log(result);
        }
    }
}