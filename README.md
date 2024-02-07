# Hand Tracking with Webcam and Text Rendering

Concept, programming, and performance by Marlon Barrios Solano  
February 2024  
Berlin

## Description

This code utilizes a webcam feed to track hand movements using the MediaPipe library in JavaScript. Upon initialization, it creates a canvas matching the dimensions of the window and launches the webcam feed. In the draw loop, it clears the background and renders the mirrored webcam feed. It checks if hand tracking is ready and then smooths the landmarks using linear interpolation (lerping). Next, it maps the positions of the hands and feet to specific letters of text, which are then rendered on the screen. The program includes functions for setting camera dimensions, centering elements, and capturing the webcam feed.

LIVE APP

