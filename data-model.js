+var x = 210;
+var y = 400;
+var r = 0;
+
+function setup() {
+  createCanvas(400, 400);
+}
+  
+function draw() {
+  background(0);
+  noStroke();
+
+  // darker as it gets closer to 0
+  	push();
+ 		fill(255);
+  	translate(x, y);
+  	rotate(r);
+  	ellipse(-10, -10, 50, 100);
+  	ellipse(-10, -10, 75, 75);
+  	pop();
+  
+  	push();
+ 		fill(120);
+  	translate(x-100, y);
+  	rotate(r);
+  	ellipse(-10, -10, 50, 100);
+  	ellipse(-10, -10, 75, 75);
+  	pop();
+  
+  	push();
+ 		fill(120);
+  	translate(x+ 100, y);
+  	rotate(r);
+  	ellipse(-10, -10, 50, 100);
+  	ellipse(-10, -10, 75, 75);
+  	pop();
+
+  // up 3 pixels
+  y -= 3;
+  
+  // rotate 0.05 radians ~= 2.8 degrees per frame
+  r += 0.1
+  
+  // if reach past the top a bunch
+  if (y < -150) {
+    y = 400;
+  }
+}
