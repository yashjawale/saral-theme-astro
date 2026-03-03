import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import icon from 'astro-icon'
import rehypeFigureTitle from 'rehype-figure-title'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs'


import react from '@astrojs/react'


// https://astro.build/config
export default defineConfig({
    site: 'https://yashjawale.github.io',
    base: '/saral-theme-astro',
    integrations: [mdx(), sitemap(), icon(), partytown({
        config: {
            forward: ['dataLayer.push'],
        },
		}, react(),), react()],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        remarkPlugins: [remarkReadingTime, remarkModifiedTime],
        rehypePlugins: [rehypeFigureTitle, rehypeAccessibleEmojis],
    },
})