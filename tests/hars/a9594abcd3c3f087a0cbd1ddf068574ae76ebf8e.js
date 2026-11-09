import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/preloader/preloader.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/preloader/preloader.module.css"
const __vite__css = ".preloader__preloader_8f1e2 {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.preloader__preloader_circle_00a56 {\r\n  position: relative;\r\n  inset: 0;\r\n  display: block;\r\n  width: 74px;\r\n  height: 74px;\r\n  margin: auto;\r\n  border: 1px solid;\r\n  border-color: #d1d2d6 #9fa0a5 #626368 #1a1b22;\r\n  border-radius: 50%;\r\n  animation: preloader__spin_ec528 0.75s infinite linear;\r\n}\r\n\r\n@keyframes preloader__spin_ec528 {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const preloader = "preloader__preloader_8f1e2";
export const preloader_circle = "preloader__preloader_circle_00a56";
export const spin = "preloader__spin_ec528";
export default {
	preloader: preloader,
	preloader_circle: preloader_circle,
	spin: spin
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))