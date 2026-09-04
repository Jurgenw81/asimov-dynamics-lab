import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({base:'/asimov-dynamics-lab/',plugins:[react()],build:{target:'esnext'}});
