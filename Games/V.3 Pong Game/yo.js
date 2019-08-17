class Vec
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }
    get len()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    set len(value) {
        const f = value / this.len;
        this.x *= f;
        this.y *= f;
    }


}

class Rect
{
    constructor(x = 0, y = 0)
    {
        this.pos = new Vec(-100, 0);
        this.size = new Vec(x, y);
    }
    get left()
    {
        return this.pos.x - this.size.x / 2;
    }
    get right()
    {
        return this.pos.x + this.size.x / 2;
    }
    get top()
    {
        return this.pos.y - this.size.y / 2;
    }
    get bottom()
    {
        return this.pos.y + this.size.y / 2;
    }
}



class Ball extends Rect
{
    constructor()
    {
        super(80, 80);
        this.vel = new Vec;
    }
}

class ball2 extends Rect
{
    constructor()
    {
        super(80, 80);
        this.vel = new Vec;
    }
}


class Obstacle extends Rect
{
    constructor()
    {
        super(2000, 100)
        
    }
}


class Player extends Rect
{
    constructor()
    {
        super(20, 100);
        this.vel = new Vec;
        this.score = 0;

        this._lastPos = new Vec;
    }
    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt;
        this._lastPos.y = this.pos.y;
    }
}

class vertical extends Rect
{
    constructor()
    {
        super(100, 400);
        this.vel = new Vec;
        this.score = 0;

        this._lastPos = new Vec;
    }
    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt;
        this._lastPos.y = this.pos.y;
    }
}

class horizontal extends Rect
{
    constructor()
    {
        super(400, 100);
        this.vel = new Vec;
        this.score = 0;

        this._lastPos = new Vec;
    }
    update(dt)
    {
        this.vel.x = (this.pos.x - this._lastPos.x) / dt;
        this._lastPos.x = this.pos.x;
    }
}


class lag extends Rect
{
    constructor()
    {
        super(40, 400);
        this.vel = new Vec;
        this.score = 0;

        this._lastPos = new Vec;
    }
    update(dt)
    {
        this.vel.x = (this.pos.x - this._lastPos.x) / dt;
        this._lastPos.x = this.pos.x;
    }
}

class bullet extends Rect
{
    constructor()
    {
        super(100, 20);
        this.vel = new Vec;
        this.score = 0;

        this._lastPos = new Vec;
    }
    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt;
        this._lastPos.y = this.pos.y;
    }
}

class blocker extends Rect
{
    constructor()
    {
        super(20, 100);
        this.vel = new Vec;
        this.score = 0;

        this._lastPos = new Vec;
    }
    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt;
        this._lastPos.y = this.pos.y;
    }
}

class object extends Rect
{
    constructor()
    {
        super(100, 100);
        this.vel = new Vec;
        this.score = 0;

        this._lastPos = new Vec;
    }
    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt;
        this._lastPos.y = this.pos.y;
    }
}




