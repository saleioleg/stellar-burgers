import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/burger-ingredient/burger-ingredient.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import {
  Counter,
  CurrencyIcon,
  AddButton
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport2_react["memo"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import styles from "/src/components/ui/burger-ingredient/burger-ingredient.module.css";
export const BurgerIngredientUI = memo(_c = function BurgerIngredientUI2({
  ingredient,
  count,
  handleAdd,
  locationState
}) {
  const { image, price, name, _id } = ingredient;
  return /* @__PURE__ */ jsxDEV("li", { className: styles.container, children: [
    /* @__PURE__ */ jsxDEV(Link, { className: styles.article, to: `/ingredients/${_id}`, state: locationState, children: [
      count && /* @__PURE__ */ jsxDEV(Counter, { count }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
        lineNumber: 24,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV("img", { src: image, alt: "картинка ингредиента." }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: `${styles.cost} mt-2 mb-2`, children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text text_type_digits-default mr-2", children: price }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: `text text_type_main-default ${styles.text}`, children: name }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      AddButton,
      {
        text: "Добавить",
        onClick: handleAdd,
        extraClass: `${styles.addButton} mt-8`
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
});
_c2 = BurgerIngredientUI;
var _c, _c2;
$RefreshReg$(_c, "BurgerIngredientUI$memo");
$RefreshReg$(_c2, "BurgerIngredientUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/burger-ingredient/burger-ingredient.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdUJrQjtBQXZCbEI7QUFBQSxFQUNFQTtBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBQ1AsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxZQUFZO0FBSXJCLE9BQU9DLFlBQVk7QUFFWixhQUFNQyxxQkFBcUJILEtBQUlJLEtBQUMsU0FBU0Qsb0JBQW1CO0FBQUEsRUFDakVFO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQ3dCLEdBQXNCO0FBQzlDLFFBQU0sRUFBRUMsT0FBT0MsT0FBT0MsTUFBTUMsSUFBSSxJQUFJUDtBQUVwQyxTQUNFLHVCQUFDLFFBQUcsV0FBV0gsT0FBT1csV0FDcEI7QUFBQSwyQkFBQyxRQUFLLFdBQVdYLE9BQU9ZLFNBQVMsSUFBSSxnQkFBZ0JGLEdBQUcsSUFBSSxPQUFPSixlQUNoRUY7QUFBQUEsZUFBUyx1QkFBQyxXQUFRLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFzQjtBQUFBLE1BQ2hDLHVCQUFDLFNBQUksS0FBS0csT0FBTyxLQUFJLDJCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTRDO0FBQUEsTUFDNUMsdUJBQUMsU0FBSSxXQUFXLEdBQUdQLE9BQU9hLElBQUksY0FDNUI7QUFBQSwrQkFBQyxPQUFFLFdBQVUsc0NBQXNDTCxtQkFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF5RDtBQUFBLFFBQ3pELHVCQUFDLGdCQUFhLE1BQUssYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE0QjtBQUFBLFdBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFHQTtBQUFBLE1BQ0EsdUJBQUMsT0FBRSxXQUFXLCtCQUErQlIsT0FBT2MsSUFBSSxJQUFLTCxrQkFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFrRTtBQUFBLFNBUHBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FRQTtBQUFBLElBQ0E7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLE1BQUs7QUFBQSxRQUNMLFNBQVNKO0FBQUFBLFFBQ1QsWUFBWSxHQUFHTCxPQUFPZSxTQUFTO0FBQUE7QUFBQSxNQUhqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFHeUM7QUFBQSxPQWIzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZUE7QUFFSixDQUFDO0FBQUVDLE1BMUJVZjtBQUFrQixJQUFBQyxJQUFBYztBQUFBQyxhQUFBZixJQUFBO0FBQUFlLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJDb3VudGVyIiwiQ3VycmVuY3lJY29uIiwiQWRkQnV0dG9uIiwibWVtbyIsIkxpbmsiLCJzdHlsZXMiLCJCdXJnZXJJbmdyZWRpZW50VUkiLCJfYyIsImluZ3JlZGllbnQiLCJjb3VudCIsImhhbmRsZUFkZCIsImxvY2F0aW9uU3RhdGUiLCJpbWFnZSIsInByaWNlIiwibmFtZSIsIl9pZCIsImNvbnRhaW5lciIsImFydGljbGUiLCJjb3N0IiwidGV4dCIsImFkZEJ1dHRvbiIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJidXJnZXItaW5ncmVkaWVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ291bnRlcixcbiAgQ3VycmVuY3lJY29uLFxuICBBZGRCdXR0b24sXG59IGZyb20gJ0BrcmdhYS9yZWFjdC1kZXZlbG9wZXItYnVyZ2VyLXVpLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHR5cGUgeyBUQnVyZ2VySW5ncmVkaWVudFVJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnVyZ2VyLWluZ3JlZGllbnQubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBCdXJnZXJJbmdyZWRpZW50VUkgPSBtZW1vKGZ1bmN0aW9uIEJ1cmdlckluZ3JlZGllbnRVSSh7XG4gIGluZ3JlZGllbnQsXG4gIGNvdW50LFxuICBoYW5kbGVBZGQsXG4gIGxvY2F0aW9uU3RhdGUsXG59OiBUQnVyZ2VySW5ncmVkaWVudFVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgaW1hZ2UsIHByaWNlLCBuYW1lLCBfaWQgfSA9IGluZ3JlZGllbnQ7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9IHRvPXtgL2luZ3JlZGllbnRzLyR7X2lkfWB9IHN0YXRlPXtsb2NhdGlvblN0YXRlfT5cbiAgICAgICAge2NvdW50ICYmIDxDb3VudGVyIGNvdW50PXtjb3VudH0gLz59XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwi0LrQsNGA0YLQuNC90LrQsCDQuNC90LPRgNC10LTQuNC10L3RgtCwLlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29zdH0gbXQtMiBtYi0yYH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHQgbXItMlwiPntwcmljZX08L3A+XG4gICAgICAgICAgPEN1cnJlbmN5SWNvbiB0eXBlPVwicHJpbWFyeVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgJHtzdHlsZXMudGV4dH1gfT57bmFtZX08L3A+XG4gICAgICA8L0xpbms+XG4gICAgICA8QWRkQnV0dG9uXG4gICAgICAgIHRleHQ9XCLQlNC+0LHQsNCy0LjRgtGMXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQWRkfVxuICAgICAgICBleHRyYUNsYXNzPXtgJHtzdHlsZXMuYWRkQnV0dG9ufSBtdC04YH1cbiAgICAgIC8+XG4gICAgPC9saT5cbiAgKTtcbn0pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL3VpL2J1cmdlci1pbmdyZWRpZW50L2J1cmdlci1pbmdyZWRpZW50LnRzeCJ9