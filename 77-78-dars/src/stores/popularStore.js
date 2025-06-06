import { create } from "zustand";

const popularStore = create((set) => ({
  movie: [],
  tv: [],
  getPopular: (data, type) => {
    set({ [type]: data });
  },
}));
export default popularStore;
