type NavItemStyle = {
    text: ComputedRef<string>,
    underbar: ComputedRef<string>,
}

type NavItemProperty = {
    name: string,
    path: string,
    isSelected: ComputedRef<boolean>,
    isHovered: boolean,
}

type NavItem = {
    property: NavItemProperty,
    style: NavItemStyle,
    projects: NavItemStyle,
    works: NavItemStyle,
    blog: NavItemStyle,
    contact: NavItemStyle,
    resume: NavItemStyle,
}

export interface NavItemProperties {
    mode: ComputedRef<"whitemode"|"darkmode">;
    currentPage: ComputedRef<string>,
    background: ComputedRef<string>,
    searchArea: boolean,
    searchAreaBackground: ComputedRef<string>,
    navbarAreaUnderbarBackground: ComputedRef<string>,
    slidebarBackground: ComputedRef<string>,
    navItems: {
        home: NavItem,
        profile: NavItem,
    }
}