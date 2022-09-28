const menuItems = [
    {
        name: "database",
        title: 'БАЗА ДАННЫХ',
        items: [
            {
                image: 'post-list.svg',
                name: 'post_list',
                text: 'Список постов',
                linkname: 'postListRoute'
            }
        ]
    },
    {
        name: "attraction",
        title: 'ПРИВЛЕЧЕНИЕ',
        items: [
            {
                image: 'passlink.svg',
                name: 'passlink',
                text: 'Пасслинк',
                linkname: 'passlinkRoute'
            },
            {
                image: 'ad.svg',
                name: 'promotional_materials',
                text: 'Рекламные материалы',
                linkname: 'promotionalMaterialsRoute'
            }
        ]
    },
    {
        name: "settings",
        title: 'НАСТРОЙКИ',
        items: [
            {
                image: 'settings.svg',
                name: 'settings',
                text: 'Настройки',
                linkname: 'settingsRoute'
            }
        ]
    }
]

export default menuItems