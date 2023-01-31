import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload(): void {
    this.load.image("tiles", "../assets/dungeon_tiles_extruded.png");
    this.load.tilemapTiledJSON("dungeon", "assets/dungeon-01.json");

    this.load.atlas("faune", "assets/fauna.png", "assets/fauna.json");
    this.load.atlas("lizard", "assets/lizard.png", "assets/lizard.json");
    this.load.atlas("treasure", "assets/treasure.png", "assets/treasure.json");

    this.load.image("ui-heart-empty", "assets/ui_heart_empty.png");
    this.load.image("ui-heart-full", "assets/ui_heart_full.png");

    this.load.image("knife", "assets/weapon_knife.png");
  }

  create() {
    this.scene.start("game");
  }
}
