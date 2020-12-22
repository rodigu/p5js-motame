var gameScreen;
var gameAssets;
var gameCamera = new Camera();

// TODO List
// --Sound--
//    >Add Sound Channels class
//      *Require a channel for playSound(id_, channel_)
//      *Avoid overflow of sound
//


function setup(){
  noSmooth();
  gameAssets = new GameAssets('assets/tileset_legacy.png', 16);
  gameScreen = createCanvas(500,500);
  gameAssets.addSound('save','assets/save.wav');
  masterVolume(.2);
}

function draw(){
  background(100);
  gameAssets.spriteFromSheet(0,31,mouseX,mouseY);
  if (mouseIsPressed) gameAssets.playSound('save');
}
