import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/feed/feed.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.module.css"
const __vite__css = ".feed__containerMain_bb862 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 1240px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.feed__titleBox_c33e5 {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  max-width: 1240px;\r\n}\r\n\r\n.feed__main_e55aa {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 1240px;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.feed__columnOrders_c19d6 {\r\n  width: 608px;\r\n}\r\n\r\n.feed__columnInfo_be1a4 {\r\n  width: 580px;\r\n  overflow: hidden auto;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const containerMain = "feed__containerMain_bb862";
export const titleBox = "feed__titleBox_c33e5";
export const main = "feed__main_e55aa";
export const columnOrders = "feed__columnOrders_c19d6";
export const columnInfo = "feed__columnInfo_be1a4";
export default {
	containerMain: containerMain,
	titleBox: titleBox,
	main: main,
	columnOrders: columnOrders,
	columnInfo: columnInfo
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))