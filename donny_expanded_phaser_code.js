// Donny expanded sprite set v8 - Phaser 3 load + animation code
// Row order: 0 DOWN, 1 UP, 2 LEFT, 3 RIGHT

function preloadDonnyExpandedSprites(scene) {
  scene.load.spritesheet("donny_run", "assets/characters/donny_run_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_jump", "assets/characters/donny_jump_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_idle", "assets/characters/donny_idle_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_action", "assets/characters/donny_action_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_pickup", "assets/characters/donny_pickup_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_use", "assets/characters/donny_use_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_reaction", "assets/characters/donny_reaction_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_ko", "assets/characters/donny_ko_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_sleep", "assets/characters/donny_sleep_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_drive", "assets/characters/donny_drive_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_sit", "assets/characters/donny_sit_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_slide", "assets/characters/donny_slide_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_shoot_pistol", "assets/characters/donny_shoot_pistol_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_shoot_rifle", "assets/characters/donny_shoot_rifle_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_throw_item", "assets/characters/donny_throw_item_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_melee_light", "assets/characters/donny_melee_light_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_melee_heavy", "assets/characters/donny_melee_heavy_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_block", "assets/characters/donny_block_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_dodge", "assets/characters/donny_dodge_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_crawl", "assets/characters/donny_crawl_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_carry", "assets/characters/donny_carry_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_talk", "assets/characters/donny_talk_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
  scene.load.spritesheet("donny_climb", "assets/characters/donny_climb_4dir_128x128_phaser.png", { frameWidth: 128, frameHeight: 128 });
}

function createDonnyExpandedAnims(scene) {
  const make = (key, sheet, start, end, frameRate, repeat) => {
    if (!scene.anims.exists(key)) {
      scene.anims.create({
        key,
        frames: scene.anims.generateFrameNumbers(sheet, { start, end }),
        frameRate,
        repeat
      });
    }
  };
  make("run_down", "donny_run", 0, 7, 12, -1);
  make("run_up", "donny_run", 8, 15, 12, -1);
  make("run_left", "donny_run", 16, 23, 12, -1);
  make("run_right", "donny_run", 24, 31, 12, -1);
  make("jump_down", "donny_jump", 0, 7, 8, 0);
  make("jump_up", "donny_jump", 8, 15, 8, 0);
  make("jump_left", "donny_jump", 16, 23, 8, 0);
  make("jump_right", "donny_jump", 24, 31, 8, 0);
  make("idle_down", "donny_idle", 0, 7, 4, -1);
  make("idle_up", "donny_idle", 8, 15, 4, -1);
  make("idle_left", "donny_idle", 16, 23, 4, -1);
  make("idle_right", "donny_idle", 24, 31, 4, -1);
  make("action_down", "donny_action", 0, 7, 8, 0);
  make("action_up", "donny_action", 8, 15, 8, 0);
  make("action_left", "donny_action", 16, 23, 8, 0);
  make("action_right", "donny_action", 24, 31, 8, 0);
  make("pickup_down", "donny_pickup", 0, 7, 8, 0);
  make("pickup_up", "donny_pickup", 8, 15, 8, 0);
  make("pickup_left", "donny_pickup", 16, 23, 8, 0);
  make("pickup_right", "donny_pickup", 24, 31, 8, 0);
  make("use_down", "donny_use", 0, 7, 8, 0);
  make("use_up", "donny_use", 8, 15, 8, 0);
  make("use_left", "donny_use", 16, 23, 8, 0);
  make("use_right", "donny_use", 24, 31, 8, 0);
  make("reaction_down", "donny_reaction", 0, 7, 8, 0);
  make("reaction_up", "donny_reaction", 8, 15, 8, 0);
  make("reaction_left", "donny_reaction", 16, 23, 8, 0);
  make("reaction_right", "donny_reaction", 24, 31, 8, 0);
  make("ko_down", "donny_ko", 0, 7, 7, 0);
  make("ko_up", "donny_ko", 8, 15, 7, 0);
  make("ko_left", "donny_ko", 16, 23, 7, 0);
  make("ko_right", "donny_ko", 24, 31, 7, 0);
  make("sleep_down", "donny_sleep", 0, 7, 4, -1);
  make("sleep_up", "donny_sleep", 8, 15, 4, -1);
  make("sleep_left", "donny_sleep", 16, 23, 4, -1);
  make("sleep_right", "donny_sleep", 24, 31, 4, -1);
  make("drive_down", "donny_drive", 0, 7, 6, 0);
  make("drive_up", "donny_drive", 8, 15, 6, 0);
  make("drive_left", "donny_drive", 16, 23, 6, 0);
  make("drive_right", "donny_drive", 24, 31, 6, 0);
  make("sit_down", "donny_sit", 0, 7, 6, 0);
  make("sit_up", "donny_sit", 8, 15, 6, 0);
  make("sit_left", "donny_sit", 16, 23, 6, 0);
  make("sit_right", "donny_sit", 24, 31, 6, 0);
  make("slide_down", "donny_slide", 0, 7, 10, 0);
  make("slide_up", "donny_slide", 8, 15, 10, 0);
  make("slide_left", "donny_slide", 16, 23, 10, 0);
  make("slide_right", "donny_slide", 24, 31, 10, 0);
  make("shoot_pistol_down", "donny_shoot_pistol", 0, 7, 10, 0);
  make("shoot_pistol_up", "donny_shoot_pistol", 8, 15, 10, 0);
  make("shoot_pistol_left", "donny_shoot_pistol", 16, 23, 10, 0);
  make("shoot_pistol_right", "donny_shoot_pistol", 24, 31, 10, 0);
  make("shoot_rifle_down", "donny_shoot_rifle", 0, 7, 10, 0);
  make("shoot_rifle_up", "donny_shoot_rifle", 8, 15, 10, 0);
  make("shoot_rifle_left", "donny_shoot_rifle", 16, 23, 10, 0);
  make("shoot_rifle_right", "donny_shoot_rifle", 24, 31, 10, 0);
  make("throw_item_down", "donny_throw_item", 0, 7, 10, 0);
  make("throw_item_up", "donny_throw_item", 8, 15, 10, 0);
  make("throw_item_left", "donny_throw_item", 16, 23, 10, 0);
  make("throw_item_right", "donny_throw_item", 24, 31, 10, 0);
  make("melee_light_down", "donny_melee_light", 0, 7, 14, 0);
  make("melee_light_up", "donny_melee_light", 8, 15, 14, 0);
  make("melee_light_left", "donny_melee_light", 16, 23, 14, 0);
  make("melee_light_right", "donny_melee_light", 24, 31, 14, 0);
  make("melee_heavy_down", "donny_melee_heavy", 0, 7, 10, 0);
  make("melee_heavy_up", "donny_melee_heavy", 8, 15, 10, 0);
  make("melee_heavy_left", "donny_melee_heavy", 16, 23, 10, 0);
  make("melee_heavy_right", "donny_melee_heavy", 24, 31, 10, 0);
  make("block_down", "donny_block", 0, 7, 8, 0);
  make("block_up", "donny_block", 8, 15, 8, 0);
  make("block_left", "donny_block", 16, 23, 8, 0);
  make("block_right", "donny_block", 24, 31, 8, 0);
  make("dodge_down", "donny_dodge", 0, 7, 12, 0);
  make("dodge_up", "donny_dodge", 8, 15, 12, 0);
  make("dodge_left", "donny_dodge", 16, 23, 12, 0);
  make("dodge_right", "donny_dodge", 24, 31, 12, 0);
  make("crawl_down", "donny_crawl", 0, 7, 8, -1);
  make("crawl_up", "donny_crawl", 8, 15, 8, -1);
  make("crawl_left", "donny_crawl", 16, 23, 8, -1);
  make("crawl_right", "donny_crawl", 24, 31, 8, -1);
  make("carry_down", "donny_carry", 0, 5, 8, -1);
  make("carry_up", "donny_carry", 6, 11, 8, -1);
  make("carry_left", "donny_carry", 12, 17, 8, -1);
  make("carry_right", "donny_carry", 18, 23, 8, -1);
  make("talk_down", "donny_talk", 0, 5, 8, -1);
  make("talk_up", "donny_talk", 6, 11, 8, -1);
  make("talk_left", "donny_talk", 12, 17, 8, -1);
  make("talk_right", "donny_talk", 18, 23, 8, -1);
  make("climb_down", "donny_climb", 0, 7, 10, -1);
  make("climb_up", "donny_climb", 8, 15, 10, -1);
  make("climb_left", "donny_climb", 16, 23, 10, -1);
  make("climb_right", "donny_climb", 24, 31, 10, -1);
}

function playDonnyKO(sprite, direction = "down") {
  const corpseFrames = { down: 7, up: 15, left: 23, right: 31 };
  const animKey = `ko_${direction}`;
  sprite.setTexture("donny_ko");
  sprite.play(animKey);
  sprite.once(`animationcomplete-${animKey}`, () => {
    sprite.setFrame(corpseFrames[direction] ?? 7);
    sprite.anims.stop();
  });
}