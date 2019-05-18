function setup() {
createCanvas(1000, 1000);
angleMode(DEGREES);
}
function draw() {
background(300,100,10);
strokeJoin(ROUND);
beginShape();
curveVertex(300, 500);
curveVertex(300, 500);
curveVertex(299, 460);
curveVertex(313, 400);
curveVertex(340, 360);
curveVertex(390, 330);
curveVertex(390, 330);
endShape();
beginShape();
curveVertex(390, 330);
curveVertex(390, 330);
curveVertex(420, 280);
curveVertex(525, 240);
curveVertex(630, 280);
curveVertex(650, 365);
curveVertex(660, 370);



endShape();
fill(222,184,135)
ellipse(500,500,400,400);
fill(0,0,0)
ellipse(425,425, 40,40)
ellipse(575,420, 45,45)
rect(450,475,100,10)
rect(405,400,40,8)
rect(545,385,60,8)


}
