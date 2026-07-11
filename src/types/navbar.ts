export interface DropdownItem {
    label: string;
    href: string;
}

export interface NavigationItem {
    label: string;
    href?: string;
    children?: DropdownItem[];
}
