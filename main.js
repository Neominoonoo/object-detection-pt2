img ="";
status = "";
function preload(){
    img = loadImage("dog_cat.jpg");
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#0000FF");
    text("Dog", 40, 75);
    noFill();
    stroke("#0000FF");
    rect(30, 60, 450, 350);

    fill("#0000FF");
    text("Cat", 310, 105);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 320);
}
function modelLoaded(){
    console.log("Model has loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}