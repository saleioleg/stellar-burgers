import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/feed-info/feed-info.module.css");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.module.css"
const __vite__css = ".feed-info__columns_f5369 {\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: flex-start;\r\n}\r\n\r\n.feed-info__column_5d03d {\r\n  display: inline;\r\n  min-width: 50%;\r\n}\r\n\r\n.feed-info__list_4780f {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  max-height: 180px;\r\n  margin: 0;\r\n  padding-left: 0;\r\n  overflow: hidden;\r\n  list-style: none;\r\n}\r\n\r\n.feed-info__title_667b9 {\r\n  margin: 0;\r\n  text-align: left;\r\n}\r\n\r\n.feed-info__list_item_ad0a5 {\r\n  min-width: 50%;\r\n  text-align: left;\r\n}\r\n\r\n.feed-info__content_077ed {\r\n  text-align: left;\r\n}\r\n"
__vite__updateStyle(__vite__id, __vite__css)
export const columns = "feed-info__columns_f5369";
export const column = "feed-info__column_5d03d";
export const list = "feed-info__list_4780f";
export const title = "feed-info__title_667b9";
export const list_item = "feed-info__list_item_ad0a5";
export const content = "feed-info__content_077ed";
export default {
	columns: columns,
	column: column,
	list: list,
	title: title,
	list_item: list_item,
	content: content
};

import.meta.hot.prune(() => __vite__removeStyle(__vite__id))