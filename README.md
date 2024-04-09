# The Body of the Text: Body Tracking with Webcam and Text Rendering

![Screenshot 2024-02-07 at 7 54 07 PM](https://github.com/marlonbarrios/the_body_of_the_text/assets/90220317/4996275b-100c-47c6-9915-b4958f7ac6b3)


Concept, programming, and performance by Marlon Barrios Solano  
February 2024  
Berlin

## Description

This code utilizes a webcam feed to track hand movements using the MediaPipe library in JavaScript (P5.js). Upon initialization, it creates a canvas matching the dimensions of the window and launches the webcam feed. In the draw loop, it clears the background and renders the mirrored webcam feed. It checks if hand tracking is ready and then smooths the landmarks using linear interpolation (lerping). Next, it maps the positions of the hands and feet to specific letters of text, which are then rendered on the screen. The program includes functions for setting camera dimensions, centering elements, and capturing the webcam feed.

[LIVE APP](https://marlonbarrios.github.io/the_body_of_the_text/)

## Software

[p5.js](https://p5js.org/)

[Pose landmark detection with mediapipe](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker#get_started)

Created during a artistic reserach residency at [Lake Studios Berlin](https://lakestudiosberlin.com/) in February 2024

Thanks to  the amazing work of [Nahuel Gerth](https://github.com/NahuelGerthVK)

**The MIT License (MIT)**

Copyright © 2024 marlon barrios solano

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.









