//script de la calculadora:

const Pantalla = document.getElementById('pantalla');
var resultado;
const Calculadora = document.getElementById('calculadora')
function operar(key){

    if(Pantalla.innerHTML.length < 20){
        var texto = Pantalla;

        switch(key){
            case 'c':
                texto.innerHTML = ' ';
                break;
            case '=':
                resultado = eval(texto.innerHTML)
                texto.innerHTML = resultado;
                break;
            default:
                texto.innerHTML = texto.innerHTML + key;
                break;
        }
    }else{
        alert('no se pueden introducir más de 20 dígitos')
    }

}

Calculadora.addEventListener('click' , e => {
    console.log(e.target)
})

// script del pong:
p1y = p2y = 40;
pt = 10;
ph = 100;
bx = by = 50;
bd = 6;
xv = yv = 4;
score1 = score2 = 0;
ais = 4;

function setupGame(){
  c = document.getElementById('game')
  cc = c.getContext('2d')
  setInterval(game, 1000/30)
  c.addEventListener('mousemove',e => {
    p1y = e.clientY -ph/2;
  })
}
function reset(){
  bx = c.width /2
  by = c.height / 2;

}
function game(){
  bx += xv;
  by += yv;

  if(by < 0 && yv < 0) yv = -yv
  if(by > c.height && yv > 0) yv = -yv
  if(bx < 0){
    if(by > p1y && by < p1y+ph){
      xv = -(xv +0.5)
      dy = by-(p1y+ph/2)
      yv = dy*0.3 +0.5
      ais += 0.5
    }else{
      score2++;
      reset()
    }
  }
  if(bx > c.width){
    if(by > p2y && by < p2y+ph){
      xv = -(xv +0.5)
      dy = by-(p2y+ph/2)
      yv = dy*0.3 +0.5
      ais += 0.5

    }else{
      score1++;
      reset()
    }
  }
  if(p2y + ph/2 < by){
    p2y += ais;
  }else{
    p2y -= ais;
  }
  cc.fillStyle = 'black';
  cc.fillRect(0,0,c.width,c.height);
  cc.fillStyle = 'white';
  cc.fillRect(0,p1y,pt,ph)
  cc.fillRect(c.width-pt, p2y, pt, ph)
  cc.fillRect(bx-bd/2,by-bd/2,bd,bd)
  cc.fillText(score1,100,100)
  cc.fillText(score2,c.width-100,100)
}
