import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/modal/modal.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/modal/modal.module.css"
const __vite__css = ".modal__modal_a2565 {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 9999;\r\n  margin: auto;\r\n  padding: 40px 40px 60px;\r\n  background-color: var(--background);\r\n  border-radius: 40px;\r\n  box-shadow:\r\n    0 24px 32px rgb(0 0 0 / 4%),\r\n    0 16px 24px rgb(0 0 0 / 4%),\r\n    0 4px 8px rgb(0 0 0 / 4%),\r\n    0 0 1px rgb(0 0 0 / 4%);\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.modal__header_23a6f {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 64px;\r\n}\r\n\r\n.modal__button_0f6b6 {\r\n  display: flex;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin-left: auto;\r\n  padding: 0;\r\n  background-color: rgb(0 0 0 / 0%);\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal__content_8fa19 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const modal = "modal__modal_a2565";
export const header = "modal__header_23a6f";
export const button = "modal__button_0f6b6";
export const content = "modal__content_8fa19";
export default {
	modal: modal,
	header: header,
	button: button,
	content: content
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))