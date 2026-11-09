import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/burger-ingredients/burger-ingredients.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.module.css"
const __vite__css = ".burger-ingredients__burger_ingredients_1afc4 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 600px;\r\n  color: #f2f2f3;\r\n  font-family: 'Jet Brains Mono', serif;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.burger-ingredients__content_5c1bf {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.burger-ingredients__menu_80409 {\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  list-style-type: none;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const burger_ingredients = "burger-ingredients__burger_ingredients_1afc4";
export const content = "burger-ingredients__content_5c1bf";
export const menu = "burger-ingredients__menu_80409";
export default {
	burger_ingredients: burger_ingredients,
	content: content,
	menu: menu
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))