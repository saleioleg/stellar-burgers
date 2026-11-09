import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/profile-orders/profile-orders.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.module.css"
const __vite__css = ".profile-orders__menu_d4151 {\r\n  width: 320px;\r\n}\r\n\r\n.profile-orders__main_3fe35 {\r\n  display: flex;\r\n  width: 1240px;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.profile-orders__orders_5809a {\r\n  width: 100%;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const menu = "profile-orders__menu_d4151";
export const main = "profile-orders__main_3fe35";
export const orders = "profile-orders__orders_5809a";
export default {
	menu: menu,
	main: main,
	orders: orders
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))