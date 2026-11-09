import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/modal-overlay/modal-overlay.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/modal-overlay/modal-overlay.module.css"
const __vite__css = ".modal-overlay__overlay_72534 {\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: 2;\r\n  background-color: rgb(0 0 0 / 60%);\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const overlay = "modal-overlay__overlay_72534";
export default {
	overlay: overlay
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))