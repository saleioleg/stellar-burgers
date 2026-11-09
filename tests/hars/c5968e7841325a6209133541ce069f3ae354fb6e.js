import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/profile-orders/profile-orders.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Preloader } from "/src/components/ui/index.ts";
import { ProfileOrdersUI } from "/src/components/ui/pages/index.ts";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useEffect = __vite__cjsImport3_react["useEffect"];
import { fetchUserOrders } from "/src/services/feed-slice.ts";
import { useSelector, useDispatch } from "/src/services/store.ts";
export const ProfileOrders = () => {
  _s();
  const dispatch = useDispatch();
  const { userOrders, isLoading } = useSelector((state) => state.feed);
  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);
  if (isLoading && !userOrders.length) {
    return /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/pages/profile-orders/profile-orders.tsx",
      lineNumber: 19,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(ProfileOrdersUI, { orders: userOrders }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/pages/profile-orders/profile-orders.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_s(ProfileOrders, "4hSCbFuHZbDLsOuVwXJeawzbLjU=", false, function() {
  return [useDispatch, useSelector];
});
_c = ProfileOrders;
var _c;
$RefreshReg$(_c, "ProfileOrders");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/pages/profile-orders/profile-orders.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/pages/profile-orders/profile-orders.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/pages/profile-orders/profile-orders.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JXOztBQWxCWCxTQUFTQSxpQkFBaUI7QUFDMUIsU0FBU0MsdUJBQXVCO0FBQ2hDLFNBQVNDLGlCQUFpQjtBQUUxQixTQUFTQyx1QkFBdUI7QUFDaEMsU0FBU0MsYUFBYUMsbUJBQW1CO0FBSWxDLGFBQU1DLGdCQUFvQkEsTUFBTTtBQUFBQyxLQUFBO0FBQ3JDLFFBQU1DLFdBQVdILFlBQVk7QUFDN0IsUUFBTSxFQUFFSSxZQUFZQyxVQUFVLElBQUlOLFlBQVksQ0FBQ08sVUFBVUEsTUFBTUMsSUFBSTtBQUVuRVYsWUFBVSxNQUFNO0FBQ2RNLGFBQVNMLGdCQUFnQixDQUFDO0FBQUEsRUFDNUIsR0FBRyxDQUFDSyxRQUFRLENBQUM7QUFFYixNQUFJRSxhQUFhLENBQUNELFdBQVdJLFFBQVE7QUFDbkMsV0FBTyx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVTtBQUFBLEVBQ25CO0FBRUEsU0FBTyx1QkFBQyxtQkFBZ0IsUUFBUUosY0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvQztBQUM3QztBQUFFRixHQWJXRCxlQUFpQjtBQUFBLFVBQ1hELGFBQ2lCRCxXQUFXO0FBQUE7QUFBQVUsS0FGbENSO0FBQWlCLElBQUFRO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJQcm9maWxlT3JkZXJzVUkiLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXJPcmRlcnMiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiUHJvZmlsZU9yZGVycyIsIl9zIiwiZGlzcGF0Y2giLCJ1c2VyT3JkZXJzIiwiaXNMb2FkaW5nIiwic3RhdGUiLCJmZWVkIiwibGVuZ3RoIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicHJvZmlsZS1vcmRlcnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gJ0B1aSc7XHJcbmltcG9ydCB7IFByb2ZpbGVPcmRlcnNVSSB9IGZyb20gJ0B1aS1wYWdlcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGZldGNoVXNlck9yZGVycyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZlZWQtc2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVPcmRlcnM6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHVzZXJPcmRlcnMsIGlzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mZWVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlck9yZGVycygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZyAmJiAhdXNlck9yZGVycy5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8UHJlbG9hZGVyIC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxQcm9maWxlT3JkZXJzVUkgb3JkZXJzPXt1c2VyT3JkZXJzfSAvPjtcclxufTsiXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL3BhZ2VzL3Byb2ZpbGUtb3JkZXJzL3Byb2ZpbGUtb3JkZXJzLnRzeCJ9