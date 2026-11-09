import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/burger-ingredient/burger-ingredient.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.module.css"
const __vite__css = ".burger-ingredient__container_cb11a {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.burger-ingredient__article_8dfcd {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 260px;\r\n  color: #ffff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.burger-ingredient__cost_9eb1d {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.burger-ingredient__text_2542a {\r\n  text-align: center;\r\n}\r\n\r\n.burger-ingredient__addButton_b9d1f {\r\n  justify-content: center;\r\n  width: 260px;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const container = "burger-ingredient__container_cb11a";
export const article = "burger-ingredient__article_8dfcd";
export const cost = "burger-ingredient__cost_9eb1d";
export const text = "burger-ingredient__text_2542a";
export const addButton = "burger-ingredient__addButton_b9d1f";
export default {
	container: container,
	article: article,
	cost: cost,
	text: text,
	addButton: addButton
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))