import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://l1k4skr.github.io',
    base: '/dist',
    integrations: [react(), tailwind()]
});