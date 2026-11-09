import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/constructor-page/constructor-page.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.module.css"
const __vite__css = ".constructor-page__containerMain_d3f40 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 1240px;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.constructor-page__title_e4ee7 {\r\n  width: 100%;\r\n  max-width: 1260px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.constructor-page__main_f88a3 {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const containerMain = "constructor-page__containerMain_d3f40";
export const title = "constructor-page__title_e4ee7";
export const main = "constructor-page__main_f88a3";
export default {
	containerMain: containerMain,
	title: title,
	main: main
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))