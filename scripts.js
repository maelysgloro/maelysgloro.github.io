function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5');
}

function draw(){
  // noStroke();
  // fill(150, 0, 150, 30);
  // ellipse(mouseX, mouseY, 50);
  colorMode(RGB);

  background(255);


  for (let x = 50; x< width; x+=100) {
    for (let y = 50; y< height; y+=100) {

      let d = dist(mouseX, mouseY, x, y);
      colorMode(HSB);
      //stroke('hsb(x, 40%, 100%)');
      //stroke(x/5, 100, 150-d/8);
      stroke(0, 0, 120-d/8);
      strokeWeight(2);

      if (mouseIsPressed) {
      strokeWeight(3);
    }

      push();
      translate(x, y);
      let a = atan2(mouseY - y, mouseX - x);
      rotate(a);

      line(10, 0, 10, 30);
      pop();

    }
  }

}


let couleur = ["#ebadad", "#eaccad", "#eaeaad", "#cceaad", "#adeaad", "#adeacc", "#adeaea", "#adccea", "#adadea", "#ccadea", "#ebadeb", "#ebadcc"];

const textContainer = document.querySelector('.text-container');
const spans = document.querySelectorAll('.hover-text span');

textContainer.addEventListener('mousemove', (e) => {
    const x = e.clientX - textContainer.getBoundingClientRect().left;
    const y = e.clientY - textContainer.getBoundingClientRect().top;
    
    spans.forEach((span, index) => {
        const spanX = span.getBoundingClientRect().left - textContainer.getBoundingClientRect().left;
        const spanY = span.getBoundingClientRect().top - textContainer.getBoundingClientRect().top;
        const distance = Math.sqrt(Math.pow(x - spanX, 2) + Math.pow(y - spanY, 2));
        
        // Ajustez la valeur ci-dessous pour définir la taille de la zone de survol
        const hoverAreaSize = 150;
        
        if (distance < hoverAreaSize) {
            span.style.color = couleur[index];
        } else {
            span.style.color = 'black'; // Rétablit la couleur initiale de la lettre
    
        }
    });
});