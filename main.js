song1="";
song2="";
LeftWristX=0;
LeftWristY=0;
RightWristX=0;
RightWristY=0;
ScoreLeftWrist=0;
ScoreRightWrist=0;
Song1status="";
Song2status="";

function preload() {
song1=loadSound('music.mp3');
song2=loadSound('music2.mp3');
}

function setup() {
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses)

}

function modelLoaded(){
    console.log('PoseNet is initialised');
}

function gotPoses(){
if(results.length>0){

        ScoreLeftWrist=results[0].pose.keypoints[9].score
        ScoreLeftWrist=results[0].pose.keypoints[10].score
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX= "+leftWristX+"LeftWristY= "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX= "+rightWristX+"rightWristY= "+rightWristY);
}}

function draw(){
song1Status=song1.isPlaying();
song2Status=song1.isPlaying();

image(video,0,0,600,500);
fill("#FF0000");
stroke("#FF0000");

if(ScoreLeftWrist>0.2){
    circle(LeftWristX,LeftWristY,20);
    song2.stop();
}
if(Song1status=false){
    song1.isPlaying();
    document.getElementById("heading").innerHTML="Harry Potter Theme Song";
}
if(ScoreRightWrist>0.2){
    circle(RightWristX,RightWristY,20);
    song1.stop();
}
if(Song2status=false){
    song2.isPlaying();
    document.getElementById("heading").innerHTML="Peter Pan Theme Song";
}

}