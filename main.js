LipX=0;
LipY=0;

function preload(){
    Lipstick = loadImage("https://i.postimg.cc/vBhkCFLh/lip4.png")

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on( 'pose' , gotPoses);


}

function modelLoaded(){
    console.log("Posenet is Initialised");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    LipX=results[0].pose.nose.x-15;
    LipY=results[0].pose.nose.y+10;
    console.log("Lip x = " + LipX);
    console.log("Lip y = " + LipY);
}
}
function draw(){
    image(video , 0 ,0 , 300 ,300);
    image(Lipstick , LipX , LipY , 30 , 30 );
    

}
 function TakeSnapshot(){
     save("pic.jpeg");
 }