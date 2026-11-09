import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/order-details/order-details.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.module.css"
const __vite__css = ".order-details__img_5dfa7 {\r\n  margin: 61px 0;\r\n}\r\n\r\n.order-details__title_70390 {\r\n  text-shadow:\r\n    0 0 16px rgb(51 51 255 / 25%),\r\n    0 0 8px rgb(51 51 255 / 25%),\r\n    0 4px 32px rgb(51 51 255 / 50%);\r\n}\r\n\r\n.order-details__text_57a12 {\r\n  color: #8585ad;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const img = "order-details__img_5dfa7";
export const title = "order-details__title_70390";
export const text = "order-details__text_57a12";
export default {
	img: img,
	title: title,
	text: text
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))