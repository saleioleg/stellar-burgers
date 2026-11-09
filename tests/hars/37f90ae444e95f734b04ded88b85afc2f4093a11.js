import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/constructor-page/constructor-page.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { BurgerIngredients, BurgerConstructor } from "/src/components/index.ts";
import styles from "/src/pages/constructor-page/constructor-page.module.css";
export const ConstructorPage = () => /* @__PURE__ */ jsxDEV("main", { className: styles.containerMain, children: [
  /* @__PURE__ */ jsxDEV("h1", { className: `${styles.title} text text_type_main-large mt-10 mb-5 pl-5`, children: "Соберите бургер" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/pages/constructor-page/constructor-page.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: `${styles.main} pl-5 pr-5`, children: [
    /* @__PURE__ */ jsxDEV(BurgerIngredients, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/pages/constructor-page/constructor-page.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(BurgerConstructor, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/pages/constructor-page/constructor-page.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/pages/constructor-page/constructor-page.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/pages/constructor-page/constructor-page.tsx",
  lineNumber: 6,
  columnNumber: 1
}, this);
_c = ConstructorPage;
var _c;
$RefreshReg$(_c, "ConstructorPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/pages/constructor-page/constructor-page.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/pages/constructor-page/constructor-page.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/pages/constructor-page/constructor-page.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBTUk7QUFOSixTQUFTQSxtQkFBbUJDLHlCQUF5QjtBQUVyRCxPQUFPQyxZQUFZO0FBRVosYUFBTUMsa0JBQWtCQSxNQUM3Qix1QkFBQyxVQUFLLFdBQVdELE9BQU9FLGVBQ3RCO0FBQUEseUJBQUMsUUFBRyxXQUFXLEdBQUdGLE9BQU9HLEtBQUssOENBQTZDLCtCQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFBQSxFQUNBLHVCQUFDLFNBQUksV0FBVyxHQUFHSCxPQUFPSSxJQUFJLGNBQzVCO0FBQUEsMkJBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFrQjtBQUFBLElBQ2xCLHVCQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBa0I7QUFBQSxPQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0E7QUFBQSxLQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRQTtBQUNBQyxLQVZXSjtBQUFlLElBQUFJO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJCdXJnZXJJbmdyZWRpZW50cyIsIkJ1cmdlckNvbnN0cnVjdG9yIiwic3R5bGVzIiwiQ29uc3RydWN0b3JQYWdlIiwiY29udGFpbmVyTWFpbiIsInRpdGxlIiwibWFpbiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImNvbnN0cnVjdG9yLXBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1cmdlckluZ3JlZGllbnRzLCBCdXJnZXJDb25zdHJ1Y3RvciB9IGZyb20gJ0Bjb21wb25lbnRzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnN0cnVjdG9yLXBhZ2UubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBDb25zdHJ1Y3RvclBhZ2UgPSAoKTogUmVhY3QuSlNYLkVsZW1lbnQgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJNYWlufT5cbiAgICA8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGl0bGV9IHRleHQgdGV4dF90eXBlX21haW4tbGFyZ2UgbXQtMTAgbWItNSBwbC01YH0+XG4gICAgICDQodC+0LHQtdGA0LjRgtC1INCx0YPRgNCz0LXRgFxuICAgIDwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSBwbC01IHByLTVgfT5cbiAgICAgIDxCdXJnZXJJbmdyZWRpZW50cyAvPlxuICAgICAgPEJ1cmdlckNvbnN0cnVjdG9yIC8+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cbik7XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL3BhZ2VzL2NvbnN0cnVjdG9yLXBhZ2UvY29uc3RydWN0b3ItcGFnZS50c3gifQ==