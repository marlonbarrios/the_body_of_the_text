// the body of the text 
// concept, programming and performance by Marlon Barrios Solano
// february 2024
// Berlin
/*  This code utilizes a webcam feed to track hand movements using the MediaPipe library in JavaScript. Upon initialization, it creates a canvas matching the dimensions of the window and launches the webcam feed. In the draw loop, it clears the background and renders the mirrored webcam feed. It checks if hand tracking is ready and then smooths the landmarks using linear interpolation (lerping). Next, it maps the positions of the hands and feet to specific letters of text, which are then rendered on the screen. The program includes functions for setting camera dimensions, centering elements, and capturing the webcam feed.


/* - - Variables - - */

// webcam variables
let capture; // our webcam
let captureEvent; // callback when webcam is ready

// lerping (i.e. smoothing the landmarks)
let lerpRate = 0.2; // smaller = smoother, but slower to react
let madeClone = false;
let lerpLandmarks;

// styling
let ellipseSize = 20; // size of the ellipses
let letterSize = 20; // size of the letter

/* - - Setup - - */
function setup() {

  createCanvas(windowWidth, windowHeight);
  captureWebcam(); // launch webcam

}

/* - - Draw - - */
function draw() {
  
  
  // Clear the background
  background(0);

  /* WEBCAM */
  push();
  centerOurStuff(); // center the webcam
  scale(-1, 1); // mirror webcam
  image(capture, -capture.scaledWidth, 0, capture.scaledWidth, capture.scaledHeight); // draw webcam
  scale(-1, 1); // unset mirror
  pop();




  /* TRACKING */
  if (mediaPipe.landmarks[0]) { // is hand tracking ready?
  
    // clone the landmarks array for lerping
    if (!madeClone) {
      lerpLandmarks = JSON.parse(JSON.stringify(mediaPipe.landmarks));
      madeClone = true;
    }

    // lerp the landmarks
    for (let i = 0; i < mediaPipe.landmarks[0].length; i++) {
      lerpLandmarks[0][i].x = lerp(lerpLandmarks[0][i].x, mediaPipe.landmarks[0][i].x, lerpRate);
      lerpLandmarks[0][i].y = lerp(lerpLandmarks[0][i].y, mediaPipe.landmarks[0][i].y, lerpRate);
    }


    let leftHandX = map(lerpLandmarks[0][19].x, 1, 0, 0, capture.scaledWidth);
    let leftHandY = map(lerpLandmarks[0][19].y, 0, 1, 0, capture.scaledHeight);

    let rightHandX = map(lerpLandmarks[0][20].x, 1, 0, 0, capture.scaledWidth);
    let rightHandY = map(lerpLandmarks[0][20].y, 0, 1, 0, capture.scaledHeight);

    let rightFootX = map(lerpLandmarks[0][30].x, 1, 0, 0, capture.scaledWidth);
    let rightFootY = map(lerpLandmarks[0][30].y, 0, 1, 0, capture.scaledHeight);

    let leftFootX = map(lerpLandmarks[0][29].x, 1, 0, 0, capture.scaledWidth);
    let leftFootY = map(lerpLandmarks[0][29].y, 0, 1, 0, capture.scaledHeight);


    let str = " the text of words ";
    let strL = " the body of the text ";
    let strR = " words on the body ";

    textFont('Georgia');
    textAlign(TOP, CENTER);
    fill('white');
    stroke('black');
    strokeWeight(5);


let letterSize = 0.08;
     // jeft hand to  right hand
     let xPosStartH = leftHandX;
     let yPosStartH = leftHandY;
     let xPosEndH = rightHandX;
     let yPosEndH = rightHandY;

    // R hand to foot
    let xPosStartH2 = rightHandX
    let yPosStartH2 = rightHandY;
    let xPosEndH2 = rightFootX;
    let yPosEndH2 = rightFootY;

      
    //left hand  to left foot
    let xPosStartLH = leftHandX;
    let yPosStartLH = leftHandY;
    let xPosEndLH = leftFootX;
    let yPosEndLH = rightFootY;
   
    
    for (let j = 0; j < strL.length; j++) {
    
      let xPosH = lerp(xPosStartH, xPosEndH, j / strL.length);
      let yPosH = lerp(yPosStartH, yPosEndH , j / strL.length);
      textSize(dist (rightHandX, rightHandY, leftHandX, leftHandY) * letterSize);
      text(strL.charAt(j), xPosH, yPosH * 0.66);
    }
    for (let j = 0; j < str.length; j++) {
      let xPosH2 = lerp(xPosStartH2, xPosEndH2, j / str.length);
      let yPosH2 = lerp(yPosStartH2, yPosEndH2, j / str.length);
      textSize(dist (rightHandX, rightHandY, rightFootX, rightFootY) * letterSize);
      text(str.charAt(j), xPosH2, yPosH2 * 0.7);
    }
    for (let j = 0; j < strR.length; j++) {
      let xPosLH = lerp(xPosStartLH, xPosEndLH, j / strR.length);
      let yPosLH = lerp(yPosStartLH, yPosEndLH , j / strR.length);
      textSize(dist (leftHandX, leftHandY, leftFootX, leftFootY) * letterSize);
      text(strR.charAt(j), xPosLH, yPosLH * 0.7);

    }


    push();
    centerOurStuff();
    pop();
  }
}
  
 
function captureWebcam() {
  capture = createCapture(
    {
      audio: false,
      video: {
        facingMode: "user",
      },
    },
    function (e) {
      captureEvent = e;
      console.log(captureEvent.getTracks()[0].getSettings());
      capture.srcObject = e;

      setCameraDimensions(capture);
      mediaPipe.predictWebcam(capture);
    }
  );
  
  capture.elt.setAttribute("playsinline", "");
  capture.hide();

}

function setCameraDimensions(video) {
  const vidAspectRatio = video.width / video.height;
  const canvasAspectRatio = width / height;

  if (vidAspectRatio > canvasAspectRatio) {
    video.scaledHeight = height;
    video.scaledWidth = video.scaledHeight * vidAspectRatio;
  } else {
    video.scaledWidth = width;
    video.scaledHeight = video.scaledWidth / vidAspectRatio;
  }
}

function centerOurStuff() {
  translate(width / 2 - capture.scaledWidth / 2, height / 2 - capture.scaledHeight / 2);
}


