lips_x = 0 ;
lips_y = 0 ;



 function preload()
  { lip_filter = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png'); }

  function setup()
   { canvas = createCanvas(300, 300);
     canvas.center();
      video = createCapture(VIDEO); 
      video.size(300, 300);
       video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
         poseNet.on('pose', gotPoses); } 
         
         function modelLoaded()
          { console.log('PoseNet Is Initialized'); }
          
          function gotPoses(results)
           { if (results.length > 0)
             { console.log(results); 
                lips_x = results[0].pose.lip.x -5;
                 lips_y = results[0].pose.lip.y -5; } }
                 
                 function draw() 
                 { image(video, 0, 0, 300, 300); image(lip_filter, lips_x, lips_y, 30, 30); } 
                 
                function take_snapshot() { save('myFilterImage.png'); }