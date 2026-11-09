import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ingredient-details/ingredient-details.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { IngredientDetailsUI } from "/src/components/ui/index.ts";
import { useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { useSelector } from "/src/services/store.ts";
import { Preloader } from "/src/components/ui/preloader/index.ts";
export const IngredientDetails = () => {
  _s();
  const { id } = useParams();
  const { ingredients } = useSelector((state) => state.ingredients);
  const ingredientData = ingredients.find((item) => item._id === id);
  if (!ingredientData) {
    return /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ingredient-details/ingredient-details.tsx",
      lineNumber: 16,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(IngredientDetailsUI, { ingredientData }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ingredient-details/ingredient-details.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
};
_s(IngredientDetails, "f4O6lo7PR55r022JR9hgJZWZ7JM=", false, function() {
  return [useParams, useSelector];
});
_c = IngredientDetails;
var _c;
$RefreshReg$(_c, "IngredientDetails");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ingredient-details/ingredient-details.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ingredient-details/ingredient-details.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ingredient-details/ingredient-details.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZVc7O0FBZlgsU0FBU0EsMkJBQTJCO0FBQ3BDLFNBQVNDLGlCQUFpQjtBQUUxQixTQUFTQyxtQkFBbUI7QUFDNUIsU0FBU0MsaUJBQWlCO0FBSW5CLGFBQU1DLG9CQUF3QkEsTUFBTTtBQUFBQyxLQUFBO0FBQ3pDLFFBQU0sRUFBRUMsR0FBRyxJQUFJTCxVQUEwQjtBQUN6QyxRQUFNLEVBQUVNLFlBQVksSUFBSUwsWUFBWSxDQUFDTSxVQUFVQSxNQUFNRCxXQUFXO0FBRWhFLFFBQU1FLGlCQUFpQkYsWUFBWUcsS0FBSyxDQUFDQyxTQUFTQSxLQUFLQyxRQUFRTixFQUFFO0FBRWpFLE1BQUksQ0FBQ0csZ0JBQWdCO0FBQ25CLFdBQU8sdUJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVU7QUFBQSxFQUNuQjtBQUVBLFNBQU8sdUJBQUMsdUJBQW9CLGtCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW9EO0FBQzdEO0FBQUVKLEdBWFdELG1CQUFxQjtBQUFBLFVBQ2pCSCxXQUNTQyxXQUFXO0FBQUE7QUFBQVcsS0FGeEJUO0FBQXFCLElBQUFTO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJJbmdyZWRpZW50RGV0YWlsc1VJIiwidXNlUGFyYW1zIiwidXNlU2VsZWN0b3IiLCJQcmVsb2FkZXIiLCJJbmdyZWRpZW50RGV0YWlscyIsIl9zIiwiaWQiLCJpbmdyZWRpZW50cyIsInN0YXRlIiwiaW5ncmVkaWVudERhdGEiLCJmaW5kIiwiaXRlbSIsIl9pZCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtZGV0YWlscy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5ncmVkaWVudERldGFpbHNVSSB9IGZyb20gJ0B1aSc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gJy4uL3VpL3ByZWxvYWRlcic7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZ3JlZGllbnREZXRhaWxzOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXM8eyBpZDogc3RyaW5nIH0+KCk7XHJcbiAgY29uc3QgeyBpbmdyZWRpZW50cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pbmdyZWRpZW50cyk7XHJcblxyXG4gIGNvbnN0IGluZ3JlZGllbnREYXRhID0gaW5ncmVkaWVudHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IGlkKTtcclxuXHJcbiAgaWYgKCFpbmdyZWRpZW50RGF0YSkge1xyXG4gICAgcmV0dXJuIDxQcmVsb2FkZXIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPEluZ3JlZGllbnREZXRhaWxzVUkgaW5ncmVkaWVudERhdGE9e2luZ3JlZGllbnREYXRhfSAvPjtcclxufTtcclxuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL2luZ3JlZGllbnQtZGV0YWlscy9pbmdyZWRpZW50LWRldGFpbHMudHN4In0=