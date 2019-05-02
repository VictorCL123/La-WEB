var c;
var ctx;
var estrellaImg = new Image();

function init()
{
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	estrellaImg.src = "img/estrella.png";
	window.requestAnimationFrame(draw);
}

class Cuadro
{
	constructor(width,color,clockwise)
	{
		if(this.clockwise == 1)
			this.avance = 0;
		else
			this.avance = Math.PI*2;
		
		this.width = width;
		this.color = color;
		this.clockwise = clockwise;
	}
	draws()
	{
		ctx.save();
		if(this.color == 0)
			ctx.fillStyle = "rgb(255,255,255)";
		else
			ctx.fillStyle = "rgb(255,0,0)";
		ctx.translate(200,200);
		ctx.rotate(this.avance);
		ctx.fillRect(-(this.width/2),-(this.width/2),this.width,this.width);
		ctx.restore();

		if(this.clockwise == 1)
		{
			this.avance += 0.05;
			if(this.avance > Math.PI*2)
				this.avance = 0;
		}
		else
		{
			this.avance -= 0.05;
			if(this.avance < 0)
				this.avance = Math.PI*2;
		}
	}
}

class Circulo
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
	draws()
	{
		ctx.beginPath();
		ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
	}
}

class Estrella
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.avance = 0;
		this.height = 80;
		this.width = 80;
	}
	draws()
	{
		ctx.save();
		ctx.translate(200,200);
		ctx.rotate(this.avance);
		ctx.drawImage(estrellaImg,-(this.height/2),-(this.width/2),this.height,this.width);
		ctx.restore();

		this.avance += 0.05;
		if(this.avance > Math.PI*2)
		{
			this.avance = 0;
		}
	}
}

let cuadro1 = new Cuadro(100,0,-1);
let cuadro2 = new Cuadro(200,1, 1);
let cuadro3 = new Cuadro(300,0,-1);
let cuadro4 = new Cuadro(400,1, 1);

let circulo1 = new Circulo(0,0);
let circulo2 = new Circulo(400,0);
let circulo3 = new Circulo(0,400);
let circulo4 = new Circulo(400,400);

let estrella = new Estrella(10,10);

function draw()
{
	ctx.clearRect(0,0, c.width, c.height);
	ctx.fillRect(0,0,400,400);

	cuadro4.draws();
	cuadro3.draws();
	cuadro2.draws();
	cuadro1.draws();

	circulo1.draws();
	circulo2.draws();
	circulo3.draws();
	circulo4.draws();

	estrella.draws();

	window.requestAnimationFrame(draw);
}

window.onload = init;