import { create } from "zustand";

interface UiState {
  isSearchOpen: boolean;
  isFilterOpen: boolean;
  isBurgerOpen: boolean;

  toggleSearch: (open?: boolean) => void;
  toggleFilter: (open?: boolean) => void;
  toggleBurger: (open?: boolean) => void;
  closeAll: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isSearchOpen: false,
  isFilterOpen: false,
  isBurgerOpen: false,

  toggleSearch: (open) =>
    set((state) => {
      const nextState = open ?? !state.isSearchOpen;
      return {
        isSearchOpen: nextState,
        isFilterOpen: nextState ? false : state.isFilterOpen,
        isBurgerOpen: nextState ? false : state.isBurgerOpen,
      };
    }),

  toggleFilter: (open) =>
    set((state) => {
      const nextState = open ?? !state.isFilterOpen;
      return {
        isFilterOpen: nextState,
        isSearchOpen: nextState ? false : state.isSearchOpen,
        isBurgerOpen: nextState ? false : state.isBurgerOpen,
      };
    }),

  toggleBurger: (open) =>
    set((state) => {
      const nextState = open ?? !state.isBurgerOpen;
      return {
        isBurgerOpen: nextState,
        isSearchOpen: nextState ? false : state.isSearchOpen,
        isFilterOpen: nextState ? false : state.isFilterOpen,
      };
    }),

  closeAll: () =>
    set({ isSearchOpen: false, isFilterOpen: false, isBurgerOpen: false }),
}));
