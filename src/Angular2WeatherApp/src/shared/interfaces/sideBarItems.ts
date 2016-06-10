
export interface SideBarItems {
    icon?: string;
    link: string;
    name?: string;
    logo?: boolean;
    img?: string;
    dropdown: boolean;
    dropdownItems?: Array<SubMenu>;
}

interface SubMenu {
    icon: string;
    link: string;
    name:string;
}