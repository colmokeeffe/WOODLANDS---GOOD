import { userJsonStore } from "./json/user-json-store.js";
import { categoryJsonStore } from "./json/category-json-store.js";
import { woodJsonStore } from "./json/wood-json-store.js";

export const db = {
  userStore: null,
  categoryStore: null,
  woodStore: null,

  init() {
    this.userStore = userJsonStore;
    this.categoryStore = categoryJsonStore;
    this.woodStore = woodJsonStore;
  },
};
