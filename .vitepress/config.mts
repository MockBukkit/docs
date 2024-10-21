import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Mockbukkit',

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Getting Started', link: 'docs/en/user_guide/introduction/getting_started'},
            {text: 'Contribution Guides', link: 'docs/en/contribution/maintainers/pr_guide'},
        ],
        logo: '/images/mockbukkit_logo.png',
        editLink: {
            pattern: "https://github.com/MockBukkit/docs/tree/main/:path",
            text: "Edit this page on Github!"
        },
        search: {
            provider: "local"
        },
        lastUpdated: true,
        sidebar: {
            '/docs/en/user_guide': [
                {
                    text: 'Introduction',
                    collapsed: false,
                    items: [
                        {text: 'Getting Started', link: 'docs/en/user_guide/introduction/getting_started'},
                        {text: 'Writing your first test', link: 'docs/en/user_guide/introduction/first_test'},
                        {text: 'Create a World Mock',link: 'docs/en/user_guide/introduction/mock_world.md'},
                    ]
                },
                {
                    text: "Entities",
                    collapsed: false,
                    items: [
                        {text: 'Entities', link: 'docs/en/user_guide/entities/entity'},
                        {text: 'Player', link: 'docs/en/user_guide/entities/player'},
                        {text: 'MessageTarget', link: 'docs/en/user_guide/entities/message_target'},
                    ]
                },

                {
                    text: "Advanced Topics",
                    collapsed: false,
                    items: [
                        {text: 'Scheduler', link: 'docs/en/user_guide/advanced/scheduler'},
                        {text: 'Events', link: 'docs/en/user_guide/advanced/events'},
                        {text: 'Custom ServerMock', link: 'docs/en/user_guide/advanced/custom_server_mock'},
                        {text: 'Adventure', link: 'docs/en/user_guide/advanced/adventure'}
                    ]
                }
            ],
            '/docs/en/contribution': [
                {
                    text: "For Maintainers",
                    collapsed: false,
                    items: [
                        {text: "Maintainer PR Guide", link: 'docs/en/contribution/maintainers/pr_guide'},
                    ]
                }
            ]
        },

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
