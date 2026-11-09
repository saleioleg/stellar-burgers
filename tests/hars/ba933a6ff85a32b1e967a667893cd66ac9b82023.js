import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/app-header/app-header.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { AppHeaderUI } from "/src/components/ui/index.ts";
import { useSelector } from "/src/services/store.ts";
export const AppHeader = () => {
  _s();
  const userName = useSelector((state) => state.user.user?.name);
  return /* @__PURE__ */ jsxDEV(AppHeaderUI, { userName }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/app-header/app-header.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
};
_s(AppHeader, "VbUg7QqwJ+CW/8ZicsnaLIVthlM=", false, function() {
  return [useSelector];
});
_c = AppHeader;
var _c;
$RefreshReg$(_c, "AppHeader");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/app-header/app-header.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/app-header/app-header.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/app-header/app-header.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBT1M7O0FBUFQsU0FBU0EsbUJBQW1CO0FBQzVCLFNBQVNDLG1CQUFtQjtBQUVyQixhQUFNQyxZQUFZQSxNQUF5QjtBQUFBQyxLQUFBO0FBRWhELFFBQU1DLFdBQVdILFlBQVksQ0FBQ0ksVUFBVUEsTUFBTUMsS0FBS0EsTUFBTUMsSUFBSTtBQUU3RCxTQUFPLHVCQUFDLGVBQVksWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWdDO0FBQ3pDO0FBQUVKLEdBTFdELFdBQVM7QUFBQSxVQUVIRCxXQUFXO0FBQUE7QUFBQU8sS0FGakJOO0FBQVMsSUFBQU07QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkFwcEhlYWRlclVJIiwidXNlU2VsZWN0b3IiLCJBcHBIZWFkZXIiLCJfcyIsInVzZXJOYW1lIiwic3RhdGUiLCJ1c2VyIiwibmFtZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEhlYWRlclVJIH0gZnJvbSAnQHVpJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwSGVhZGVyID0gKCk6IFJlYWN0LkpTWC5FbGVtZW50ID0+IHtcclxuICAvLyDQn9C+0LvRg9GH0LDQtdC8INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQtyBSZWR1eC3RgdGC0L7RgNCwXHJcbiAgY29uc3QgdXNlck5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcj8ubmFtZSk7XHJcblxyXG4gIHJldHVybiA8QXBwSGVhZGVyVUkgdXNlck5hbWU9e3VzZXJOYW1lfSAvPjtcclxufTsiXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnRzeCJ9