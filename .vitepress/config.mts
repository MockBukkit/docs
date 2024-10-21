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
        editLink: {
            pattern: "https://github.com/MockBukkit/docs/tree/main/:path",
            text: "Edit this page on Github!"
        },
        sidebar: [
            {
                text: 'Introduction',
                collapsed: false,
                items: [
                    {text: 'Getting Started', link: 'docs/en/introduction/getting_started'},
                    {text: 'Writing your first test', link: 'docs/en/introduction/first_test'},
                ]
            },
            {
                text: "Entities",
                collapsed: false,
                items: [
                    {text: 'Entities', link: 'docs/en/entities/entity'},
                    {text: 'Player', link: 'docs/en/entities/player'}
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
