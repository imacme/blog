module.exports = {
    title: 'Hello VuePress',
    description: 'blog.doacme.com',
    base: '/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/server/' },
            { text: 'blog', link: 'http://blog.doacme.com' },
        ],
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/server/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/linux.html', '/nginx'
                ]
              },
        ],
    },
}
