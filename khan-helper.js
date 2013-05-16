var c = document.querySelector('canvas#canvas');
var khanMethods = ['background', 'color', 'fill', 'noFill', 'noStroke', 'stroke', 'strokeWeight', 'image', 'abs', 'cos', 'log','pow','random','sin','tan','text','textFont', 'textSize', 'mouseIsPressed', 'bezier', 'ellipse','line','point','rect','triangle','keyCode','keyIsPressed'];
var pjs = new Processing(c, khanWrapper);
pjs.size(400,400);
