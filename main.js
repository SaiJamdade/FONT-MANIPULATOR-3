difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("grey");
    textSize(difference);
    fill("orange");
    text("Sai",50,400);
    
}


function modalLoaded(){
    console.log("PoseNet Is Initilized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
