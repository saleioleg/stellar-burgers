import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/order-details/order-details.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import doneImg from "/src/images/done.svg?import";
import styles from "/src/components/ui/order-details/order-details.module.css";
export const OrderDetailsUI = ({
  orderNumber
}) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV("h2", { className: `${styles.title} text text_type_digits-large mt-2 mb-4`, children: orderNumber }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-medium", children: "идентификатор заказа" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("img", { className: styles.img, src: doneImg, alt: "изображение статуса заказа." }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default mb-1", children: "Ваш заказ начали готовить" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("p", { className: `${styles.text} text text_type_main-default`, children: "Дождитесь готовности на орбитальной станции" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx",
  lineNumber: 11,
  columnNumber: 1
}, this);
_c = OrderDetailsUI;
var _c;
$RefreshReg$(_c, "OrderDetailsUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/order-details/order-details.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVUUsbUJBQ0UsY0FERjtBQVZGLE9BQU9BLGFBQWE7QUFLcEIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLGlCQUFpQkEsQ0FBQztBQUFBLEVBQzdCQztBQUNtQixNQUNuQixtQ0FDRTtBQUFBLHlCQUFDLFFBQUcsV0FBVyxHQUFHRixPQUFPRyxLQUFLLDBDQUMzQkQseUJBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQUEsRUFDQSx1QkFBQyxPQUFFLFdBQVUsOEJBQTZCLG9DQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThEO0FBQUEsRUFDOUQsdUJBQUMsU0FBSSxXQUFXRixPQUFPSSxLQUFLLEtBQUtMLFNBQVMsS0FBSSxpQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEyRTtBQUFBLEVBQzNFLHVCQUFDLE9BQUUsV0FBVSxvQ0FBbUMseUNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBeUU7QUFBQSxFQUN6RSx1QkFBQyxPQUFFLFdBQVcsR0FBR0MsT0FBT0ssSUFBSSxnQ0FBK0IsMkRBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUFBLEtBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVVBO0FBQ0FDLEtBZFdMO0FBQWMsSUFBQUs7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbImRvbmVJbWciLCJzdHlsZXMiLCJPcmRlckRldGFpbHNVSSIsIm9yZGVyTnVtYmVyIiwidGl0bGUiLCJpbWciLCJ0ZXh0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsib3JkZXItZGV0YWlscy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvbmVJbWcgZnJvbSAnQC9pbWFnZXMvZG9uZS5zdmcnO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyRGV0YWlsc1VJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuaW1wb3J0IHR5cGUgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vb3JkZXItZGV0YWlscy5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IE9yZGVyRGV0YWlsc1VJID0gKHtcbiAgb3JkZXJOdW1iZXIsXG59OiBPcmRlckRldGFpbHNVSVByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQgPT4gKFxuICA8PlxuICAgIDxoMiBjbGFzc05hbWU9e2Ake3N0eWxlcy50aXRsZX0gdGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWxhcmdlIG10LTIgbWItNGB9PlxuICAgICAge29yZGVyTnVtYmVyfVxuICAgIDwvaDI+XG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW1cIj7QuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0LrQsNC30LA8L3A+XG4gICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17ZG9uZUltZ30gYWx0PVwi0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDRgdGC0LDRgtGD0YHQsCDQt9Cw0LrQsNC30LAuXCIgLz5cbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgbWItMVwiPtCS0LDRiCDQt9Cw0LrQsNC3INC90LDRh9Cw0LvQuCDQs9C+0YLQvtCy0LjRgtGMPC9wPlxuICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRleHR9IHRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdGB9PlxuICAgICAg0JTQvtC20LTQuNGC0LXRgdGMINCz0L7RgtC+0LLQvdC+0YHRgtC4INC90LAg0L7RgNCx0LjRgtCw0LvRjNC90L7QuSDRgdGC0LDQvdGG0LjQuFxuICAgIDwvcD5cbiAgPC8+XG4pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL3VpL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy50c3gifQ==