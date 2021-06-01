let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
centerX = canvas.width / 2;
centerY = canvas.height / 2;
c.translate(centerX, centerY);

let numPoints = 5000;
let turnFraction = 1.6180339;
let power = 450;


for (let i = 0; i < numPoints; i++) {
  let t = i / (numPoints - 1);
  let inclination = Math.acos(1 - 2 * t);
  let azimuth = 2 * Math.PI * turnFraction * i;
  let x = Math.sin(inclination) * Math.cos(azimuth);
  let y = Math.sin(inclination) * Math.sin(azimuth);
  let z = Math.cos(inclination)
  c.beginPath();
  c.arc(x * power, y * power , z, 0, Math.PI * 2, false);
  c.closePath();
  c.strokeStyle = 'white';
  c.stroke();
}