class Pong
{
    constructor(canvas)
    {

        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.initialSpeed = 5000;

        this.ball = new Ball;

        this.players = [
            new Player,
            new Player,
            new Player,
            new Player,
            new Player,
            new Player,
            new Player,

        ];




        

        this.players.forEach(p => p.pos.y = this._canvas.height / 2);



        let lastTime = null;
        this._frameCallback = (millis) => {
            if (lastTime !== null) {
                const diff = millis - lastTime;
                this.update(diff / 1000);
            }
            lastTime = millis;
            requestAnimationFrame(this._frameCallback);
        };



        this.lag = [
        	new lag,
        	new lag,
        ]


        this.bullet = [
        	new bullet,
        	new bullet,

        ]



        this.Obstacle = [
            new Obstacle,
            new Obstacle,

        ]

        this.ball2 = [
            new ball2,
            new ball2,

        ]

        this.blocker = [
        	new blocker,
        	new blocker,

        ]


        this.object = [
            new object,
            new object,

        ]

        this.horizontal = [
        	new horizontal,
        	new horizontal,

        ]

		this.vertical = [
        	new vertical,
        	new vertical,
		]
		

		this.bullet[0].pos.x = 700
        this.bullet[0].pos.y = 300

        this.blocker[0].pos.x = 500
        this.blocker[0].pos.y = 500

        this.bullet[1].pos.x = 800
        this.bullet[1].pos.y = 500


		this.vertical[0].pos.x = 220
        this.vertical[0].pos.y = 300


        this.horizontal[0].pos.x = 200
        this.horizontal[0].pos.y = 850

        this.vertical[1].pos.x = 700
        this.vertical[1].pos.y = 300


        this.Obstacle[0].pos.x = 1000;
        this.Obstacle[1].pos.x = 1000;

        this.Obstacle[0].pos.y = 50;
        this.Obstacle[1].pos.y = 950;

        //Obstacles are the bottom and top Borders

        this.object[0].pos.x = 1700;
        this.object[1].pos.x = 1700;

        this.object[0].pos.y = 620;
        this.object[1].pos.y = 320;

        //Objects are the Square Obstacles in your way

        this.ball2[0].pos.y = 500
        this.ball2[0].pos.x = 1000

        //Ball 2 is the Player 2

        this.players[0].pos.x = 350;
        this.players[1].pos.x = 1800;

        this.players[0].pos.y = 620;
        this.players[1].pos.y = 620;



        this.players[2].pos.x = 1700;
        this.players[3].pos.x = 1700;

        this.players[4].pos.x = 1700;
        this.players[5].pos.x = 1700;

        this.players[2].pos.y = 500;
        this.players[3].pos.y = 500;

        this.players[4].pos.y = 500;
        this.players[5].pos.y = 500;


        this.lag[0].pos.x = 450
        this.lag[0].pos.y = 430
        


        this.CHAR_PIXEL = 10;
        this.CHARS = [
            '111101101101111',
            '010010010010010',
            '111001111100111',
            '111001111001111',
            '101101111001001',
            '111100111001111',
            '111100111101111',
            '111001001001001',
            '111101111101111',
            '111101111001111',
        ].map(str => {
            const canvas = document.createElement('canvas');
            const s = this.CHAR_PIXEL;
            canvas.height = s * 5;
            canvas.width = s * 3;
            const context = canvas.getContext('2d');
            context.fillStyle = '#F90837';
            str.split('').forEach((fill, i) => {
                if (fill === '1') {
                    context.fillRect((i % 3) * s, (i / 3 | 0) * s, s, s);
                }
            });
            return canvas;
        });

        this.reset();
    }

