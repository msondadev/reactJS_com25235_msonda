import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/etapa2/",
  optimizeDeps: {
    include: ['@fortawesome/fontawesome-free']
  },
  server: {
    hmr: {
      overlay: true // Podés ponerlo en false si querés desactivar el overlay de errores
    }
  },
  css: {
    preprocessorOptions: {
      // Si usás SCSS, podés configurar variables globales acá
      scss: {
        additionalData: `@import "src/styles/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src' // Te permite usar @ como alias para la carpeta src
    }
  }
});