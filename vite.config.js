import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // <--- แก้เป็น './' เพื่อให้เรียกไฟล์ผ่าน relative path
});
