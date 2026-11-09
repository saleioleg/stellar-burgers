import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/profile/profile.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.module.css"
const __vite__css = ".common__container_98dae {\r\n  display: flex;\r\n  width: 100%;\r\n  max-width: 1240px;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}.common__wrapCenter_6fa84 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 480px;\r\n  margin: auto;\r\n}.common__form_33156 {\r\n  width: 100%;\r\n}.common__form_33156 div {\r\n  width: 100%;\r\n  text-align: right;\r\n}.common__button_8992c {\r\n  display: flex;\r\n  justify-content: center;\r\n}.common__question_31b76 {\r\n  color: #8585ad;\r\n}.common__link_c314f {\r\n  color: #4c4cff;\r\n  text-decoration: none;\r\n}.common__error_47794 {\r\n  color: #f00;\r\n  text-align: center;\r\n}\r\n\r\n.profile__container_e9cdd {\r\n}\r\n\r\n.profile__menu_d4ec7 {\r\n  width: 320px;\r\n}\r\n\r\n.profile__form_cc4b4 {\r\n  max-width: 480px;\r\n}\r\n\r\n.profile__error_c1616 {\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const container = "profile__container_e9cdd common__container_98dae";
export const menu = "profile__menu_d4ec7";
export const form = "profile__form_cc4b4 common__form_33156";
export const error = "profile__error_c1616 common__error_47794";
export default {
	container: container,
	menu: menu,
	form: form,
	error: error
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))