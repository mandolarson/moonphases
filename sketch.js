let moonPhase = 0; //Starting moon phase
let waning = false; //Starts at New Moon, so begins in waxing
let waxing = true; //Starts at New Moon, so begins in waxing
let color1 = 'black'; //Fill color of New Moon and shadow
let color2 = 'white'; //Color of Full Moon and sunlight
let size = 300; //Size of moon

function setup() {
  createCanvas(550, 550);
}

function draw() {
  background(0);
  translate(width / 2, height / 2); //Center the moon
  if(waxing == true && waning == false){
  drawWaxingMoon(size, color1, moonPhase); //Run Waxing Moon if phase is in waxing state
  }
  if(waxing == false && waning == true){
  drawWaningMoon(size, color2, moonPhase); //Draw Waning Moon if phase is in waning state
  }  
  filter(BLUR); //Blur entire sketch
}

function drawWaxingMoon(size, color1, moonPhase) {

    stroke(color2);
    ellipse(0, 0, size, size);

  
    let angle1 = map(moonPhase, 1, 15, 0, PI); //Calculate angle for crescent shape based on phase

  beginShape();
    fill(color2);
    for (let i = 0; i < 360; i++) {
      let angle1Rad = map(i, 0, 360, 0, TWO_PI);
      let x = cos(angle1Rad) * size / 2;
      let y = sin(angle1Rad) * size / 2;
      if(angle1Rad < angle1 || angle1Rad > TWO_PI - angle1) {
      vertex-(x, y);
      fill(color2); //Fill light from right side for phases 1 - 15 (full moon)
       }
      if (angle1Rad > angle1 && angle1Rad < TWO_PI - angle1) {
      vertex(x, y);
      fill(color1);
    endShape();      
    }
  }
}  

function drawWaningMoon(size, color2, moonPhase) {

    stroke(color2);
    ellipse(0, 0, size, size);
  
    let angle2 = map(moonPhase, 16, 30, 0, PI); //Calculate angle for crescent shape based on phase

  beginShape();
    fill(color2);
    for (let i = 0; i < 360; i++) {
      let angle2Rad = map(i, 0, 360, 0, TWO_PI);
      let x = cos(angle2Rad) * size / 2;
      let y = sin(angle2Rad) * size / 2;
      if(angle2Rad < angle2 || angle2Rad > TWO_PI - angle2) {
      vertex-(x, y);
      fill(color1); //Fill light from right side for phases 1 - 15 (full moon)
       }
      if (angle2Rad > angle2 && angle2Rad < TWO_PI - angle2) {
      vertex(x, y);
      fill(color2);
  endShape(); 
    }
  }
}  

function mouseClicked() {
  moonPhase = (moonPhase + 1) % 31; //Cycle through moon phases, 1 per click
    if(moonPhase <= 15){
    waxing = true;
    waning = false;
  }
  if(moonPhase > 15 && moonPhase < 30){
    waxing = false;
    waning = true;
  }
  let angle1 = map(moonPhase, 0, 30, 0, TWO_PI); //Calculate angle for light shape based on phase
  let angle2 = map(moonPhase, 0, 30, 0, TWO_PI); //Calculate angle for shadow shape based on phase
  print(moonPhase, waxing, waning, angle1, angle2);
}