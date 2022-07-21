# notes prior building

working with important library `Object detection model` coco-ssd located in tensorflow.js. For our project we will be using the pre-trained
ssd model that we will leverage from the link below that have been ported to TensorFlow.js.
More information visit this [tensorflow/tfjs-models](https://github.com/tensorflow/tfjs-models#readme)

![Uploading image.png…]()


# notes for future refference 

working with tenseflow.js and react.js, eliminating "fingerpose" from package.json as it is from a previous code set.

to install everything we open the command, cd to out folder destination, and type `npm install` this will install all our packages

- node_modules created.

after, we will update our App.js file and check out the TODO which will update us if we want to use real time object detection react app for other usage.

## 1. **TODO - Import required model here:**

  which is coming from our cocossd package.
  after this step, our first dependency is imported.
  this step basically allows us to download our pre-trained tensorflow.js model.
  
## 2. **TODO - Import drawing utility here**
  skip for now, come back after step 5.

## 3. **TODO - Load network**

  created a new variable called net and then wait for it to load because of the asynchronous function.
  
## 4. **MAKE DETECTION STEP (FUN)**

  create a new variable called obj.
  using network defined in step 3 and we are passing it thru our video which is our webcam and we are passing it back to our detect function.
  console log to show all the detections
  
  ### CHECKPOINT

  before procceding, start the app to check if all is going correct by typing `npm start` in console.
  open up the console and you can see that the app is getting a lot of detection.
  open the first Array box and you can press the dropdown
  after you open it, you can see a couple of things showing:
    - an array which contains a *bbox* (bounding box) following by the x and y coordinates and the box width and height
    - following by a class that shows what object it is detecting, if you were to sit in front of the camera it would show class: "person"
    - followed by a score which measures the accuracy of the assumption
  
## 5. **TODO - Update drawing utility**
  create a new utility file in the src folder (js).
  we will create a function that draws a rectangle.
  which takes the obj variable and takes the canvas that is already predefined in the file.
  
  within the function in utilities we create styling which will hold the color of our box and our text, we can also set our font
  and then pass the text and prediction to the box that we gathered from the video as well as their x and y coordinatees, widht and height
  
  and finally we can import this to our App.js file 
  and call drawRect in TODO 5

