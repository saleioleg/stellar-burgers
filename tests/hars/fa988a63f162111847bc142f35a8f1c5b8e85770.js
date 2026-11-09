import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/burger-constructor/burger-constructor.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { BurgerConstructorElement, Modal } from "/src/components/index.ts";
import {
  Button,
  ConstructorElement,
  CurrencyIcon
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import { Preloader, OrderDetailsUI } from "/src/components/ui/index.ts";
import styles from "/src/components/ui/burger-constructor/burger-constructor.module.css";
export const BurgerConstructorUI = ({
  constructorItems,
  orderRequest,
  price,
  orderModalData,
  onOrderClick,
  closeOrderModal
}) => /* @__PURE__ */ jsxDEV("section", { className: styles.burger_constructor, children: [
  constructorItems.bun ? /* @__PURE__ */ jsxDEV("div", { className: `${styles.element} mb-4 mr-4`, children: /* @__PURE__ */ jsxDEV(
    ConstructorElement,
    {
      type: "top",
      isLocked: true,
      text: `${constructorItems.bun.name} (верх)`,
      price: constructorItems.bun.price,
      thumbnail: constructorItems.bun.image
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
      lineNumber: 25,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 24,
    columnNumber: 3
  }, this) : /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `${styles.noBuns} ${styles.noBunsTop} ml-8 mb-4 mr-5 text text_type_main-default`,
      children: "Выберите булки"
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
      lineNumber: 34,
      columnNumber: 3
    },
    this
  ),
  /* @__PURE__ */ jsxDEV("ul", { className: styles.elements, children: constructorItems.ingredients.length > 0 ? constructorItems.ingredients.map(
    (item, index) => /* @__PURE__ */ jsxDEV(
      BurgerConstructorElement,
      {
        ingredient: item,
        index,
        totalItems: constructorItems.ingredients.length
      },
      item.id,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
        lineNumber: 44,
        columnNumber: 7
      },
      this
    )
  ) : /* @__PURE__ */ jsxDEV("li", { className: `${styles.noBuns} ml-8 mb-4 mr-5 text text_type_main-default`, children: "Выберите начинку" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this),
  constructorItems.bun ? /* @__PURE__ */ jsxDEV("div", { className: `${styles.element} mt-4 mr-4`, children: /* @__PURE__ */ jsxDEV(
    ConstructorElement,
    {
      type: "bottom",
      isLocked: true,
      text: `${constructorItems.bun.name} (низ)`,
      price: constructorItems.bun.price,
      thumbnail: constructorItems.bun.image
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
      lineNumber: 60,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 59,
    columnNumber: 3
  }, this) : /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `${styles.noBuns} ${styles.noBunsBottom} ml-8 mb-4 mr-5 text text_type_main-default`,
      children: "Выберите булки"
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
      lineNumber: 69,
      columnNumber: 3
    },
    this
  ),
  /* @__PURE__ */ jsxDEV("div", { className: `${styles.total} mt-10 mr-4`, children: [
    /* @__PURE__ */ jsxDEV("div", { className: `${styles.cost} mr-10`, children: [
      /* @__PURE__ */ jsxDEV("p", { className: `text ${styles.text} mr-2`, children: price }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Button, { htmlType: "button", type: "primary", size: "large", onClick: onOrderClick, children: "Оформить заказ" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this),
  orderRequest && /* @__PURE__ */ jsxDEV(Modal, { onClose: closeOrderModal, title: "Оформляем заказ...", children: /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 87,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 86,
    columnNumber: 3
  }, this),
  orderModalData && /* @__PURE__ */ jsxDEV(Modal, { onClose: closeOrderModal, title: orderRequest ? "Оформляем заказ..." : "", children: /* @__PURE__ */ jsxDEV(OrderDetailsUI, { orderNumber: orderModalData.number }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 93,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
    lineNumber: 92,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx",
  lineNumber: 22,
  columnNumber: 1
}, this);
_c = BurgerConstructorUI;
var _c;
$RefreshReg$(_c, "BurgerConstructorUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/burger-constructor/burger-constructor.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBd0JRO0FBeEJSLFNBQVNBLDBCQUEwQkMsYUFBYTtBQUNoRDtBQUFBLEVBQ0VDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLE9BQ0s7QUFDUCxTQUFTQyxXQUFXQyxzQkFBc0I7QUFLMUMsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLHNCQUFzQkEsQ0FBQztBQUFBLEVBQ2xDQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUN3QixNQUN4Qix1QkFBQyxhQUFRLFdBQVdQLE9BQU9RLG9CQUN4Qk47QUFBQUEsbUJBQWlCTyxNQUNoQix1QkFBQyxTQUFJLFdBQVcsR0FBR1QsT0FBT1UsT0FBTyxjQUMvQjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0w7QUFBQSxNQUNBLE1BQU0sR0FBR1IsaUJBQWlCTyxJQUFJRSxJQUFJO0FBQUEsTUFDbEMsT0FBT1QsaUJBQWlCTyxJQUFJTDtBQUFBQSxNQUM1QixXQUFXRixpQkFBaUJPLElBQUlHO0FBQUFBO0FBQUFBLElBTGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUt3QyxLQU4xQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUEsSUFFQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsV0FBVyxHQUFHWixPQUFPYSxNQUFNLElBQUliLE9BQU9jLFNBQVM7QUFBQSxNQUE4QztBQUFBO0FBQUEsSUFEL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUE7QUFBQSxFQUVGLHVCQUFDLFFBQUcsV0FBV2QsT0FBT2UsVUFDbkJiLDJCQUFpQmMsWUFBWUMsU0FBUyxJQUNyQ2YsaUJBQWlCYyxZQUFZRTtBQUFBQSxJQUMzQixDQUFDQyxNQUE4QkMsVUFDN0I7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFlBQVlEO0FBQUFBLFFBQ1o7QUFBQSxRQUNBLFlBQVlqQixpQkFBaUJjLFlBQVlDO0FBQUFBO0FBQUFBLE1BQ3BDRSxLQUFLRTtBQUFBQSxNQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJZTtBQUFBLEVBR25CLElBRUEsdUJBQUMsUUFBRyxXQUFXLEdBQUdyQixPQUFPYSxNQUFNLCtDQUE4QyxnQ0FBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBLEtBZko7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWlCQTtBQUFBLEVBQ0NYLGlCQUFpQk8sTUFDaEIsdUJBQUMsU0FBSSxXQUFXLEdBQUdULE9BQU9VLE9BQU8sY0FDL0I7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE1BQUs7QUFBQSxNQUNMO0FBQUEsTUFDQSxNQUFNLEdBQUdSLGlCQUFpQk8sSUFBSUUsSUFBSTtBQUFBLE1BQ2xDLE9BQU9ULGlCQUFpQk8sSUFBSUw7QUFBQUEsTUFDNUIsV0FBV0YsaUJBQWlCTyxJQUFJRztBQUFBQTtBQUFBQSxJQUxsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLd0MsS0FOMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFBLElBRUE7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVcsR0FBR1osT0FBT2EsTUFBTSxJQUFJYixPQUFPc0IsWUFBWTtBQUFBLE1BQThDO0FBQUE7QUFBQSxJQURsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQTtBQUFBLEVBRUYsdUJBQUMsU0FBSSxXQUFXLEdBQUd0QixPQUFPdUIsS0FBSyxlQUM3QjtBQUFBLDJCQUFDLFNBQUksV0FBVyxHQUFHdkIsT0FBT3dCLElBQUksVUFDNUI7QUFBQSw2QkFBQyxPQUFFLFdBQVcsUUFBUXhCLE9BQU95QixJQUFJLFNBQVVyQixtQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFpRDtBQUFBLE1BQ2pELHVCQUFDLGdCQUFhLE1BQUssYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE0QjtBQUFBLFNBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHQTtBQUFBLElBQ0EsdUJBQUMsVUFBTyxVQUFTLFVBQVMsTUFBSyxXQUFVLE1BQUssU0FBUSxTQUFTRSxjQUFhLDhCQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxPQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRQTtBQUFBLEVBRUNILGdCQUNDLHVCQUFDLFNBQU0sU0FBU0ksaUJBQWlCLE9BQU8sc0JBQ3RDLGlDQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFVLEtBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQUEsRUFHREYsa0JBQ0MsdUJBQUMsU0FBTSxTQUFTRSxpQkFBaUIsT0FBT0osZUFBZSx1QkFBdUIsSUFDNUUsaUNBQUMsa0JBQWUsYUFBYUUsZUFBZXFCLFVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUQsS0FEckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQUEsS0F4RUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQTBFQTtBQUNBQyxLQW5GVzFCO0FBQW1CLElBQUEwQjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiQnVyZ2VyQ29uc3RydWN0b3JFbGVtZW50IiwiTW9kYWwiLCJCdXR0b24iLCJDb25zdHJ1Y3RvckVsZW1lbnQiLCJDdXJyZW5jeUljb24iLCJQcmVsb2FkZXIiLCJPcmRlckRldGFpbHNVSSIsInN0eWxlcyIsIkJ1cmdlckNvbnN0cnVjdG9yVUkiLCJjb25zdHJ1Y3Rvckl0ZW1zIiwib3JkZXJSZXF1ZXN0IiwicHJpY2UiLCJvcmRlck1vZGFsRGF0YSIsIm9uT3JkZXJDbGljayIsImNsb3NlT3JkZXJNb2RhbCIsImJ1cmdlcl9jb25zdHJ1Y3RvciIsImJ1biIsImVsZW1lbnQiLCJuYW1lIiwiaW1hZ2UiLCJub0J1bnMiLCJub0J1bnNUb3AiLCJlbGVtZW50cyIsImluZ3JlZGllbnRzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJub0J1bnNCb3R0b20iLCJ0b3RhbCIsImNvc3QiLCJ0ZXh0IiwibnVtYmVyIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYnVyZ2VyLWNvbnN0cnVjdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXJnZXJDb25zdHJ1Y3RvckVsZW1lbnQsIE1vZGFsIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb25zdHJ1Y3RvckVsZW1lbnQsXG4gIEN1cnJlbmN5SWNvbixcbn0gZnJvbSAnQGtyZ2FhL3JlYWN0LWRldmVsb3Blci1idXJnZXItdWktY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQcmVsb2FkZXIsIE9yZGVyRGV0YWlsc1VJIH0gZnJvbSAnQHVpJztcblxuaW1wb3J0IHR5cGUgeyBCdXJnZXJDb25zdHJ1Y3RvclVJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuaW1wb3J0IHR5cGUgeyBUQ29uc3RydWN0b3JJbmdyZWRpZW50IH0gZnJvbSAnQHV0aWxzLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1cmdlci1jb25zdHJ1Y3Rvci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEJ1cmdlckNvbnN0cnVjdG9yVUkgPSAoe1xuICBjb25zdHJ1Y3Rvckl0ZW1zLFxuICBvcmRlclJlcXVlc3QsXG4gIHByaWNlLFxuICBvcmRlck1vZGFsRGF0YSxcbiAgb25PcmRlckNsaWNrLFxuICBjbG9zZU9yZGVyTW9kYWwsXG59OiBCdXJnZXJDb25zdHJ1Y3RvclVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcl9jb25zdHJ1Y3Rvcn0+XG4gICAge2NvbnN0cnVjdG9ySXRlbXMuYnVuID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5lbGVtZW50fSBtYi00IG1yLTRgfT5cbiAgICAgICAgPENvbnN0cnVjdG9yRWxlbWVudFxuICAgICAgICAgIHR5cGU9XCJ0b3BcIlxuICAgICAgICAgIGlzTG9ja2VkXG4gICAgICAgICAgdGV4dD17YCR7Y29uc3RydWN0b3JJdGVtcy5idW4ubmFtZX0gKNCy0LXRgNGFKWB9XG4gICAgICAgICAgcHJpY2U9e2NvbnN0cnVjdG9ySXRlbXMuYnVuLnByaWNlfVxuICAgICAgICAgIHRodW1ibmFpbD17Y29uc3RydWN0b3JJdGVtcy5idW4uaW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5ub0J1bnN9ICR7c3R5bGVzLm5vQnVuc1RvcH0gbWwtOCBtYi00IG1yLTUgdGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0YH1cbiAgICAgID5cbiAgICAgICAg0JLRi9Cx0LXRgNC40YLQtSDQsdGD0LvQutC4XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c30+XG4gICAgICB7Y29uc3RydWN0b3JJdGVtcy5pbmdyZWRpZW50cy5sZW5ndGggPiAwID8gKFxuICAgICAgICBjb25zdHJ1Y3Rvckl0ZW1zLmluZ3JlZGllbnRzLm1hcChcbiAgICAgICAgICAoaXRlbTogVENvbnN0cnVjdG9ySW5ncmVkaWVudCwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPEJ1cmdlckNvbnN0cnVjdG9yRWxlbWVudFxuICAgICAgICAgICAgICBpbmdyZWRpZW50PXtpdGVtfVxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIHRvdGFsSXRlbXM9e2NvbnN0cnVjdG9ySXRlbXMuaW5ncmVkaWVudHMubGVuZ3RofVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSA6IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5vQnVuc30gbWwtOCBtYi00IG1yLTUgdGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0YH0+XG4gICAgICAgICAg0JLRi9Cx0LXRgNC40YLQtSDQvdCw0YfQuNC90LrRg1xuICAgICAgICA8L2xpPlxuICAgICAgKX1cbiAgICA8L3VsPlxuICAgIHtjb25zdHJ1Y3Rvckl0ZW1zLmJ1biA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZWxlbWVudH0gbXQtNCBtci00YH0+XG4gICAgICAgIDxDb25zdHJ1Y3RvckVsZW1lbnRcbiAgICAgICAgICB0eXBlPVwiYm90dG9tXCJcbiAgICAgICAgICBpc0xvY2tlZFxuICAgICAgICAgIHRleHQ9e2Ake2NvbnN0cnVjdG9ySXRlbXMuYnVuLm5hbWV9ICjQvdC40LcpYH1cbiAgICAgICAgICBwcmljZT17Y29uc3RydWN0b3JJdGVtcy5idW4ucHJpY2V9XG4gICAgICAgICAgdGh1bWJuYWlsPXtjb25zdHJ1Y3Rvckl0ZW1zLmJ1bi5pbWFnZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICkgOiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5vQnVuc30gJHtzdHlsZXMubm9CdW5zQm90dG9tfSBtbC04IG1iLTQgbXItNSB0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHRgfVxuICAgICAgPlxuICAgICAgICDQktGL0LHQtdGA0LjRgtC1INCx0YPQu9C60LhcbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50b3RhbH0gbXQtMTAgbXItNGB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3N0fSBtci0xMGB9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0ICR7c3R5bGVzLnRleHR9IG1yLTJgfT57cHJpY2V9PC9wPlxuICAgICAgICA8Q3VycmVuY3lJY29uIHR5cGU9XCJwcmltYXJ5XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cImJ1dHRvblwiIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCIgb25DbGljaz17b25PcmRlckNsaWNrfT5cbiAgICAgICAg0J7RhNC+0YDQvNC40YLRjCDQt9Cw0LrQsNC3XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIHtvcmRlclJlcXVlc3QgJiYgKFxuICAgICAgPE1vZGFsIG9uQ2xvc2U9e2Nsb3NlT3JkZXJNb2RhbH0gdGl0bGU9eyfQntGE0L7RgNC80LvRj9C10Lwg0LfQsNC60LDQty4uLid9PlxuICAgICAgICA8UHJlbG9hZGVyIC8+XG4gICAgICA8L01vZGFsPlxuICAgICl9XG5cbiAgICB7b3JkZXJNb2RhbERhdGEgJiYgKFxuICAgICAgPE1vZGFsIG9uQ2xvc2U9e2Nsb3NlT3JkZXJNb2RhbH0gdGl0bGU9e29yZGVyUmVxdWVzdCA/ICfQntGE0L7RgNC80LvRj9C10Lwg0LfQsNC60LDQty4uLicgOiAnJ30+XG4gICAgICAgIDxPcmRlckRldGFpbHNVSSBvcmRlck51bWJlcj17b3JkZXJNb2RhbERhdGEubnVtYmVyfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICApfVxuICA8L3NlY3Rpb24+XG4pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL3VpL2J1cmdlci1jb25zdHJ1Y3Rvci9idXJnZXItY29uc3RydWN0b3IudHN4In0=