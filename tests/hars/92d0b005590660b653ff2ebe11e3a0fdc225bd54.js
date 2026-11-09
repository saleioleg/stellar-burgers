import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/feed/feed.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Preloader } from "/src/components/ui/index.ts";
import { FeedUI } from "/src/components/ui/pages/index.ts";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useEffect = __vite__cjsImport3_react["useEffect"];
import { fetchFeeds } from "/src/services/feed-slice.ts";
import { useSelector, useDispatch } from "/src/services/store.ts";
export const Feed = () => {
  _s();
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.feed);
  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);
  const handleGetFeeds = () => {
    dispatch(fetchFeeds());
  };
  if (isLoading && !orders.length) {
    return /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/pages/feed/feed.tsx",
      lineNumber: 24,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(FeedUI, { orders, handleGetFeeds }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/pages/feed/feed.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_s(Feed, "BbGbRpnD7FdnTgm+EcOtBgGTx0w=", false, function() {
  return [useDispatch, useSelector];
});
_c = Feed;
var _c;
$RefreshReg$(_c, "Feed");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/pages/feed/feed.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/pages/feed/feed.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/pages/feed/feed.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdUJXOztBQXZCWCxTQUFTQSxpQkFBaUI7QUFDMUIsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxpQkFBaUI7QUFFMUIsU0FBU0Msa0JBQWtCO0FBQzNCLFNBQVNDLGFBQWFDLG1CQUFtQjtBQUlsQyxhQUFNQyxPQUFXQSxNQUFNO0FBQUFDLEtBQUE7QUFDNUIsUUFBTUMsV0FBV0gsWUFBWTtBQUM3QixRQUFNLEVBQUVJLFFBQVFDLFVBQVUsSUFBSU4sWUFBWSxDQUFDTyxVQUFVQSxNQUFNQyxJQUFJO0FBRS9EVixZQUFVLE1BQU07QUFDZE0sYUFBU0wsV0FBVyxDQUFDO0FBQUEsRUFDdkIsR0FBRyxDQUFDSyxRQUFRLENBQUM7QUFFYixRQUFNSyxpQkFBaUJBLE1BQU07QUFDM0JMLGFBQVNMLFdBQVcsQ0FBQztBQUFBLEVBQ3ZCO0FBR0EsTUFBSU8sYUFBYSxDQUFDRCxPQUFPSyxRQUFRO0FBQy9CLFdBQU8sdUJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVU7QUFBQSxFQUNuQjtBQUVBLFNBQU8sdUJBQUMsVUFBTyxRQUFnQixrQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1RDtBQUNoRTtBQUFFUCxHQWxCV0QsTUFBUTtBQUFBLFVBQ0ZELGFBQ2FELFdBQVc7QUFBQTtBQUFBVyxLQUY5QlQ7QUFBUSxJQUFBUztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUHJlbG9hZGVyIiwiRmVlZFVJIiwidXNlRWZmZWN0IiwiZmV0Y2hGZWVkcyIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJGZWVkIiwiX3MiLCJkaXNwYXRjaCIsIm9yZGVycyIsImlzTG9hZGluZyIsInN0YXRlIiwiZmVlZCIsImhhbmRsZUdldEZlZWRzIiwibGVuZ3RoIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZmVlZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSAnQHVpJztcclxuaW1wb3J0IHsgRmVlZFVJIH0gZnJvbSAnQHVpLXBhZ2VzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hGZWVkcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZlZWQtc2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZlZWQ6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG9yZGVycywgaXNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZlZWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hGZWVkcygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR2V0RmVlZHMgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaEZlZWRzKCkpO1xyXG4gIH07XHJcblxyXG4gIC8vINCf0L7QutCw0LfRi9Cy0LDQtdC8IFByZWxvYWRlciDRgtC+0LvRjNC60L4g0L/RgNC4INCS0JXQoNCS0JjQp9Cd0J7QmSDQt9Cw0LPRgNGD0LfQutC1LCDQutC+0LPQtNCwINC00LDQvdC90YvRhSDQtdGJ0LUg0L3QtdGCXHJcbiAgaWYgKGlzTG9hZGluZyAmJiAhb3JkZXJzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxQcmVsb2FkZXIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPEZlZWRVSSBvcmRlcnM9e29yZGVyc30gaGFuZGxlR2V0RmVlZHM9e2hhbmRsZUdldEZlZWRzfSAvPjtcclxufTsiXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL3BhZ2VzL2ZlZWQvZmVlZC50c3gifQ==