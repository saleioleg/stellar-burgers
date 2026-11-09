import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/burger-ingredients/burger-ingredients.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { IngredientsCategory } from "/src/components/index.ts";
import { Tab } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport3_react["memo"];
import styles from "/src/components/ui/burger-ingredients/burger-ingredients.module.css";
export const BurgerIngredientsUI = memo(_c = function BurgerIngredientsUI2({
  currentTab,
  buns,
  mains,
  sauces,
  titleBunRef,
  titleMainRef,
  titleSaucesRef,
  bunsRef,
  mainsRef,
  saucesRef,
  onTabClick
}) {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: /* @__PURE__ */ jsxDEV("section", { className: styles.burger_ingredients, children: [
    /* @__PURE__ */ jsxDEV("nav", { children: /* @__PURE__ */ jsxDEV("ul", { className: styles.menu, children: [
      /* @__PURE__ */ jsxDEV(Tab, { value: "bun", active: currentTab === "bun", onClick: onTabClick, children: "Булки" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Tab, { value: "main", active: currentTab === "main", onClick: onTabClick, children: "Начинки" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Tab, { value: "sauce", active: currentTab === "sauce", onClick: onTabClick, children: "Соусы" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: styles.content, children: [
      /* @__PURE__ */ jsxDEV(
        IngredientsCategory,
        {
          title: "Булки",
          titleRef: titleBunRef,
          ingredients: buns,
          ref: bunsRef
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
          lineNumber: 39,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        IngredientsCategory,
        {
          title: "Начинки",
          titleRef: titleMainRef,
          ingredients: mains,
          ref: mainsRef
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
          lineNumber: 45,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        IngredientsCategory,
        {
          title: "Соусы",
          titleRef: titleSaucesRef,
          ingredients: sauces,
          ref: saucesRef
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
});
_c2 = BurgerIngredientsUI;
var _c, _c2;
$RefreshReg$(_c, "BurgerIngredientsUI$memo");
$RefreshReg$(_c2, "BurgerIngredientsUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/burger-ingredients/burger-ingredients.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0JJLG1CQUlRLGNBSlI7QUF0QkosU0FBU0EsMkJBQTJCO0FBQ3BDLFNBQVNDLFdBQVc7QUFDcEIsU0FBU0MsWUFBWTtBQUlyQixPQUFPQyxZQUFZO0FBRVosYUFBTUMsc0JBQXNCRixLQUFJRyxLQUFDLFNBQVNELHFCQUFvQjtBQUFBLEVBQ25FRTtBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUN3QixHQUFzQjtBQUM5QyxTQUNFLG1DQUNFLGlDQUFDLGFBQVEsV0FBV2IsT0FBT2Msb0JBQ3pCO0FBQUEsMkJBQUMsU0FDQyxpQ0FBQyxRQUFHLFdBQVdkLE9BQU9lLE1BQ3BCO0FBQUEsNkJBQUMsT0FBSSxPQUFNLE9BQU0sUUFBUVosZUFBZSxPQUFPLFNBQVNVLFlBQVcscUJBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BQ0EsdUJBQUMsT0FBSSxPQUFNLFFBQU8sUUFBUVYsZUFBZSxRQUFRLFNBQVNVLFlBQVcsdUJBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BQ0EsdUJBQUMsT0FBSSxPQUFNLFNBQVEsUUFBUVYsZUFBZSxTQUFTLFNBQVNVLFlBQVcscUJBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLFNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVVBLEtBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVlBO0FBQUEsSUFDQSx1QkFBQyxTQUFJLFdBQVdiLE9BQU9nQixTQUNyQjtBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFNO0FBQUEsVUFDTixVQUFVVDtBQUFBQSxVQUNWLGFBQWFIO0FBQUFBLFVBQ2IsS0FBS007QUFBQUE7QUFBQUEsUUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJZTtBQUFBLE1BRWY7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU07QUFBQSxVQUNOLFVBQVVGO0FBQUFBLFVBQ1YsYUFBYUg7QUFBQUEsVUFDYixLQUFLTTtBQUFBQTtBQUFBQSxRQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlnQjtBQUFBLE1BRWhCO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFNO0FBQUEsVUFDTixVQUFVRjtBQUFBQSxVQUNWLGFBQWFIO0FBQUFBLFVBQ2IsS0FBS007QUFBQUE7QUFBQUEsUUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJaUI7QUFBQSxTQWpCbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW1CQTtBQUFBLE9BakNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrQ0EsS0FuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW9DQTtBQUVKLENBQUM7QUFBRUssTUFwRFVoQjtBQUFtQixJQUFBQyxJQUFBZTtBQUFBQyxhQUFBaEIsSUFBQTtBQUFBZ0IsYUFBQUQsS0FBQSIsIm5hbWVzIjpbIkluZ3JlZGllbnRzQ2F0ZWdvcnkiLCJUYWIiLCJtZW1vIiwic3R5bGVzIiwiQnVyZ2VySW5ncmVkaWVudHNVSSIsIl9jIiwiY3VycmVudFRhYiIsImJ1bnMiLCJtYWlucyIsInNhdWNlcyIsInRpdGxlQnVuUmVmIiwidGl0bGVNYWluUmVmIiwidGl0bGVTYXVjZXNSZWYiLCJidW5zUmVmIiwibWFpbnNSZWYiLCJzYXVjZXNSZWYiLCJvblRhYkNsaWNrIiwiYnVyZ2VyX2luZ3JlZGllbnRzIiwibWVudSIsImNvbnRlbnQiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYnVyZ2VyLWluZ3JlZGllbnRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmdyZWRpZW50c0NhdGVnb3J5IH0gZnJvbSAnQGNvbXBvbmVudHMnO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnQGtyZ2FhL3JlYWN0LWRldmVsb3Blci1idXJnZXItdWktY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdHlwZSB7IEJ1cmdlckluZ3JlZGllbnRzVUlQcm9wcyB9IGZyb20gJy4vdHlwZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXJnZXItaW5ncmVkaWVudHMubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBCdXJnZXJJbmdyZWRpZW50c1VJID0gbWVtbyhmdW5jdGlvbiBCdXJnZXJJbmdyZWRpZW50c1VJKHtcbiAgY3VycmVudFRhYixcbiAgYnVucyxcbiAgbWFpbnMsXG4gIHNhdWNlcyxcbiAgdGl0bGVCdW5SZWYsXG4gIHRpdGxlTWFpblJlZixcbiAgdGl0bGVTYXVjZXNSZWYsXG4gIGJ1bnNSZWYsXG4gIG1haW5zUmVmLFxuICBzYXVjZXNSZWYsXG4gIG9uVGFiQ2xpY2ssXG59OiBCdXJnZXJJbmdyZWRpZW50c1VJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcl9pbmdyZWRpZW50c30+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgICAgPFRhYiB2YWx1ZT1cImJ1blwiIGFjdGl2ZT17Y3VycmVudFRhYiA9PT0gJ2J1bid9IG9uQ2xpY2s9e29uVGFiQ2xpY2t9PlxuICAgICAgICAgICAgICDQkdGD0LvQutC4XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDxUYWIgdmFsdWU9XCJtYWluXCIgYWN0aXZlPXtjdXJyZW50VGFiID09PSAnbWFpbid9IG9uQ2xpY2s9e29uVGFiQ2xpY2t9PlxuICAgICAgICAgICAgICDQndCw0YfQuNC90LrQuFxuICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8VGFiIHZhbHVlPVwic2F1Y2VcIiBhY3RpdmU9e2N1cnJlbnRUYWIgPT09ICdzYXVjZSd9IG9uQ2xpY2s9e29uVGFiQ2xpY2t9PlxuICAgICAgICAgICAgICDQodC+0YPRgdGLXG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8SW5ncmVkaWVudHNDYXRlZ29yeVxuICAgICAgICAgICAgdGl0bGU9XCLQkdGD0LvQutC4XCJcbiAgICAgICAgICAgIHRpdGxlUmVmPXt0aXRsZUJ1blJlZn1cbiAgICAgICAgICAgIGluZ3JlZGllbnRzPXtidW5zfVxuICAgICAgICAgICAgcmVmPXtidW5zUmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEluZ3JlZGllbnRzQ2F0ZWdvcnlcbiAgICAgICAgICAgIHRpdGxlPVwi0J3QsNGH0LjQvdC60LhcIlxuICAgICAgICAgICAgdGl0bGVSZWY9e3RpdGxlTWFpblJlZn1cbiAgICAgICAgICAgIGluZ3JlZGllbnRzPXttYWluc31cbiAgICAgICAgICAgIHJlZj17bWFpbnNSZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5ncmVkaWVudHNDYXRlZ29yeVxuICAgICAgICAgICAgdGl0bGU9XCLQodC+0YPRgdGLXCJcbiAgICAgICAgICAgIHRpdGxlUmVmPXt0aXRsZVNhdWNlc1JlZn1cbiAgICAgICAgICAgIGluZ3JlZGllbnRzPXtzYXVjZXN9XG4gICAgICAgICAgICByZWY9e3NhdWNlc1JlZn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL3VpL2J1cmdlci1pbmdyZWRpZW50cy9idXJnZXItaW5ncmVkaWVudHMudHN4In0=