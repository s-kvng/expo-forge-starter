export const TABS = [
     {
        name: 'index',
        label: 'Home',
        icon: {
            sf: 'house',
            selected: 'house.fill',
            md: 'home',
        },
    },
    {
        name: 'explore',
        label: 'Explore',
        icon: {
            sf: 'safari',
            selected: 'safari.fill',
            md: 'explore',
        },
    },
    {
        name: 'theme',
        label: 'Theme',
        icon: {
            sf: 'circle',
            selected: 'circle.fill',
            md: 'circle',
        },
    }
] as const;