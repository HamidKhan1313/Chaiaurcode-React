import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@chai': '/absolute/path/to/vite-project/src/chai',
    },
  },
});


