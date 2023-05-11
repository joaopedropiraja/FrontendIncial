import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import jwtDecode from "jwt-decode";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      usuario: null,
      setToken: (token) => {
        const { usuario } = jwtDecode(token);
        set({ token, usuario });
      },
      setUsuario: (usuario) => set({ usuario }),
      clear: () => set({ token: null, usuario: null }),
    }),
    {
      name: "auth",
    }
  )
);
