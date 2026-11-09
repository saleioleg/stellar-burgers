import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/burger-constructor/burger-constructor.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.module.css"
const __vite__css = ".burger-constructor__burger_constructor_d6627 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 600px;\r\n  padding-bottom: 20px;\r\n  color: #f2f2f3;\r\n}\r\n\r\n.burger-constructor__elements_18bc2 {\r\n  min-height: 100px;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow-y: scroll;\r\n  list-style-type: none;\r\n}\r\n\r\n.burger-constructor__total_336ea {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.burger-constructor__cost_f2ada {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.burger-constructor__text_19a6c {\r\n  font-weight: normal;\r\n  font-size: 48px;\r\n  font-family: 'Iceland', serif;\r\n  font-style: normal;\r\n  line-height: 36px;\r\n}\r\n\r\n.burger-constructor__noBuns_daf90 {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  min-height: 80px;\r\n  margin-left: 44px;\r\n  padding: 16px 24px;\r\n  color: #f2f2f3;\r\n  font-size: 16px;\r\n  font-family: 'Jet Brains Mono', serif;\r\n  line-height: 24px;\r\n  background: var(--background-element);\r\n  border-radius: var(--common-border-radius-s);\r\n}\r\n\r\n.burger-constructor__noBunsTop_637df {\r\n  border-radius: var(--top-constructor-item-border-radius);\r\n}\r\n\r\n.burger-constructor__noBunsBottom_e26b6 {\r\n  border-radius: var(--bottom-constructor-item-border-radius);\r\n}\r\n\r\n.burger-constructor__element_372fd {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.burger-constructor__element_372fd:last-child {\r\n  margin-bottom: 0;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const burger_constructor = "burger-constructor__burger_constructor_d6627";
export const elements = "burger-constructor__elements_18bc2";
export const total = "burger-constructor__total_336ea";
export const cost = "burger-constructor__cost_f2ada";
export const text = "burger-constructor__text_19a6c";
export const noBuns = "burger-constructor__noBuns_daf90";
export const noBunsTop = "burger-constructor__noBunsTop_637df";
export const noBunsBottom = "burger-constructor__noBunsBottom_e26b6";
export const element = "burger-constructor__element_372fd";
export default {
	burger_constructor: burger_constructor,
	elements: elements,
	total: total,
	cost: cost,
	text: text,
	noBuns: noBuns,
	noBunsTop: noBunsTop,
	noBunsBottom: noBunsBottom,
	element: element
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))