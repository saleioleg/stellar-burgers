import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/burger-ingredient/burger-ingredient.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { BurgerIngredientUI } from "/src/components/ui/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport2_react["memo"];
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { addIngredient } from "/src/services/constructor-slice.ts";
import { useDispatch } from "/src/services/store.ts";
export const BurgerIngredient = _s(memo(_c = _s(function BurgerIngredient2({
  ingredient,
  count
}) {
  _s();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addIngredient(ingredient));
  };
  return /* @__PURE__ */ jsxDEV(
    BurgerIngredientUI,
    {
      ingredient,
      count,
      locationState: { background: location },
      handleAdd
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/burger-ingredient/burger-ingredient.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}, "MQggm+TQsuvWCz9fxLEdTr94DHM=", false, function() {
  return [useLocation, useDispatch];
})), "MQggm+TQsuvWCz9fxLEdTr94DHM=", false, function() {
  return [useLocation, useDispatch];
});
_c2 = BurgerIngredient;
var _c, _c2;
$RefreshReg$(_c, "BurgerIngredient$memo");
$RefreshReg$(_c2, "BurgerIngredient");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/burger-ingredient/burger-ingredient.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/burger-ingredient/burger-ingredient.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/burger-ingredient/burger-ingredient.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUJJOztBQXJCSixTQUFTQSwwQkFBMEI7QUFDbkMsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxtQkFBbUI7QUFFNUIsU0FBU0MscUJBQXFCO0FBQzlCLFNBQVNDLG1CQUFtQjtBQUlyQixhQUFNQyxtQkFBZ0JDLEdBQUdMLEtBQUlNLEtBQUFELEdBQUMsU0FBU0Qsa0JBQWlCO0FBQUEsRUFDN0RHO0FBQUFBLEVBQ0FDO0FBQ3NCLEdBQXNCO0FBQUFILEtBQUE7QUFDNUMsUUFBTUksV0FBV1IsWUFBWTtBQUM3QixRQUFNUyxXQUFXUCxZQUFZO0FBRTdCLFFBQU1RLFlBQVlBLE1BQVk7QUFDNUJELGFBQVNSLGNBQWNLLFVBQVUsQ0FBQztBQUFBLEVBQ3BDO0FBRUEsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQSxlQUFlLEVBQUVLLFlBQVlILFNBQVM7QUFBQSxNQUN0QztBQUFBO0FBQUEsSUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJdUI7QUFHM0IsR0FBQztBQUFBLFVBZmtCUixhQUNBRSxXQUFXO0FBQUEsRUFjN0IsR0FBQztBQUFBLFVBZmlCRixhQUNBRSxXQUFXO0FBQUE7QUFjM0JVLE1BbkJVVDtBQUFnQixJQUFBRSxJQUFBTztBQUFBQyxhQUFBUixJQUFBO0FBQUFRLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJCdXJnZXJJbmdyZWRpZW50VUkiLCJtZW1vIiwidXNlTG9jYXRpb24iLCJhZGRJbmdyZWRpZW50IiwidXNlRGlzcGF0Y2giLCJCdXJnZXJJbmdyZWRpZW50IiwiX3MiLCJfYyIsImluZ3JlZGllbnQiLCJjb3VudCIsImxvY2F0aW9uIiwiZGlzcGF0Y2giLCJoYW5kbGVBZGQiLCJiYWNrZ3JvdW5kIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImJ1cmdlci1pbmdyZWRpZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXJnZXJJbmdyZWRpZW50VUkgfSBmcm9tICdAdWknO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgYWRkSW5ncmVkaWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0cnVjdG9yLXNsaWNlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFRCdXJnZXJJbmdyZWRpZW50UHJvcHMgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1cmdlckluZ3JlZGllbnQgPSBtZW1vKGZ1bmN0aW9uIEJ1cmdlckluZ3JlZGllbnQoe1xyXG4gIGluZ3JlZGllbnQsXHJcbiAgY291bnQsXHJcbn06IFRCdXJnZXJJbmdyZWRpZW50UHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkSW5ncmVkaWVudChpbmdyZWRpZW50KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXJnZXJJbmdyZWRpZW50VUlcclxuICAgICAgaW5ncmVkaWVudD17aW5ncmVkaWVudH1cclxuICAgICAgY291bnQ9e2NvdW50fVxyXG4gICAgICBsb2NhdGlvblN0YXRlPXt7IGJhY2tncm91bmQ6IGxvY2F0aW9uIH19XHJcbiAgICAgIGhhbmRsZUFkZD17aGFuZGxlQWRkfVxyXG4gICAgLz5cclxuICApO1xyXG59KTsiXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvYnVyZ2VyLWluZ3JlZGllbnQvYnVyZ2VyLWluZ3JlZGllbnQudHN4In0=