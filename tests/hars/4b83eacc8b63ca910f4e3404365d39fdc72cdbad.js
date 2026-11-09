import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/ingredient-details/ingredient-details.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport1_react["memo"];
import styles from "/src/components/ui/ingredient-details/ingredient-details.module.css";
export const IngredientDetailsUI = memo(_c = function IngredientDetailsUI2({
  ingredientData
}) {
  const { name, image_large, calories, proteins, fat, carbohydrates } = ingredientData;
  return /* @__PURE__ */ jsxDEV("div", { className: styles.content, children: [
    /* @__PURE__ */ jsxDEV("img", { alt: "изображение ингредиента.", src: image_large }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h3", { className: "text text_type_main-medium mt-2 mb-4", children: name }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("ul", { className: `${styles.nutritional_values} text_type_main-default`, children: [
      /* @__PURE__ */ jsxDEV("li", { className: styles.nutritional_value, children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text mb-2", children: "Калории, ккал" }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: `text text_type_digits-default`, children: calories }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("li", { className: styles.nutritional_value, children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text mb-2", children: "Белки, г" }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: `text text_type_digits-default`, children: proteins }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("li", { className: styles.nutritional_value, children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text mb-2", children: "Жиры, г" }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: `text text_type_digits-default`, children: fat }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("li", { className: styles.nutritional_value, children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text mb-2", children: "Углеводы, г" }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: `text text_type_digits-default`, children: carbohydrates }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
});
_c2 = IngredientDetailsUI;
var _c, _c2;
$RefreshReg$(_c, "IngredientDetailsUI$memo");
$RefreshReg$(_c2, "IngredientDetailsUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/ingredient-details/ingredient-details.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYU07QUFiTixTQUFTQSxZQUFZO0FBSXJCLE9BQU9DLFlBQVk7QUFFWixhQUFNQyxzQkFBc0JGLEtBQUlHLEtBQUMsU0FBU0QscUJBQW9CO0FBQUEsRUFDbkVFO0FBQ3dCLEdBQXNCO0FBQzlDLFFBQU0sRUFBRUMsTUFBTUMsYUFBYUMsVUFBVUMsVUFBVUMsS0FBS0MsY0FBYyxJQUFJTjtBQUV0RSxTQUNFLHVCQUFDLFNBQUksV0FBV0gsT0FBT1UsU0FDckI7QUFBQSwyQkFBQyxTQUFJLEtBQUksNEJBQTJCLEtBQUtMLGVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBcUQ7QUFBQSxJQUNyRCx1QkFBQyxRQUFHLFdBQVUsd0NBQXdDRCxrQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyRDtBQUFBLElBQzNELHVCQUFDLFFBQUcsV0FBVyxHQUFHSixPQUFPVyxrQkFBa0IsMkJBQ3pDO0FBQUEsNkJBQUMsUUFBRyxXQUFXWCxPQUFPWSxtQkFDcEI7QUFBQSwrQkFBQyxPQUFFLFdBQVUsYUFBWSw2QkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFzQztBQUFBLFFBQ3RDLHVCQUFDLE9BQUUsV0FBVyxpQ0FBa0NOLHNCQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXlEO0FBQUEsV0FGM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUdBO0FBQUEsTUFDQSx1QkFBQyxRQUFHLFdBQVdOLE9BQU9ZLG1CQUNwQjtBQUFBLCtCQUFDLE9BQUUsV0FBVSxhQUFZLHdCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlDO0FBQUEsUUFDakMsdUJBQUMsT0FBRSxXQUFXLGlDQUFrQ0wsc0JBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeUQ7QUFBQSxXQUYzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0E7QUFBQSxNQUNBLHVCQUFDLFFBQUcsV0FBV1AsT0FBT1ksbUJBQ3BCO0FBQUEsK0JBQUMsT0FBRSxXQUFVLGFBQVksdUJBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZ0M7QUFBQSxRQUNoQyx1QkFBQyxPQUFFLFdBQVcsaUNBQWtDSixpQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFvRDtBQUFBLFdBRnREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFHQTtBQUFBLE1BQ0EsdUJBQUMsUUFBRyxXQUFXUixPQUFPWSxtQkFDcEI7QUFBQSwrQkFBQyxPQUFFLFdBQVUsYUFBWSwyQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFvQztBQUFBLFFBQ3BDLHVCQUFDLE9BQUUsV0FBVyxpQ0FBa0NILDJCQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQThEO0FBQUEsV0FGaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUdBO0FBQUEsU0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWlCQTtBQUFBLE9BcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FxQkE7QUFFSixDQUFDO0FBQUVJLE1BN0JVWjtBQUFtQixJQUFBQyxJQUFBVztBQUFBQyxhQUFBWixJQUFBO0FBQUFZLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJtZW1vIiwic3R5bGVzIiwiSW5ncmVkaWVudERldGFpbHNVSSIsIl9jIiwiaW5ncmVkaWVudERhdGEiLCJuYW1lIiwiaW1hZ2VfbGFyZ2UiLCJjYWxvcmllcyIsInByb3RlaW5zIiwiZmF0IiwiY2FyYm9oeWRyYXRlcyIsImNvbnRlbnQiLCJudXRyaXRpb25hbF92YWx1ZXMiLCJudXRyaXRpb25hbF92YWx1ZSIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpbmdyZWRpZW50LWRldGFpbHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0eXBlIHsgSW5ncmVkaWVudERldGFpbHNVSVByb3BzIH0gZnJvbSAnLi90eXBlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZ3JlZGllbnQtZGV0YWlscy5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEluZ3JlZGllbnREZXRhaWxzVUkgPSBtZW1vKGZ1bmN0aW9uIEluZ3JlZGllbnREZXRhaWxzVUkoe1xuICBpbmdyZWRpZW50RGF0YSxcbn06IEluZ3JlZGllbnREZXRhaWxzVUlQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBuYW1lLCBpbWFnZV9sYXJnZSwgY2Fsb3JpZXMsIHByb3RlaW5zLCBmYXQsIGNhcmJvaHlkcmF0ZXMgfSA9IGluZ3JlZGllbnREYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgIDxpbWcgYWx0PVwi0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC90LPRgNC10LTQuNC10L3RgtCwLlwiIHNyYz17aW1hZ2VfbGFyZ2V9IC8+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gbXQtMiBtYi00XCI+e25hbWV9PC9oMz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlcy5udXRyaXRpb25hbF92YWx1ZXN9IHRleHRfdHlwZV9tYWluLWRlZmF1bHRgfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm51dHJpdGlvbmFsX3ZhbHVlfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0IG1iLTJcIj7QmtCw0LvQvtGA0LjQuCwg0LrQutCw0Ls8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHRgfT57Y2Fsb3JpZXN9PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubnV0cml0aW9uYWxfdmFsdWV9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgbWItMlwiPtCR0LXQu9C60LgsINCzPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQgdGV4dF90eXBlX2RpZ2l0cy1kZWZhdWx0YH0+e3Byb3RlaW5zfTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm51dHJpdGlvbmFsX3ZhbHVlfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0IG1iLTJcIj7QltC40YDRiywg0LM8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHRgfT57ZmF0fTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm51dHJpdGlvbmFsX3ZhbHVlfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0IG1iLTJcIj7Qo9Cz0LvQtdCy0L7QtNGLLCDQszwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdGB9PntjYXJib2h5ZHJhdGVzfTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy91aS9pbmdyZWRpZW50LWRldGFpbHMvaW5ncmVkaWVudC1kZXRhaWxzLnRzeCJ9