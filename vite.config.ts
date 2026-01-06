import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Garante que o build gere caminhos relativos corretos
  base: './', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    // Garante que o arquivo de saída seja gerado corretamente na pasta dist
    outDir: 'dist',
    emptyOutDir: true,
  }
});
