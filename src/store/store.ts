import { create } from "zustand";
import { authStore } from "./auth";
export const useStore = create((...a) => ({
  ...authStore(...a),
}));
