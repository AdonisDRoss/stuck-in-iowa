// Add to preload()
this.load.spritesheet("farmer_walk", "assets/zombies/farmer_walker_walk.png", {
  frameWidth: 256,
  frameHeight: 256
});

this.load.spritesheet("farmer_attack", "assets/zombies/farmer_walker_attack.png", {
  frameWidth: 256,
  frameHeight: 256
});

this.load.spritesheet("farmer_ko", "assets/zombies/farmer_walker_ko.png", {
  frameWidth: 256,
  frameHeight: 256
});

// Add to create()
this.anims.create({
  key: "farmer_walk_down",
  frames: this.anims.generateFrameNumbers("farmer_walk", { start: 0, end: 5 }),
  frameRate: 6,
  repeat: -1
});

this.anims.create({
  key: "farmer_walk_right",
  frames: this.anims.generateFrameNumbers("farmer_walk", { start: 6, end: 11 }),
  frameRate: 6,
  repeat: -1
});

this.anims.create({
  key: "farmer_walk_left",
  frames: this.anims.generateFrameNumbers("farmer_walk", { start: 12, end: 17 }),
  frameRate: 6,
  repeat: -1
});

this.anims.create({
  key: "farmer_walk_up",
  frames: this.anims.generateFrameNumbers("farmer_walk", { start: 18, end: 23 }),
  frameRate: 6,
  repeat: -1
});

this.anims.create({
  key: "farmer_attack_down",
  frames: this.anims.generateFrameNumbers("farmer_attack", { start: 0, end: 5 }),
  frameRate: 8,
  repeat: 0
});

this.anims.create({
  key: "farmer_ko",
  frames: this.anims.generateFrameNumbers("farmer_ko", { start: 0, end: 11 }),
  frameRate: 8,
  repeat: 0
});
