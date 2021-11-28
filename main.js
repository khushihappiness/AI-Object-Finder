function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();

    video= createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

status="";

function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects";
    document.getElementById("input_box").value;
}

function modelLoaded()
{
    console.log("Model is loaded")
    status= true;

}
