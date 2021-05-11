let x = 10;
let y = 10;
let bg = 0;
let b = [];

let rY1 =120;
let rY2 =120;

let p1Score = 0;
let p2Score = 0;

function setup()
{
	createCanvas(900, 400);
}

function draw()
{
	background("PINK");
	//fill(bg);
	//rect(x,y,150,100);
	//circle(x,y,20);
	for (var i = b.length - 1; i >= 0; i--) {
		b[i].display();
		if (b[i].getx()<=50 && (b[i].gety()>=rY1&&b[i].gety()<=rY1+150)) {
			//console.log("OWO");
			b[0].pongR();
		}
		if (b[i].getx()>=850 && (b[i].gety()>=rY2&&b[i].gety()<=rY2+150)) {
			//console.log("OWO");
			b[0].pongL();
		}

		if (b[i].getx()>=880) {
			p1Score++;
		}
		if (b[i].getx()<=12) {
			p2Score++;
		}
	}


		fill(30,30,30);
		rect(30, rY1, 20, 150);
		rect(850, rY2, 20, 150);

		player();

		fill('BLACK');
  	textSize(25);
  	text("Score: " + p1Score, 30, 25);
  	text("Score: " + p2Score, 780, 25);
}

function mouseClicked(){
	if (b.pop() == null) {
		b.push(new Ball(350, 200, 20));
	}
}

function player(){
	if (keyIsDown(87)) {
    rY1 = rY1 - 5;
  }
	if (keyIsDown(83)) {
    rY1 = rY1 + 5;
  }
//---------------------------
	if (keyIsDown(UP_ARROW)) {
    rY2 = rY2 - 5;
  }
	if (keyIsDown(DOWN_ARROW)) {
    rY2 = rY2 + 5;
  }
	if (keyIsDown(LEFT_ARROW)) {

		b[0].pongR();
	}

}
