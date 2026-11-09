import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/profile-menu/profile-menu.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.module.css"
const __vite__css = ".profile-menu__link_9dbb7 {\r\n  display: block;\r\n  width: 100%;\r\n  color: #8585ad;\r\n  text-decoration: none;\r\n}\r\n\r\n.profile-menu__link_active_9cfec {\r\n  color: #f2f2f3;\r\n}\r\n\r\n.profile-menu__button_77daa {\r\n  display: block;\r\n  color: #8585ad;\r\n  text-decoration: none;\r\n  background-color: unset;\r\n  border: none;\r\n}\r\n\r\n.profile-menu__button_77daa:hover {\r\n  cursor: pointer;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const link = "profile-menu__link_9dbb7";
export const link_active = "profile-menu__link_active_9cfec";
export const button = "profile-menu__button_77daa";
export default {
	link: link,
	link_active: link_active,
	button: button
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))