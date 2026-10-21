// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://gifytech-website-bay.vercel.app',
    integrations: [
    mdx(),
    sitemap(),
    sanity({
        projectId: 'isowdapm',
        dataset: 'production',
        apiVersion: '2026-10-21',
        useCdn: true,
    }),
    ],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],
});