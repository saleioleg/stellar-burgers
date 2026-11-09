import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/order-info/order-info.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.module.css"
const __vite__css = ".order-info__wrap_22239 {\r\n  width: 640px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.order-info__header_e2861 {\r\n  margin: 0;\r\n}\r\n\r\n.order-info__img_wrap_5b757 {\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n  background: linear-gradient(63.18deg, #801ab3 0%, #4c4cff 100%);\r\n  border-radius: 50%;\r\n}\r\n\r\n.order-info__border_7bb69 {\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  width: 60px;\r\n  height: 60px;\r\n  text-align: center;\r\n  background-color: #1c1c21;\r\n  border-radius: 50%;\r\n}\r\n\r\n.order-info__img_3e675 {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 112px;\r\n  height: 56px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.order-info__item_74aaa {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.order-info__quantity_bca84 {\r\n  margin-left: auto;\r\n}\r\n\r\n.order-info__list_6ea37 {\r\n  max-height: 320px;\r\n  padding: 0;\r\n  overflow-y: auto;\r\n  list-style: none;\r\n}\r\n\r\n.order-info__list_6ea37::-webkit-scrollbar {\r\n  width: 8px;\r\n  background-color: #2f2f37;\r\n}\r\n\r\n.order-info__list_6ea37::-webkit-scrollbar-thumb {\r\n  background-color: #8585ad;\r\n}\r\n\r\n.order-info__bottom_247e3 {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.order-info__total_b6e06 {\r\n  margin-left: auto;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const wrap = "order-info__wrap_22239";
export const header = "order-info__header_e2861";
export const img_wrap = "order-info__img_wrap_5b757";
export const border = "order-info__border_7bb69";
export const img = "order-info__img_3e675";
export const item = "order-info__item_74aaa";
export const quantity = "order-info__quantity_bca84";
export const list = "order-info__list_6ea37";
export const bottom = "order-info__bottom_247e3";
export const total = "order-info__total_b6e06";
export default {
	wrap: wrap,
	header: header,
	img_wrap: img_wrap,
	border: border,
	img: img,
	item: item,
	quantity: quantity,
	list: list,
	bottom: bottom,
	total: total
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))