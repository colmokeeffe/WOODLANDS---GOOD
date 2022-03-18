import { v4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import { JSONFile, Low } from "lowdb";

const db = new Low(new JSONFile("./src/models/json/woods.json"));
db.data = { woods: [] };

export const woodJsonStore = {
  async getAllWoods() {
    await db.read();
    return db.data.woods;
  },

  async addWood(categoryId, wood) {
    await db.read();
    wood._id = v4();
    wood.categoryid = categoryId;
    db.data.woods.push(wood);
    await db.write();
    return wood;
  },

  async getWoodsByCategoryId(id) {
    await db.read();
    return db.data.woods.filter((wood) => wood.categoryid === id);
  },

  async getWoodById(id) {
    await db.read();
    return db.data.woods.find((wood) => wood._id === id);
  },

  async deleteWood(id) {
    await db.read();
    const index = db.data.woods.findIndex((wood) => wood._id === id);
    db.data.woods.splice(index, 1);
    await db.write();
  },

  async deleteAllWoods() {
    db.data.woods = [];
    await db.write();
  },

  async updateWood(wood, updatedWood) {
    wood.title = updatedWood.title;
    wood.artist = updatedWood.artist;
    wood.duration = updatedWood.duration;
    await db.write();
  },
};
