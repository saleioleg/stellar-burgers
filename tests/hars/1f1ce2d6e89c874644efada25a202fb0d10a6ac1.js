import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/orders-list/orders-list.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { OrderCard } from "/src/components/index.ts";
import styles from "/src/components/ui/orders-list/orders-list.module.css";
export const OrdersListUI = ({ orderByDate }) => /* @__PURE__ */ jsxDEV("div", { className: `${styles.content}`, children: orderByDate.map(
  (order) => /* @__PURE__ */ jsxDEV(OrderCard, { order }, order._id, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/orders-list/orders-list.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this)
) }, void 0, false, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/orders-list/orders-list.tsx",
  lineNumber: 8,
  columnNumber: 1
}, this);
_c = OrdersListUI;
var _c;
$RefreshReg$(_c, "OrdersListUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/orders-list/orders-list.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/orders-list/orders-list.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/orders-list/orders-list.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU007QUFUTixTQUFTQSxpQkFBaUI7QUFJMUIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLGVBQWVBLENBQUMsRUFBRUMsWUFBK0IsTUFDNUQsdUJBQUMsU0FBSSxXQUFXLEdBQUdGLE9BQU9HLE9BQU8sSUFDOUJELHNCQUFZRTtBQUFBQSxFQUFJLENBQUNDLFVBQ2hCLHVCQUFDLGFBQVUsU0FBbUJBLE1BQU1DLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBd0M7QUFDekMsS0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUE7QUFDQUMsS0FOV047QUFBWSxJQUFBTTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiT3JkZXJDYXJkIiwic3R5bGVzIiwiT3JkZXJzTGlzdFVJIiwib3JkZXJCeURhdGUiLCJjb250ZW50IiwibWFwIiwib3JkZXIiLCJfaWQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJvcmRlcnMtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JkZXJDYXJkIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyc0xpc3RVSVByb3BzIH0gZnJvbSAnLi90eXBlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL29yZGVycy1saXN0Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgT3JkZXJzTGlzdFVJID0gKHsgb3JkZXJCeURhdGUgfTogT3JkZXJzTGlzdFVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH1gfT5cbiAgICB7b3JkZXJCeURhdGUubWFwKChvcmRlcikgPT4gKFxuICAgICAgPE9yZGVyQ2FyZCBvcmRlcj17b3JkZXJ9IGtleT17b3JkZXIuX2lkfSAvPlxuICAgICkpfVxuICA8L2Rpdj5cbik7XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvdWkvb3JkZXJzLWxpc3Qvb3JkZXJzLWxpc3QudHN4In0=