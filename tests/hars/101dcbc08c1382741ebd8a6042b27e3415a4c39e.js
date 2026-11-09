import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/orders-list/orders-list.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { OrdersListUI } from "/src/components/ui/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport2_react["memo"];
export const OrdersList = memo(_c = function OrdersList2({
  orders
}) {
  const orderByDate = [...orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return /* @__PURE__ */ jsxDEV(OrdersListUI, { orderByDate }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/orders-list/orders-list.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
});
_c2 = OrdersList;
var _c, _c2;
$RefreshReg$(_c, "OrdersList$memo");
$RefreshReg$(_c2, "OrdersList");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/orders-list/orders-list.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/orders-list/orders-list.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/orders-list/orders-list.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWVM7QUFaVCxTQUFTQSxvQkFBb0I7QUFDN0IsU0FBU0MsWUFBWTtBQUlkLGFBQU1DLGFBQWFELEtBQUlFLEtBQUMsU0FBU0QsWUFBVztBQUFBLEVBQ2pERTtBQUNlLEdBQXNCO0FBQ3JDLFFBQU1DLGNBQWMsQ0FBQyxHQUFHRCxNQUFNLEVBQUVFO0FBQUFBLElBQzlCLENBQUNDLEdBQUdDLE1BQU0sSUFBSUMsS0FBS0QsRUFBRUUsU0FBUyxFQUFFQyxRQUFRLElBQUksSUFBSUYsS0FBS0YsRUFBRUcsU0FBUyxFQUFFQyxRQUFRO0FBQUEsRUFDNUU7QUFFQSxTQUFPLHVCQUFDLGdCQUFhLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1QztBQUNoRCxDQUFDO0FBQUVDLE1BUlVWO0FBQVUsSUFBQUMsSUFBQVM7QUFBQUMsYUFBQVYsSUFBQTtBQUFBVSxhQUFBRCxLQUFBIiwibmFtZXMiOlsiT3JkZXJzTGlzdFVJIiwibWVtbyIsIk9yZGVyc0xpc3QiLCJfYyIsIm9yZGVycyIsIm9yZGVyQnlEYXRlIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImdldFRpbWUiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsib3JkZXJzLWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyc0xpc3RVSSB9IGZyb20gJ0B1aSc7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyc0xpc3RQcm9wcyB9IGZyb20gJy4vdHlwZSc7XG5cbmV4cG9ydCBjb25zdCBPcmRlcnNMaXN0ID0gbWVtbyhmdW5jdGlvbiBPcmRlcnNMaXN0KHtcbiAgb3JkZXJzLFxufTogT3JkZXJzTGlzdFByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBjb25zdCBvcmRlckJ5RGF0ZSA9IFsuLi5vcmRlcnNdLnNvcnQoXG4gICAgKGEsIGIpID0+IG5ldyBEYXRlKGIuY3JlYXRlZEF0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpXG4gICk7XG5cbiAgcmV0dXJuIDxPcmRlcnNMaXN0VUkgb3JkZXJCeURhdGU9e29yZGVyQnlEYXRlfSAvPjtcbn0pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL29yZGVycy1saXN0L29yZGVycy1saXN0LnRzeCJ9