import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/constructor-page/constructor-page.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { BurgerIngredients, BurgerConstructor } from "/src/components/index.ts";
import { Preloader } from "/src/components/ui/index.ts";
import styles from "/src/components/ui/pages/constructor-page/constructor-page.module.css";
export const ConstructorPageUI = ({
  isIngredientsLoading
}) => /* @__PURE__ */ jsxDEV(Fragment, { children: isIngredientsLoading ? /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx",
  lineNumber: 13,
  columnNumber: 3
}, this) : /* @__PURE__ */ jsxDEV("main", { className: styles.containerMain, children: [
  /* @__PURE__ */ jsxDEV("h1", { className: `${styles.title} text text_type_main-large mt-10 mb-5 pl-5`, children: "Соберите бургер" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: `${styles.main} pl-5 pr-5`, children: [
    /* @__PURE__ */ jsxDEV(BurgerIngredients, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(BurgerConstructor, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx",
  lineNumber: 11,
  columnNumber: 1
}, this);
_c = ConstructorPageUI;
var _c;
$RefreshReg$(_c, "ConstructorPageUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/pages/constructor-page/constructor-page.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVUUsbUJBRUksY0FGSjtBQVZGLFNBQVNBLG1CQUFtQkMseUJBQXlCO0FBQ3JELFNBQVNDLGlCQUFpQjtBQUkxQixPQUFPQyxZQUFZO0FBRVosYUFBTUMsb0JBQW9CQSxDQUFDO0FBQUEsRUFDaENDO0FBQ3NCLE1BQ3RCLG1DQUNHQSxpQ0FDQyx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVSxJQUVWLHVCQUFDLFVBQUssV0FBV0YsT0FBT0csZUFDdEI7QUFBQSx5QkFBQyxRQUFHLFdBQVcsR0FBR0gsT0FBT0ksS0FBSyw4Q0FBNkMsK0JBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUFBLEVBQ0EsdUJBQUMsU0FBSSxXQUFXLEdBQUdKLE9BQU9LLElBQUksY0FDNUI7QUFBQSwyQkFBQyx1QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtCO0FBQUEsSUFDbEIsdUJBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFrQjtBQUFBLE9BRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHQTtBQUFBLEtBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFBLEtBWko7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWNBO0FBQ0FDLEtBbEJXTDtBQUFpQixJQUFBSztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiQnVyZ2VySW5ncmVkaWVudHMiLCJCdXJnZXJDb25zdHJ1Y3RvciIsIlByZWxvYWRlciIsInN0eWxlcyIsIkNvbnN0cnVjdG9yUGFnZVVJIiwiaXNJbmdyZWRpZW50c0xvYWRpbmciLCJjb250YWluZXJNYWluIiwidGl0bGUiLCJtYWluIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiY29uc3RydWN0b3ItcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVyZ2VySW5ncmVkaWVudHMsIEJ1cmdlckNvbnN0cnVjdG9yIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xuaW1wb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSAnQHVpJztcblxuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3RvclBhZ2VVSVByb3BzIH0gZnJvbSAnLi90eXBlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnN0cnVjdG9yLXBhZ2UubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBDb25zdHJ1Y3RvclBhZ2VVSSA9ICh7XG4gIGlzSW5ncmVkaWVudHNMb2FkaW5nLFxufTogQ29uc3RydWN0b3JQYWdlVUlQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50ID0+IChcbiAgPD5cbiAgICB7aXNJbmdyZWRpZW50c0xvYWRpbmcgPyAoXG4gICAgICA8UHJlbG9hZGVyIC8+XG4gICAgKSA6IChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lck1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGl0bGV9IHRleHQgdGV4dF90eXBlX21haW4tbGFyZ2UgbXQtMTAgbWItNSBwbC01YH0+XG4gICAgICAgICAg0KHQvtCx0LXRgNC40YLQtSDQsdGD0YDQs9C10YBcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSBwbC01IHByLTVgfT5cbiAgICAgICAgICA8QnVyZ2VySW5ncmVkaWVudHMgLz5cbiAgICAgICAgICA8QnVyZ2VyQ29uc3RydWN0b3IgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgKX1cbiAgPC8+XG4pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL3VpL3BhZ2VzL2NvbnN0cnVjdG9yLXBhZ2UvY29uc3RydWN0b3ItcGFnZS50c3gifQ==