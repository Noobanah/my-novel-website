import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/my-novel-website/", // <--- เติมบรรทัดนี้ลงไป (ดูให้ตรงกับชื่อ Repo ของคุณ)
});
