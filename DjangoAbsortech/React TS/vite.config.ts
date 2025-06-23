
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 5173,
		allowedHosts: ['ec2-18-231-186-125.sa-east-1.compute.amazonaws.com'],
        },
})
