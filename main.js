function preload(){

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,300,300);
    fill(0,0,255);
    stroke(0,0,255);
    circle(400,50,40);
    rect(400,100,30,50);
    ellipse(400,200,30,60);
}