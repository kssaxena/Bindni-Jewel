import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.SERVICE_ID": JSON.stringify(env.SERVICE_ID),
      "process.env.TEMPLATE_ID": JSON.stringify(env.TEMPLATE_ID),
      "process.env.PUBLIC_ID": JSON.stringify(env.PUBLIC_ID),
    },
    plugins: [react(), tailwindcss()],
  };
});
