import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/feed/feed.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { OrdersList, FeedInfo } from "/src/components/index.ts";
import { RefreshButton } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport3_react["memo"];
import styles from "/src/components/ui/pages/feed/feed.module.css";
export const FeedUI = memo(_c = function FeedUI2({
  orders,
  handleGetFeeds
}) {
  return /* @__PURE__ */ jsxDEV("main", { className: styles.containerMain, children: [
    /* @__PURE__ */ jsxDEV("div", { className: `${styles.titleBox} mt-10 mb-5`, children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text text_type_main-large", children: "Лента заказов" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(RefreshButton, { text: "Обновить", onClick: handleGetFeeds, extraClass: "ml-30" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: styles.main, children: [
      /* @__PURE__ */ jsxDEV("div", { className: styles.columnOrders, children: /* @__PURE__ */ jsxDEV(OrdersList, { orders }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: styles.columnInfo, children: /* @__PURE__ */ jsxDEV(FeedInfo, {}, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
});
_c2 = FeedUI;
var _c, _c2;
$RefreshReg$(_c, "FeedUI$memo");
$RefreshReg$(_c2, "FeedUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/pages/feed/feed.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZVE7QUFmUixTQUFTQSxZQUFZQyxnQkFBZ0I7QUFDckMsU0FBU0MscUJBQXFCO0FBQzlCLFNBQVNDLFlBQVk7QUFJckIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLFNBQVNGLEtBQUlHLEtBQUMsU0FBU0QsUUFBTztBQUFBLEVBQ3pDRTtBQUFBQSxFQUNBQztBQUNXLEdBQXNCO0FBQ2pDLFNBQ0UsdUJBQUMsVUFBSyxXQUFXSixPQUFPSyxlQUN0QjtBQUFBLDJCQUFDLFNBQUksV0FBVyxHQUFHTCxPQUFPTSxRQUFRLGVBQ2hDO0FBQUEsNkJBQUMsUUFBRyxXQUFVLDZCQUE0Qiw2QkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF1RDtBQUFBLE1BQ3ZELHVCQUFDLGlCQUFjLE1BQUssWUFBVyxTQUFTRixnQkFBZ0IsWUFBWSxXQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTRFO0FBQUEsU0FGOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUdBO0FBQUEsSUFDQSx1QkFBQyxTQUFJLFdBQVdKLE9BQU9PLE1BQ3JCO0FBQUEsNkJBQUMsU0FBSSxXQUFXUCxPQUFPUSxjQUNyQixpQ0FBQyxjQUFXLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUEyQixLQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxNQUNBLHVCQUFDLFNBQUksV0FBV1IsT0FBT1MsWUFDckIsaUNBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVMsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxTQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FPQTtBQUFBLE9BWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWFBO0FBRUosQ0FBQztBQUFFQyxNQXBCVVQ7QUFBTSxJQUFBQyxJQUFBUTtBQUFBQyxhQUFBVCxJQUFBO0FBQUFTLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJPcmRlcnNMaXN0IiwiRmVlZEluZm8iLCJSZWZyZXNoQnV0dG9uIiwibWVtbyIsInN0eWxlcyIsIkZlZWRVSSIsIl9jIiwib3JkZXJzIiwiaGFuZGxlR2V0RmVlZHMiLCJjb250YWluZXJNYWluIiwidGl0bGVCb3giLCJtYWluIiwiY29sdW1uT3JkZXJzIiwiY29sdW1uSW5mbyIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJmZWVkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmRlcnNMaXN0LCBGZWVkSW5mbyB9IGZyb20gJ0Bjb21wb25lbnRzJztcbmltcG9ydCB7IFJlZnJlc2hCdXR0b24gfSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0eXBlIHsgRmVlZFVJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZmVlZC5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEZlZWRVSSA9IG1lbW8oZnVuY3Rpb24gRmVlZFVJKHtcbiAgb3JkZXJzLFxuICBoYW5kbGVHZXRGZWVkcyxcbn06IEZlZWRVSVByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lck1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50aXRsZUJveH0gbXQtMTAgbWItNWB9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1sYXJnZVwiPtCb0LXQvdGC0LAg0LfQsNC60LDQt9C+0LI8L2gxPlxuICAgICAgICA8UmVmcmVzaEJ1dHRvbiB0ZXh0PVwi0J7QsdC90L7QstC40YLRjFwiIG9uQ2xpY2s9e2hhbmRsZUdldEZlZWRzfSBleHRyYUNsYXNzPXsnbWwtMzAnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbk9yZGVyc30+XG4gICAgICAgICAgPE9yZGVyc0xpc3Qgb3JkZXJzPXtvcmRlcnN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbkluZm99PlxuICAgICAgICAgIDxGZWVkSW5mbyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn0pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL3VpL3BhZ2VzL2ZlZWQvZmVlZC50c3gifQ==