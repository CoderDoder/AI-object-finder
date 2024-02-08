var video="";
var status_object="";
var objects=[];
var item="";

function preload(){
    
}  

function setup(){
    canvas= createCanvas(500,350);
    canvas.position(350,360);
    video=createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,0,0,500, 350);
    if (status_object != ""){
        object_detection.detect(video, gotResults);
        for(var i=0; i<objects.length;i++){
            if(objects[i].label==item){
             document.getElementById("status_objects").innerHTML="Status: Item Detected Yayy!!!!!!";
             stroke("green");
             percentage=floor(objects[i].confidence*100);
             text(objects[i].label+" - "+percentage+"%",objects[i].x+20,objects[i].y+15);
             noFill();
             rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
             video.stop();
            }
            else{
             document.getElementById("status_objects").innerHTML=item+" not found";
    }

        }

    }
    

}
 
function start(){
    object_detection=ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("status_objects").innerHTML="Status : Detecting Objects Kripyaya intazaar karein";
    item=document.getElementById("input1").value
    

}

function model_loaded(){
    console.log("model loaded");
    status_object=true;

}

function gotResults(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        objects=result;
    }
}


