let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture=createCapture(VIDEO)
    capture.hide();

    posenet=ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses)
    //actor_img=loadImage('images/shahrukh.png');
    //specs=loadImage('images/spects.png');
    //smoke=loadImage('images/cigar.png');
    
  }

  function receivedPoses(poses){
    console.log(poses);
    if(poses.length > 0){
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton        
    }
    
  } 
  
  function modelLoaded(){
    console.log('Model has loaded');
  }

  function draw() {
     image(capture,0,0);
     fill(255,0,0);
    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++ ){
            ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y, 20 )
        }
        stroke(255,255,255)
        strokeWeight(5)
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
        //image(actor_img,singlePose.nose.x-40, singlePose.nose.y-60, 100,100)
        //image(specs,singlePose.nose.x-40, singlePose.nose.y-80, 100,100)
        //image(smoke,singlePose.nose.x-40, singlePose.nose.y+20, 40,40)
    }     
     
  }


  //fill(225);
 //ellipse(mouseX,mouseY,50,50);
 //images and video
 //shahrukh_img=loadImage('images/cigar.png')
 //image(shahrukh_img,mouseX, mouseY,100, 100)