import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/burger-constructor-element/burger-constructor-element.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import {
  ConstructorElement,
  MoveButton
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport2_react["memo"];
import styles from "/src/components/ui/burger-constructor-element/burger-constructor-element.module.css";
export const BurgerConstructorElementUI = memo(_c = function BurgerConstructorElementUI2({
  ingredient,
  index,
  totalItems,
  handleMoveUp,
  handleMoveDown,
  handleClose
}) {
  return /* @__PURE__ */ jsxDEV("li", { className: `${styles.element} mb-4 mr-2`, children: [
    /* @__PURE__ */ jsxDEV(
      MoveButton,
      {
        handleMoveDown,
        handleMoveUp,
        isUpDisabled: index === 0,
        isDownDisabled: index === totalItems - 1
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor-element/burger-constructor-element.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: `${styles.element_fullwidth} ml-2`, children: /* @__PURE__ */ jsxDEV(
      ConstructorElement,
      {
        text: ingredient.name,
        price: ingredient.price,
        thumbnail: ingredient.image,
        handleClose
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor-element/burger-constructor-element.tsx",
        lineNumber: 28,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor-element/burger-constructor-element.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor-element/burger-constructor-element.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
});
_c2 = BurgerConstructorElementUI;
var _c, _c2;
$RefreshReg$(_c, "BurgerConstructorElementUI$memo");
$RefreshReg$(_c2, "BurgerConstructorElementUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/burger-constructor-element/burger-constructor-element.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/burger-constructor-element/burger-constructor-element.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/burger-constructor-element/burger-constructor-element.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0JNO0FBcEJOO0FBQUEsRUFDRUE7QUFBQUEsRUFDQUM7QUFBQUEsT0FDSztBQUNQLFNBQVNDLFlBQVk7QUFJckIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLDZCQUE2QkYsS0FBSUcsS0FBQyxTQUFTRCw0QkFBMkI7QUFBQSxFQUNqRkU7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFDK0IsR0FBc0I7QUFDckQsU0FDRSx1QkFBQyxRQUFHLFdBQVcsR0FBR1IsT0FBT1MsT0FBTyxjQUM5QjtBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQztBQUFBLFFBQ0E7QUFBQSxRQUNBLGNBQWNMLFVBQVU7QUFBQSxRQUN4QixnQkFBZ0JBLFVBQVVDLGFBQWE7QUFBQTtBQUFBLE1BSnpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUkyQztBQUFBLElBRTNDLHVCQUFDLFNBQUksV0FBVyxHQUFHTCxPQUFPVSxpQkFBaUIsU0FDekM7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLE1BQU1QLFdBQVdRO0FBQUFBLFFBQ2pCLE9BQU9SLFdBQVdTO0FBQUFBLFFBQ2xCLFdBQVdULFdBQVdVO0FBQUFBLFFBQ3RCO0FBQUE7QUFBQSxNQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUkyQixLQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBT0E7QUFBQSxPQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FlQTtBQUVKLENBQUM7QUFBRUMsTUExQlViO0FBQTBCLElBQUFDLElBQUFZO0FBQUFDLGFBQUFiLElBQUE7QUFBQWEsYUFBQUQsS0FBQSIsIm5hbWVzIjpbIkNvbnN0cnVjdG9yRWxlbWVudCIsIk1vdmVCdXR0b24iLCJtZW1vIiwic3R5bGVzIiwiQnVyZ2VyQ29uc3RydWN0b3JFbGVtZW50VUkiLCJfYyIsImluZ3JlZGllbnQiLCJpbmRleCIsInRvdGFsSXRlbXMiLCJoYW5kbGVNb3ZlVXAiLCJoYW5kbGVNb3ZlRG93biIsImhhbmRsZUNsb3NlIiwiZWxlbWVudCIsImVsZW1lbnRfZnVsbHdpZHRoIiwibmFtZSIsInByaWNlIiwiaW1hZ2UiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYnVyZ2VyLWNvbnN0cnVjdG9yLWVsZW1lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnN0cnVjdG9yRWxlbWVudCxcbiAgTW92ZUJ1dHRvbixcbn0gZnJvbSAnQGtyZ2FhL3JlYWN0LWRldmVsb3Blci1idXJnZXItdWktY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdHlwZSB7IEJ1cmdlckNvbnN0cnVjdG9yRWxlbWVudFVJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnVyZ2VyLWNvbnN0cnVjdG9yLWVsZW1lbnQubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBCdXJnZXJDb25zdHJ1Y3RvckVsZW1lbnRVSSA9IG1lbW8oZnVuY3Rpb24gQnVyZ2VyQ29uc3RydWN0b3JFbGVtZW50VUkoe1xuICBpbmdyZWRpZW50LFxuICBpbmRleCxcbiAgdG90YWxJdGVtcyxcbiAgaGFuZGxlTW92ZVVwLFxuICBoYW5kbGVNb3ZlRG93bixcbiAgaGFuZGxlQ2xvc2UsXG59OiBCdXJnZXJDb25zdHJ1Y3RvckVsZW1lbnRVSVByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2Ake3N0eWxlcy5lbGVtZW50fSBtYi00IG1yLTJgfT5cbiAgICAgIDxNb3ZlQnV0dG9uXG4gICAgICAgIGhhbmRsZU1vdmVEb3duPXtoYW5kbGVNb3ZlRG93bn1cbiAgICAgICAgaGFuZGxlTW92ZVVwPXtoYW5kbGVNb3ZlVXB9XG4gICAgICAgIGlzVXBEaXNhYmxlZD17aW5kZXggPT09IDB9XG4gICAgICAgIGlzRG93bkRpc2FibGVkPXtpbmRleCA9PT0gdG90YWxJdGVtcyAtIDF9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5lbGVtZW50X2Z1bGx3aWR0aH0gbWwtMmB9PlxuICAgICAgICA8Q29uc3RydWN0b3JFbGVtZW50XG4gICAgICAgICAgdGV4dD17aW5ncmVkaWVudC5uYW1lfVxuICAgICAgICAgIHByaWNlPXtpbmdyZWRpZW50LnByaWNlfVxuICAgICAgICAgIHRodW1ibmFpbD17aW5ncmVkaWVudC5pbWFnZX1cbiAgICAgICAgICBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApO1xufSk7XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvdWkvYnVyZ2VyLWNvbnN0cnVjdG9yLWVsZW1lbnQvYnVyZ2VyLWNvbnN0cnVjdG9yLWVsZW1lbnQudHN4In0=