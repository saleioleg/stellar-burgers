import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/ingredient-details/ingredient-details.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.module.css"
const __vite__css = ".ingredient-details__content_9beda {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 520px;\r\n  margin: 0 60px;\r\n  text-align: center;\r\n}\r\n\r\n.ingredient-details__nutritional_values_57600 {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #8585ad;\r\n  list-style-type: none;\r\n}\r\n\r\n.ingredient-details__nutritional_value_e8630 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const content = "ingredient-details__content_9beda";
export const nutritional_values = "ingredient-details__nutritional_values_57600";
export const nutritional_value = "ingredient-details__nutritional_value_e8630";
export default {
	content: content,
	nutritional_values: nutritional_values,
	nutritional_value: nutritional_value
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))