    clear()
    {
        this._context.fillStyle = '#000';
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
    collide(player, ball)
    {
        if (player.left < ball.right && player.right > ball.left &&
            player.top < ball.bottom && player.bottom > ball.top) {
            this.reset()
            ball.vel.x = -ball.vel.x * 1.05;
            const len = ball.vel.len;
            ball.vel.y += player.vel.y * .2;
            ball.vel.len = len;
        }

        }

	collide(player, ball)
    {
        if (player.left < ball.right && player.right > ball.left &&
            player.top < ball.bottom && player.bottom > ball.top) {
            this.reset()
            ball.vel.x = -ball.vel.x * 1.05;
            const len = ball.vel.len;
            ball.vel.y += player.vel.y * .2;
            ball.vel.len = len;
        }

        }

    

    draw()
    {
        this.clear();

        this.drawRect(this.ball);
        this.players.forEach(player => this.drawRect(player));
        this.Obstacle.forEach(Obstacle => this.drawRect(Obstacle));
        this.object.forEach(object => this.drawRect(object));
        this.ball2.forEach(ball2 => this.drawRect(ball2));
        this.horizontal.forEach(horizontal => this.drawRect(horizontal));
        this.vertical.forEach(vertical => this.drawRect(vertical));
        this.bullet.forEach(bullet => this.drawRect(bullet));
        this.lag.forEach(lag => this.drawRect(lag));
        this.blocker.forEach(blocker => this.drawRect(blocker));
        this.drawScore();


    }
    drawRect(rect)
    {
        this._context.fillStyle = '#4DF62D';
        this._context.fillRect(rect.left, rect.top, rect.size.x, rect.size.y);
    }
    drawScore()
    {
        const align = this._canvas.width / 2.95;
        const cw = this.CHAR_PIXEL * 4;
        this.players.forEach((player, index) => {
            const chars = player.score.toString().split('');
            const offset = align * (index + 1) - (cw * chars.length / 2) + this.CHAR_PIXEL / 2;
            chars.forEach((char, pos) => {
                this._context.drawImage(this.CHARS[char|0], offset + pos * cw, 20);
            });
        });
            if (this.players[0].score == 1) 
                document.write('You Win          ')


            if (this.players[0].score == 1) {

                this.players[0].score == 0
            }

            if (this.players[0].score == 1)
                this.reset()
    }


    play()
    {
        const b = this.ball;
        if (b.vel.x === 0 && b.vel.y === 0) {
            b.vel.x = 200 * (Math.random() > .5 ? 1 : -1);
            b.vel.y = 200 * (Math.random() * 2 - 1);
            b.vel.len = this.initialSpeed;
        }
        
    {
        const c = this.ball2;
        if (b.vel.x === 0 && b.vel.y === 0) {
            b.vel.x = 200 * (Math.random() > .5 ? 1 : -1);
            b.vel.y = 200 * (Math.random() * 2 - 1);
            b.vel.len = this.initialSpeed;
        }


    }




    }
    moveball(keyCodeNumber)
    {
        var key_arrow_or_other = document.getElementById('key_arrow_or_other'),
        LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;

    switch (keyCodeNumber) {
    case LEFT:
    //alert (this.ball.pos);
        this.ball.pos.x = this.ball.pos.x - this.ball.size.x / 2.5;
        break;
    case RIGHT:
        this.ball.pos.x = this.ball.pos.x + this.ball.size.x / 2.5;
        break;
    case UP:
        this.ball.pos.y = this.ball.pos.y - this.ball.size.y / 2.5;
        break;
    case DOWN:
        this.ball.pos.y = this.ball.pos.y + this.ball.size.y / 2.5;
        break;

    }






    }
    reset()
    {
        const c = this.ball2;
        const b = this.ball;
        b.vel.x = 0;
        b.vel.y = 0;
        b.pos.x = this._canvas.width - 1850;
        b.pos.y = this._canvas.height - 775;
    }
    start()
    {
        requestAnimationFrame(this._frameCallback);
    }
    update(dt)
    {
        const cvs = this._canvas;
        const ball = this.ball;
        ball.pos.x += ball.vel.x * dt;
        ball.pos.y += ball.vel.y * dt;

        if (ball.right < 0 || ball.left > cvs.width) {
            ++this.players[ball.vel.x < 0 | 0].score;
            this.reset();
        }

        if (ball.vel.y < 0 && ball.top < 0 ||
            ball.vel.y > 0 && ball.bottom > cvs.height) {
            ball.vel.y = -ball.vel.y;
        }

   




        var tmp = this.players[1].pos.y ;

       //console.log(tmp);

      this.players[1].pos.y = tmp + 10;

      if (tmp > 800 ) {
        this.players[1].pos.y = 0;
      }









        var tmp2 = this.players[0].pos.y ;

       //console.log(tmp);

      this.players[0].pos.y = tmp2 - 3;

      if (tmp2 < 0 ) {
        this.players[0].pos.y = 800;
      }









      var tmp3 = this.bullet[0].pos.x ;

      //console.log(tmp);

      this.bullet[0].pos.x = tmp3 - 10;

      if (tmp3 < 0) {
        this.bullet[0].pos.x = 700;
      }


      var tmp9 = this.bullet[1].pos.x ;

      this.bullet[1].pos.x = tmp9 - 30;

      if (tmp9 < 0) {
        this.bullet[1].pos.x = 700;
      }







        this.players.forEach(player => {
            player.update(dt);
            this.collide(player, ball);
        });

        this.draw();
    


       

        this.players.forEach(player => {
            player.update(dt);
            this.collide(player, ball2);
        });

        this.draw();
    } 



}

const canvas = document.querySelector('#pong');
const pong = new Pong(canvas);




pong.start();
//pong.play();




function checkKeycode(event) {
    // handling Internet Explorer stupidity with window.event
    // @see http://stackoverflow.com/a/3985882/517705
    var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;

    //print_arrow_key(keycode);
    pong.moveball(keycode);

    return false;
}

document.onkeydown = checkKeycode;



canvas.addEventListener('mousemove', event => {
	pong.blocker[0].pos.y = event.offsetY;
})

canvas.addEventListener('mousemove', event => {
	pong.blocker[0].pos.x = event.offsetX;
})






var count = 0
var intId = setInterval(counter, 100)

function counter(){
console.log(++count)
}





