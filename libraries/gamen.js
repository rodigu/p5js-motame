// Game Manager Classes
class EventHandler{
  constructor(){
    this.events = [];
  }
}
class Control{

}

// Assets Classes
class GameAssets{
  constructor(sprite_sheet_ = null, sprite_width_ = -1, spacing_ = -1){
    this.sprites = [];
    if (sprite_sheet_ != null){
      if (sprite_width_ < 0) sprite_width_ = 16;
      if (spacing_ < 0) spacing_ = 1;
      this.sprite_sheet = loadImage(sprite_sheet_);
      this.sprite_width = sprite_width_;
      this.sheet_spacing = spacing_;
    }
    this.sounds = [];
  }
  addSound(id_, file_name_){
    this.sounds.push(new Sound(id_, file_name_));
  }
  addSprite(id_, file_name_){
    this.sprites.push(new Sprite(id_, file_name_));
  }
  getSoundIndex(id_){
    let counter;
    for (counter = 0; counter < this.sounds.length; counter++)
      if (this.sounds[counter].id == id_) return counter;
    return null;
  }
  getSpriteIndex(id_){
    let counter;
    for (counter = 0; counter < this.sprites.length; counter++)
      if (this.sprites[counter].id == id_) return counter;
    return null;
  }
  playSound(id_){
    this.sounds[this.getSoundIndex(id_)].file.play();
  }
  showSprite(id_, x_, y_){
    let index = getSpriteIndex(id_);
    image(this.sprites[index].file, x_, y_);
  }
  spriteFromSheet(spritex_, spritey_, x_, y_){
    image(this.sprite_sheet.get(spritey_*(this.sprite_width+this.sheet_spacing), spritex_*(this.sprite_width+this.sheet_spacing), this.sprite_width, this.sprite_width), x_, y_);
  }
}

class Sound{
  constructor(id_, file_name_){
    this.id = id_;
    this.file = loadSound(file_name_);
  }
}
class Sprite{
  constructor(id_, file_name_){
    this.id = id_;
    this.file = loadImage(file_name_);
  }
}

// Camera Classes
class Camera{
  constructor(){

  }
}

// UI Classes
class Menu{
  constructor(){

  }
}
class Button{
  constructor(id_, text_){

  }
}
class Text{

}
