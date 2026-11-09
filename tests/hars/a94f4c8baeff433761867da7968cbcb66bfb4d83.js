import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/feed-info/feed-info.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { FeedInfoUI } from "/src/components/ui/index.ts";
import { useSelector } from "/src/services/store.ts";
const getOrders = (orders, status) => orders.filter((item) => item.status === status).map((item) => item.number).slice(0, 20);
export const FeedInfo = () => {
  _s();
  const feed = useSelector((state) => state.feed);
  const orders = feed.orders;
  const readyOrders = getOrders(orders, "done");
  const pendingOrders = getOrders(orders, "pending");
  return /* @__PURE__ */ jsxDEV(
    FeedInfoUI,
    {
      readyOrders,
      pendingOrders,
      feed
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/feed-info/feed-info.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
};
_s(FeedInfo, "jDiVxtHiNp3aPMVNJc89924q1S4=", false, function() {
  return [useSelector];
});
_c = FeedInfo;
var _c;
$RefreshReg$(_c, "FeedInfo");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/feed-info/feed-info.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/feed-info/feed-info.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/feed-info/feed-info.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0JJOztBQXBCSixTQUFTQSxrQkFBa0I7QUFDM0IsU0FBU0MsbUJBQW1CO0FBSTVCLE1BQU1DLFlBQVlBLENBQUNDLFFBQWtCQyxXQUNuQ0QsT0FDR0UsT0FBTyxDQUFDQyxTQUFTQSxLQUFLRixXQUFXQSxNQUFNLEVBQ3ZDRyxJQUFJLENBQUNELFNBQVNBLEtBQUtFLE1BQU0sRUFDekJDLE1BQU0sR0FBRyxFQUFFO0FBRVQsYUFBTUMsV0FBV0EsTUFBeUI7QUFBQUMsS0FBQTtBQUUvQyxRQUFNQyxPQUFPWCxZQUFZLENBQUNZLFVBQVVBLE1BQU1ELElBQUk7QUFDOUMsUUFBTVQsU0FBU1MsS0FBS1Q7QUFFcEIsUUFBTVcsY0FBY1osVUFBVUMsUUFBUSxNQUFNO0FBQzVDLFFBQU1ZLGdCQUFnQmIsVUFBVUMsUUFBUSxTQUFTO0FBRWpELFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBR2E7QUFHakI7QUFBRVEsR0FmV0QsVUFBUTtBQUFBLFVBRU5ULFdBQVc7QUFBQTtBQUFBZSxLQUZiTjtBQUFRLElBQUFNO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJGZWVkSW5mb1VJIiwidXNlU2VsZWN0b3IiLCJnZXRPcmRlcnMiLCJvcmRlcnMiLCJzdGF0dXMiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwibnVtYmVyIiwic2xpY2UiLCJGZWVkSW5mbyIsIl9zIiwiZmVlZCIsInN0YXRlIiwicmVhZHlPcmRlcnMiLCJwZW5kaW5nT3JkZXJzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZmVlZC1pbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGZWVkSW5mb1VJIH0gZnJvbSAnQHVpJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFRPcmRlciB9IGZyb20gJ0B1dGlscy10eXBlcyc7XHJcblxyXG5jb25zdCBnZXRPcmRlcnMgPSAob3JkZXJzOiBUT3JkZXJbXSwgc3RhdHVzOiBzdHJpbmcpOiBudW1iZXJbXSA9PlxyXG4gIG9yZGVyc1xyXG4gICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGF0dXMgPT09IHN0YXR1cylcclxuICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0ubnVtYmVyKVxyXG4gICAgLnNsaWNlKDAsIDIwKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGZWVkSW5mbyA9ICgpOiBSZWFjdC5KU1guRWxlbWVudCA9PiB7XHJcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRgdC+0YHRgtC+0Y/QvdC40LUg0LvQtdC90YLRiyDQt9Cw0LrQsNC30L7QsiDQuNC3IFJlZHV4LdGB0YLQvtGA0LBcclxuICBjb25zdCBmZWVkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mZWVkKTtcclxuICBjb25zdCBvcmRlcnMgPSBmZWVkLm9yZGVycztcclxuXHJcbiAgY29uc3QgcmVhZHlPcmRlcnMgPSBnZXRPcmRlcnMob3JkZXJzLCAnZG9uZScpO1xyXG4gIGNvbnN0IHBlbmRpbmdPcmRlcnMgPSBnZXRPcmRlcnMob3JkZXJzLCAncGVuZGluZycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZlZWRJbmZvVUlcclxuICAgICAgcmVhZHlPcmRlcnM9e3JlYWR5T3JkZXJzfVxyXG4gICAgICBwZW5kaW5nT3JkZXJzPXtwZW5kaW5nT3JkZXJzfVxyXG4gICAgICBmZWVkPXtmZWVkfVxyXG4gICAgLz5cclxuICApO1xyXG59OyJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy9mZWVkLWluZm8vZmVlZC1pbmZvLnRzeCJ9