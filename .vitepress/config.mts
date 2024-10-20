import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Mockbukkit',

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Getting Started', link: 'docs/en/getting_started'},
        ],
        logo: '/images/mockbukkit_logo.png',

        sidebar: [
            {
                text: 'Introduction',
                collapsed: false,
                items: [
                    {text: 'Getting Started', link: 'docs/en/getting_started'},
                    {text: 'Writing your first test', link: 'docs/en/first_test'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Mockbukkit/Mockbukkit'},
            {icon: 'discord', link: 'https://discord.gg/Xunsn6D8MB'},
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2017-2024 Mockbukkit'
        }
    }
})
