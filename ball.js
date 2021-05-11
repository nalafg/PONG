class Ball
{
	constructor(x ,y ,d)
	{
		this.fast = 5;
		this.x = x;
		this.y = y;
		this.d = d;
		this.stepY = this.fast;
		this.stepX = this.fast;
		this.c = this.randomColor();

	}

	display()
	{
		fill(this.c);
		circle(this.x, this.y, this.d);
		this.moveY();
		this.moveX();
		this.hasColision();
	}

	moveY()
	{
		this.y+=this.stepY;
	}
	moveX()
	{
		this.x+=this.stepX;
	}

	hasColision()
	{
		if(this.y - (this.d/2) <= 0)
		{
			this.stepY = this.fast;
			//console.log("Top");
		}
		else if(this.y - (this.d/2) >= height-20)
		{
			//console.log("Bot");
			this.stepY = -this.fast;
		}

		else if(this.x - (this.d/2) <= 0)
		{
			this.stepX = this.fast;
			console.log("Punto para p2");
		}
		else if(this.x - (this.d/2) >= width-30)
		{
			console.log("Punto para p1");
			this.stepX = -this.fast;
		}
	}

	pongR(){
		this.stepX = this.fast;
	}
	pongL(){
		this.stepX = -this.fast;
	}


	randomColor()
	{
		return Array.from(Array(3), () => Math.floor(Math.random()*256));
	}

	//----------------------------------------------------------------

	getx(){
		return this.x;
	}
	gety(){
		return this.y;
	}

}
