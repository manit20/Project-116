noseX = 0;
noseY = 0;

function preload(){
    mushtache = loadImage("https://i.postimg.cc/L6qk6hg5/m.png")
}

function setup(){
    canvas = createCanvas(320, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video, 0, 0, 320, 300);
    image(mushtache, noseX, noseY, 50, 30);
}

function take_snapshot(){
    save("filter_image.png");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 23.5;
        noseY = results[0].pose.nose.y + 3.5;
        console.log("Mustache X = " + noseX);
        console.log("Mustache Y = " + noseY);
    }
}