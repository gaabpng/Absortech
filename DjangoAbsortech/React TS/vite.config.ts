import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

<<<<<<< HEAD
  server: {
    allowedHosts: ['labrador-lucky-factually.ngrok-free.app'],
  }
})
=======
	server: {
		allowedHosts: ["labrador-lucky-factually.ngrok-free.app"],
	},
});
>>>>>>> 6340715b61eaa228991bdfc87eb5354707a7e704
