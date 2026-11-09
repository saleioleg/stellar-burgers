import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/burger-constructor-element/burger-constructor-element.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { BurgerConstructorElementUI } from "/src/components/ui/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport2_react["memo"];
import { useDispatch } from "/src/services/store.ts";
import {
  removeIngredient,
  moveIngredient
} from "/src/services/constructor-slice.ts";
export const BurgerConstructorElement = _s(memo(_c = _s(function BurgerConstructorElement2({
  ingredient,
  index,
  totalItems
}) {
  _s();
  const dispatch = useDispatch();
  const handleMoveDown = () => {
    dispatch(moveIngredient({ index, moveIndex: index + 1 }));
  };
  const handleMoveUp = () => {
    dispatch(moveIngredient({ index, moveIndex: index - 1 }));
  };
  const handleClose = () => {
    dispatch(removeIngredient(ingredient.id));
  };
  return /* @__PURE__ */ jsxDEV(
    BurgerConstructorElementUI,
    {
      ingredient,
      index,
      totalItems,
      handleMoveUp,
      handleMoveDown,
      handleClose
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/burger-constructor-element/burger-constructor-element.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  );
}, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
  return [useDispatch];
})), "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
  return [useDispatch];
});
_c2 = BurgerConstructorElement;
var _c, _c2;
$RefreshReg$(_c, "BurgerConstructorElement$memo");
$RefreshReg$(_c2, "BurgerConstructorElement");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/burger-constructor-element/burger-constructor-element.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/burger-constructor-element/burger-constructor-element.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/burger-constructor-element/burger-constructor-element.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBOEJJOztBQTlCSixTQUFTQSxrQ0FBa0M7QUFDM0MsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxtQkFBbUI7QUFDNUI7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBSUEsYUFBTUMsMkJBQXdCQyxHQUFHTCxLQUFJTSxLQUFBRCxHQUFDLFNBQVNELDBCQUF5QjtBQUFBLEVBQzdFRztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUM2QixHQUFzQjtBQUFBSixLQUFBO0FBQ25ELFFBQU1LLFdBQVdULFlBQVk7QUFFN0IsUUFBTVUsaUJBQWlCQSxNQUFZO0FBQ2pDRCxhQUFTUCxlQUFlLEVBQUVLLE9BQU9JLFdBQVdKLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUMxRDtBQUVBLFFBQU1LLGVBQWVBLE1BQVk7QUFDL0JILGFBQVNQLGVBQWUsRUFBRUssT0FBT0ksV0FBV0osUUFBUSxFQUFFLENBQUMsQ0FBQztBQUFBLEVBQzFEO0FBRUEsUUFBTU0sY0FBY0EsTUFBWTtBQUM5QkosYUFBU1IsaUJBQWlCSyxXQUFXUSxFQUFFLENBQUM7QUFBQSxFQUMxQztBQUVBLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTTJCO0FBRy9CLEdBQUM7QUFBQSxVQXhCa0JkLFdBQVc7QUFBQSxFQXdCN0IsR0FBQztBQUFBLFVBeEJpQkEsV0FBVztBQUFBO0FBd0IzQmUsTUE3QlVaO0FBQXdCLElBQUFFLElBQUFVO0FBQUFDLGFBQUFYLElBQUE7QUFBQVcsYUFBQUQsS0FBQSIsIm5hbWVzIjpbIkJ1cmdlckNvbnN0cnVjdG9yRWxlbWVudFVJIiwibWVtbyIsInVzZURpc3BhdGNoIiwicmVtb3ZlSW5ncmVkaWVudCIsIm1vdmVJbmdyZWRpZW50IiwiQnVyZ2VyQ29uc3RydWN0b3JFbGVtZW50IiwiX3MiLCJfYyIsImluZ3JlZGllbnQiLCJpbmRleCIsInRvdGFsSXRlbXMiLCJkaXNwYXRjaCIsImhhbmRsZU1vdmVEb3duIiwibW92ZUluZGV4IiwiaGFuZGxlTW92ZVVwIiwiaGFuZGxlQ2xvc2UiLCJpZCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJidXJnZXItY29uc3RydWN0b3ItZWxlbWVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVyZ2VyQ29uc3RydWN0b3JFbGVtZW50VUkgfSBmcm9tICdAdWknO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0b3JlJztcclxuaW1wb3J0IHtcclxuICByZW1vdmVJbmdyZWRpZW50LFxyXG4gIG1vdmVJbmdyZWRpZW50LFxyXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0cnVjdG9yLXNsaWNlJztcclxuXHJcbmltcG9ydCB0eXBlIHsgQnVyZ2VyQ29uc3RydWN0b3JFbGVtZW50UHJvcHMgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1cmdlckNvbnN0cnVjdG9yRWxlbWVudCA9IG1lbW8oZnVuY3Rpb24gQnVyZ2VyQ29uc3RydWN0b3JFbGVtZW50KHtcclxuICBpbmdyZWRpZW50LFxyXG4gIGluZGV4LFxyXG4gIHRvdGFsSXRlbXMsXHJcbn06IEJ1cmdlckNvbnN0cnVjdG9yRWxlbWVudFByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW92ZURvd24gPSAoKTogdm9pZCA9PiB7XHJcbiAgICBkaXNwYXRjaChtb3ZlSW5ncmVkaWVudCh7IGluZGV4LCBtb3ZlSW5kZXg6IGluZGV4ICsgMSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW92ZVVwID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgZGlzcGF0Y2gobW92ZUluZ3JlZGllbnQoeyBpbmRleCwgbW92ZUluZGV4OiBpbmRleCAtIDEgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgZGlzcGF0Y2gocmVtb3ZlSW5ncmVkaWVudChpbmdyZWRpZW50LmlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXJnZXJDb25zdHJ1Y3RvckVsZW1lbnRVSVxyXG4gICAgICBpbmdyZWRpZW50PXtpbmdyZWRpZW50fVxyXG4gICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgIHRvdGFsSXRlbXM9e3RvdGFsSXRlbXN9XHJcbiAgICAgIGhhbmRsZU1vdmVVcD17aGFuZGxlTW92ZVVwfVxyXG4gICAgICBoYW5kbGVNb3ZlRG93bj17aGFuZGxlTW92ZURvd259XHJcbiAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgIC8+XHJcbiAgKTtcclxufSk7Il0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL2J1cmdlci1jb25zdHJ1Y3Rvci1lbGVtZW50L2J1cmdlci1jb25zdHJ1Y3Rvci1lbGVtZW50LnRzeCJ9