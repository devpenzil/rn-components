import { create } from "zustand";
import { authStore } from "./auth";
import { buckerStore } from "./bucket";
import { databaseStore } from "./database";
export const useStore = create((...a) => ({
  ...authStore(...a),
  ...buckerStore(...a),
  ...databaseStore(...a),
}));
