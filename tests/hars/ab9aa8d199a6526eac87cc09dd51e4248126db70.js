import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/order-status/order-status.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { OrderStatusUI } from "/src/components/ui/index.ts";
const STATUS_TEXT = {
  pending: "Готовится",
  done: "Выполнен",
  created: "Создан"
};
const STATUS_COLOR = {
  pending: "#E52B1A",
  done: "#00CCCC",
  created: "#F2F2F3"
};
const UNKNOWN_STATUS_TEXT = "Неизвестен";
const UNKNOWN_STATUS_COLOR = "#F2F2F3";
export const OrderStatus = ({ status }) => /* @__PURE__ */ jsxDEV(
  OrderStatusUI,
  {
    textStyle: STATUS_COLOR[status] ?? UNKNOWN_STATUS_COLOR,
    text: STATUS_TEXT[status] ?? UNKNOWN_STATUS_TEXT
  },
  void 0,
  false,
  {
    fileName: "C:/practicum/stellar-burgers/src/components/order-status/order-status.tsx",
    lineNumber: 21,
    columnNumber: 1
  },
  this
);
_c = OrderStatus;
var _c;
$RefreshReg$(_c, "OrderStatus");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/order-status/order-status.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/order-status/order-status.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/order-status/order-status.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0JFO0FBcEJGLFNBQVNBLHFCQUFxQjtBQUk5QixNQUFNQyxjQUFrRDtBQUFBLEVBQ3REQyxTQUFTO0FBQUEsRUFDVEMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFDWDtBQUVBLE1BQU1DLGVBQW1EO0FBQUEsRUFDdkRILFNBQVM7QUFBQSxFQUNUQyxNQUFNO0FBQUEsRUFDTkMsU0FBUztBQUNYO0FBRUEsTUFBTUUsc0JBQXNCO0FBQzVCLE1BQU1DLHVCQUF1QjtBQUV0QixhQUFNQyxjQUFjQSxDQUFDLEVBQUVDLE9BQXlCLE1BQ3JEO0FBQUEsRUFBQztBQUFBO0FBQUEsSUFDQyxXQUFXSixhQUFhSSxNQUFNLEtBQUtGO0FBQUFBLElBQ25DLE1BQU1OLFlBQVlRLE1BQU0sS0FBS0g7QUFBQUE7QUFBQUEsRUFGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVtRDtBQUVuREksS0FMV0Y7QUFBVyxJQUFBRTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiT3JkZXJTdGF0dXNVSSIsIlNUQVRVU19URVhUIiwicGVuZGluZyIsImRvbmUiLCJjcmVhdGVkIiwiU1RBVFVTX0NPTE9SIiwiVU5LTk9XTl9TVEFUVVNfVEVYVCIsIlVOS05PV05fU1RBVFVTX0NPTE9SIiwiT3JkZXJTdGF0dXMiLCJzdGF0dXMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJvcmRlci1zdGF0dXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyU3RhdHVzVUkgfSBmcm9tICdAdWknO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyU3RhdHVzUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuXG5jb25zdCBTVEFUVVNfVEVYVDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHtcbiAgcGVuZGluZzogJ9CT0L7RgtC+0LLQuNGC0YHRjycsXG4gIGRvbmU6ICfQktGL0L/QvtC70L3QtdC9JyxcbiAgY3JlYXRlZDogJ9Ch0L7Qt9C00LDQvScsXG59O1xuXG5jb25zdCBTVEFUVVNfQ09MT1I6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB7XG4gIHBlbmRpbmc6ICcjRTUyQjFBJyxcbiAgZG9uZTogJyMwMENDQ0MnLFxuICBjcmVhdGVkOiAnI0YyRjJGMycsXG59O1xuXG5jb25zdCBVTktOT1dOX1NUQVRVU19URVhUID0gJ9Cd0LXQuNC30LLQtdGB0YLQtdC9JztcbmNvbnN0IFVOS05PV05fU1RBVFVTX0NPTE9SID0gJyNGMkYyRjMnO1xuXG5leHBvcnQgY29uc3QgT3JkZXJTdGF0dXMgPSAoeyBzdGF0dXMgfTogT3JkZXJTdGF0dXNQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50ID0+IChcbiAgPE9yZGVyU3RhdHVzVUlcbiAgICB0ZXh0U3R5bGU9e1NUQVRVU19DT0xPUltzdGF0dXNdID8/IFVOS05PV05fU1RBVFVTX0NPTE9SfVxuICAgIHRleHQ9e1NUQVRVU19URVhUW3N0YXR1c10gPz8gVU5LTk9XTl9TVEFUVVNfVEVYVH1cbiAgLz5cbik7XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvb3JkZXItc3RhdHVzL29yZGVyLXN0YXR1cy50c3gifQ==