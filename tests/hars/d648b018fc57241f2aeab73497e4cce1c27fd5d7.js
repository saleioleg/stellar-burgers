import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/ingredients-category/ingredients-category.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { BurgerIngredient } from "/src/components/index.ts";
import styles from "/src/components/ui/ingredients-category/ingredients-category.module.css";
export const IngredientsCategoryUI = ({
  title,
  titleRef,
  ingredients,
  ingredientsCounters,
  ref
}) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV("h3", { className: "text text_type_main-medium mt-10 mb-6", ref: titleRef, children: title }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredients-category/ingredients-category.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("ul", { className: styles.items, ref, children: ingredients.map(
    (ingredient) => /* @__PURE__ */ jsxDEV(
      BurgerIngredient,
      {
        ingredient,
        count: ingredientsCounters[ingredient._id]
      },
      ingredient._id,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredients-category/ingredients-category.tsx",
        lineNumber: 20,
        columnNumber: 5
      },
      this
    )
  ) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredients-category/ingredients-category.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredients-category/ingredients-category.tsx",
  lineNumber: 14,
  columnNumber: 1
}, this);
_c = IngredientsCategoryUI;
var _c;
$RefreshReg$(_c, "IngredientsCategoryUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/ingredients-category/ingredients-category.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/ingredients-category/ingredients-category.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/ingredients-category/ingredients-category.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYUUsbUJBQ0UsY0FERjtBQWJGLFNBQVNBLHdCQUF3QjtBQUlqQyxPQUFPQyxZQUFZO0FBRVosYUFBTUMsd0JBQXdCQSxDQUFDO0FBQUEsRUFDcENDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQzJCLE1BQzNCLG1DQUNFO0FBQUEseUJBQUMsUUFBRyxXQUFVLHlDQUF3QyxLQUFLSCxVQUN4REQsbUJBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQUEsRUFDQSx1QkFBQyxRQUFHLFdBQVdGLE9BQU9PLE9BQU8sS0FDMUJILHNCQUFZSTtBQUFBQSxJQUFJLENBQUNDLGVBQ2hCO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQztBQUFBLFFBRUEsT0FBT0osb0JBQW9CSSxXQUFXQyxHQUFHO0FBQUE7QUFBQSxNQURwQ0QsV0FBV0M7QUFBQUEsTUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUc2QztBQUFBLEVBRTlDLEtBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFBO0FBQUEsS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BYUE7QUFDQUMsS0FyQldWO0FBQXFCLElBQUFVO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJCdXJnZXJJbmdyZWRpZW50Iiwic3R5bGVzIiwiSW5ncmVkaWVudHNDYXRlZ29yeVVJIiwidGl0bGUiLCJ0aXRsZVJlZiIsImluZ3JlZGllbnRzIiwiaW5ncmVkaWVudHNDb3VudGVycyIsInJlZiIsIml0ZW1zIiwibWFwIiwiaW5ncmVkaWVudCIsIl9pZCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImluZ3JlZGllbnRzLWNhdGVnb3J5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXJnZXJJbmdyZWRpZW50IH0gZnJvbSAnQGNvbXBvbmVudHMnO1xuXG5pbXBvcnQgdHlwZSB7IFRJbmdyZWRpZW50c0NhdGVnb3J5VUlQcm9wcyB9IGZyb20gJy4vdHlwZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmdyZWRpZW50cy1jYXRlZ29yeS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEluZ3JlZGllbnRzQ2F0ZWdvcnlVSSA9ICh7XG4gIHRpdGxlLFxuICB0aXRsZVJlZixcbiAgaW5ncmVkaWVudHMsXG4gIGluZ3JlZGllbnRzQ291bnRlcnMsXG4gIHJlZixcbn06IFRJbmdyZWRpZW50c0NhdGVnb3J5VUlQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50ID0+IChcbiAgPD5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gbXQtMTAgbWItNlwiIHJlZj17dGl0bGVSZWZ9PlxuICAgICAge3RpdGxlfVxuICAgIDwvaDM+XG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1zfSByZWY9e3JlZn0+XG4gICAgICB7aW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KSA9PiAoXG4gICAgICAgIDxCdXJnZXJJbmdyZWRpZW50XG4gICAgICAgICAgaW5ncmVkaWVudD17aW5ncmVkaWVudH1cbiAgICAgICAgICBrZXk9e2luZ3JlZGllbnQuX2lkfVxuICAgICAgICAgIGNvdW50PXtpbmdyZWRpZW50c0NvdW50ZXJzW2luZ3JlZGllbnQuX2lkXX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvPlxuKTtcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy91aS9pbmdyZWRpZW50cy1jYXRlZ29yeS9pbmdyZWRpZW50cy1jYXRlZ29yeS50c3gifQ==