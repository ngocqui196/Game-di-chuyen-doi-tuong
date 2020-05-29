function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getSpeed = function () {
        return setTimeout(start,this.speed)
    }

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 100;
        console.log('ok: ' + this.left);
    }

    this.moveDown = function(){
        this.top += 100;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function(){
        this.left -= 100;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function(){
        this.top -= 100;
        console.log('ok: ' + this.top);
    }

}

let hero = new Hero('Sonic.png', 0, 0, 200,1);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top <= 0) {
        hero.moveRight();
    }
    if (hero.left >= window.innerWidth - hero.size ) {
        hero.moveDown();
    }
    if (hero.top >= window.innerHeight -hero.size) {
        hero.moveLeft();
    }
    if (hero.left <= 0) {
        hero.moveUp();
    }
    hero.getSpeed();
    document.getElementById('game').innerHTML = hero.getHeroElement();

}
start();
