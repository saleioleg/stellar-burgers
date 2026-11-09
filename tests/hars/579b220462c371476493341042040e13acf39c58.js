import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ingredients-category/ingredients-category.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { IngredientsCategoryUI } from "/src/components/ui/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useMemo = __vite__cjsImport2_react["useMemo"];
import { useSelector } from "/src/services/store.ts";
export const IngredientsCategory = ({
  title,
  titleRef,
  ingredients,
  ref
}) => {
  _s();
  const burgerConstructor = useSelector((state) => state.burgerConstructor);
  const ingredientsCounters = useMemo(() => {
    const { bun, ingredients: ingredients2 } = burgerConstructor;
    const counters = {};
    ingredients2.forEach((ingredient) => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });
    if (bun) counters[bun._id] = 2;
    return counters;
  }, [burgerConstructor]);
  return /* @__PURE__ */ jsxDEV(
    IngredientsCategoryUI,
    {
      title,
      titleRef,
      ingredients,
      ingredientsCounters,
      ref
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ingredients-category/ingredients-category.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
};
_s(IngredientsCategory, "oFVmiJZtfoiSuQOolz7nkbS9JBg=", false, function() {
  return [useSelector];
});
_c = IngredientsCategory;
var _c;
$RefreshReg$(_c, "IngredientsCategory");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ingredients-category/ingredients-category.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ingredients-category/ingredients-category.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ingredients-category/ingredients-category.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0NJOztBQWxDSixTQUFTQSw2QkFBNkI7QUFDdEMsU0FBU0MsZUFBZTtBQUV4QixTQUFTQyxtQkFBbUI7QUFLckIsYUFBTUMsc0JBQXNCQSxDQUFDO0FBQUEsRUFDbENDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQ3lCLE1BQXlCO0FBQUFDLEtBQUE7QUFFbEQsUUFBTUMsb0JBQW9CUCxZQUFZLENBQUNRLFVBQVVBLE1BQU1ELGlCQUFpQjtBQUV4RSxRQUFNRSxzQkFBc0JWLFFBQVEsTUFBTTtBQUN4QyxVQUFNLEVBQUVXLEtBQUtOLDBCQUFZLElBQUlHO0FBQzdCLFVBQU1JLFdBQW1DLENBQUM7QUFHMUNQLGlCQUFZUSxRQUFRLENBQUNDLGVBQTRCO0FBQy9DLFVBQUksQ0FBQ0YsU0FBU0UsV0FBV0MsR0FBRyxFQUFHSCxVQUFTRSxXQUFXQyxHQUFHLElBQUk7QUFDMURILGVBQVNFLFdBQVdDLEdBQUc7QUFBQSxJQUN6QixDQUFDO0FBR0QsUUFBSUosSUFBS0MsVUFBU0QsSUFBSUksR0FBRyxJQUFJO0FBRTdCLFdBQU9IO0FBQUFBLEVBQ1QsR0FBRyxDQUFDSixpQkFBaUIsQ0FBQztBQUV0QixTQUNFO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS1c7QUFHZjtBQUFFRCxHQWxDV0wscUJBQW1CO0FBQUEsVUFPSkQsV0FBVztBQUFBO0FBQUFlLEtBUDFCZDtBQUFtQixJQUFBYztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiSW5ncmVkaWVudHNDYXRlZ29yeVVJIiwidXNlTWVtbyIsInVzZVNlbGVjdG9yIiwiSW5ncmVkaWVudHNDYXRlZ29yeSIsInRpdGxlIiwidGl0bGVSZWYiLCJpbmdyZWRpZW50cyIsInJlZiIsIl9zIiwiYnVyZ2VyQ29uc3RydWN0b3IiLCJzdGF0ZSIsImluZ3JlZGllbnRzQ291bnRlcnMiLCJidW4iLCJjb3VudGVycyIsImZvckVhY2giLCJpbmdyZWRpZW50IiwiX2lkIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaW5ncmVkaWVudHMtY2F0ZWdvcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluZ3JlZGllbnRzQ2F0ZWdvcnlVSSB9IGZyb20gJ0B1aSc7XHJcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0b3JlJztcclxuXHJcbmltcG9ydCB0eXBlIHsgVEluZ3JlZGllbnRzQ2F0ZWdvcnlQcm9wcyB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCB0eXBlIHsgVEluZ3JlZGllbnQgfSBmcm9tICdAdXRpbHMtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZ3JlZGllbnRzQ2F0ZWdvcnkgPSAoe1xyXG4gIHRpdGxlLFxyXG4gIHRpdGxlUmVmLFxyXG4gIGluZ3JlZGllbnRzLFxyXG4gIHJlZixcclxufTogVEluZ3JlZGllbnRzQ2F0ZWdvcnlQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50ID0+IHtcclxuICAvLyDQn9C+0LvRg9GH0LDQtdC8INGB0L7RgdGC0L7Rj9C90LjQtSDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAg0LjQtyBSZWR1eC3RgdGC0L7RgNCwXHJcbiAgY29uc3QgYnVyZ2VyQ29uc3RydWN0b3IgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmJ1cmdlckNvbnN0cnVjdG9yKTtcclxuXHJcbiAgY29uc3QgaW5ncmVkaWVudHNDb3VudGVycyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgeyBidW4sIGluZ3JlZGllbnRzIH0gPSBidXJnZXJDb25zdHJ1Y3RvcjtcclxuICAgIGNvbnN0IGNvdW50ZXJzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcblxyXG4gICAgLy8g0KHRh9C40YLQsNC10Lwg0LrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGL0YfQvdGL0YUg0LjQvdCz0YDQtdC00LjQtdC90YLQvtCyICjQvdCw0YfQuNC90LrQuCwg0YHQvtGD0YHRiylcclxuICAgIGluZ3JlZGllbnRzLmZvckVhY2goKGluZ3JlZGllbnQ6IFRJbmdyZWRpZW50KSA9PiB7XHJcbiAgICAgIGlmICghY291bnRlcnNbaW5ncmVkaWVudC5faWRdKSBjb3VudGVyc1tpbmdyZWRpZW50Ll9pZF0gPSAwO1xyXG4gICAgICBjb3VudGVyc1tpbmdyZWRpZW50Ll9pZF0rKztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCR0YPQu9C60LAg0LLRgdC10LPQtNCwINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0LIg0LrQvtC70LjRh9C10YHRgtCy0LUgMiDRiNGC0YPQuiAo0LLQtdGA0YUg0Lgg0L3QuNC3KVxyXG4gICAgaWYgKGJ1bikgY291bnRlcnNbYnVuLl9pZF0gPSAyO1xyXG5cclxuICAgIHJldHVybiBjb3VudGVycztcclxuICB9LCBbYnVyZ2VyQ29uc3RydWN0b3JdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbmdyZWRpZW50c0NhdGVnb3J5VUlcclxuICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICB0aXRsZVJlZj17dGl0bGVSZWZ9XHJcbiAgICAgIGluZ3JlZGllbnRzPXtpbmdyZWRpZW50c31cclxuICAgICAgaW5ncmVkaWVudHNDb3VudGVycz17aW5ncmVkaWVudHNDb3VudGVyc31cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07Il0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL2luZ3JlZGllbnRzLWNhdGVnb3J5L2luZ3JlZGllbnRzLWNhdGVnb3J5LnRzeCJ9