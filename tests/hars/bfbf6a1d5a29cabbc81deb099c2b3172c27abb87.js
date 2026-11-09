import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/order-card/order-card.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.module.css"
const __vite__css = ".order-card__ingredients_02604 {\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.order-card__order_a471d {\r\n  display: block;\r\n  box-sizing: border-box;\r\n  min-width: 576px;\r\n  color: unset;\r\n  text-decoration: none;\r\n  background-color: #1c1c21;\r\n  border-radius: 40px;\r\n}\r\n\r\n.order-card__order_info_0fe67 {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.order-card__order_name_3cc18 {\r\n  text-align: left;\r\n}\r\n\r\n.order-card__order_content_823b4 {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.order-card__order_total_020fd {\r\n  vertical-align: top;\r\n}\r\n\r\n.order-card__img_wrap_90622 {\r\n  position: relative;\r\n  width: 62px;\r\n  height: 62px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  background-color: #1c1c21;\r\n  border: #801ab3 solid 2px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.order-card__img_wrap_90622:nth-child(n + 2) {\r\n  position: relative;\r\n  right: 25px;\r\n}\r\n\r\n.order-card__img_4893e {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 112px;\r\n  height: 56px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.order-card__remains_983f5 {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const ingredients = "order-card__ingredients_02604";
export const order = "order-card__order_a471d";
export const order_info = "order-card__order_info_0fe67";
export const order_name = "order-card__order_name_3cc18";
export const order_content = "order-card__order_content_823b4";
export const order_total = "order-card__order_total_020fd";
export const img_wrap = "order-card__img_wrap_90622";
export const img = "order-card__img_4893e";
export const remains = "order-card__remains_983f5";
export default {
	ingredients: ingredients,
	order: order,
	order_info: order_info,
	order_name: order_name,
	order_content: order_content,
	order_total: order_total,
	img_wrap: img_wrap,
	img: img,
	remains: remains
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))