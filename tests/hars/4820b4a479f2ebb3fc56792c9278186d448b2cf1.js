import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/app-header/app-header.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.module.css"
const __vite__css = ".app-header__header_ca735 {\r\n  background-color: var(--background);\r\n}\r\n\r\n.app-header__menu_4af65 {\r\n  display: flex;\r\n  align-items: center;\r\n  max-width: 1240px;\r\n  height: 56px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.app-header__menu_part_left_5bc11 {\r\n  display: flex;\r\n  flex-basis: 35%;\r\n}\r\n\r\n.app-header__link_ea1f0 {\r\n  display: flex;\r\n  color: var(--text-inactive-color);\r\n  text-decoration: none;\r\n}\r\n\r\n.app-header__link_active_8a044 {\r\n  color: var(--text-primary-color);\r\n}\r\n\r\n.app-header__link_position_last_9d9d7 {\r\n  display: flex;\r\n  flex-basis: 35%;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.app-header__logo_09f83 {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const header = "app-header__header_ca735";
export const menu = "app-header__menu_4af65";
export const menu_part_left = "app-header__menu_part_left_5bc11";
export const link = "app-header__link_ea1f0";
export const link_active = "app-header__link_active_8a044";
export const link_position_last = "app-header__link_position_last_9d9d7";
export const logo = "app-header__logo_09f83";
export default {
	header: header,
	menu: menu,
	menu_part_left: menu_part_left,
	link: link,
	link_active: link_active,
	link_position_last: link_position_last,
	logo: logo
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))