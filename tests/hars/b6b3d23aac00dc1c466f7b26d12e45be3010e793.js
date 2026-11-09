import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/order-info/order-info.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { OrderStatus } from "/src/components/index.ts";
import {
  CurrencyIcon,
  FormattedDate
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport3_react["memo"];
import styles from "/src/components/ui/order-info/order-info.module.css";
export const OrderInfoUI = memo(_c = function OrderInfoUI2({
  orderInfo
}) {
  return /* @__PURE__ */ jsxDEV("div", { className: styles.wrap, children: [
    /* @__PURE__ */ jsxDEV("h3", { className: `text text_type_main-medium  pb-3 pt-10 ${styles.header}`, children: orderInfo.name }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(OrderStatus, { status: orderInfo.status }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: `text text_type_main-medium pt-15 pb=6`, children: "Состав:" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("ul", { className: `${styles.list} mb-8`, children: Object.values(orderInfo.ingredientsInfo).map(
      (item, index) => /* @__PURE__ */ jsxDEV("li", { className: `pb-4 pr-6 ${styles.item}`, children: [
        /* @__PURE__ */ jsxDEV("div", { className: styles.img_wrap, children: /* @__PURE__ */ jsxDEV("div", { className: styles.border, children: /* @__PURE__ */ jsxDEV("img", { className: styles.img, src: item.image_mobile, alt: item.name }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
          lineNumber: 26,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default pl-4", children: item.name }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: `text text_type_digits-default pl-4 pr-4 ${styles.quantity}`,
            children: [
              item.count,
              " x ",
              item.price
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
            lineNumber: 31,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, index, true, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: styles.bottom, children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default text_color_inactive", children: /* @__PURE__ */ jsxDEV(FormattedDate, { date: orderInfo.date }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: `text text_type_digits-default pr-4 ${styles.total}`, children: orderInfo.total }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
});
_c2 = OrderInfoUI;
var _c, _c2;
$RefreshReg$(_c, "OrderInfoUI$memo");
$RefreshReg$(_c2, "OrderInfoUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/order-info/order-info.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JNO0FBaEJOLFNBQVNBLG1CQUFtQjtBQUM1QjtBQUFBLEVBQ0VDO0FBQUFBLEVBQ0FDO0FBQUFBLE9BQ0s7QUFDUCxTQUFTQyxZQUFZO0FBSXJCLE9BQU9DLFlBQVk7QUFFWixhQUFNQyxjQUFjRixLQUFJRyxLQUFDLFNBQVNELGFBQVk7QUFBQSxFQUNuREU7QUFDZ0IsR0FBc0I7QUFDdEMsU0FDRSx1QkFBQyxTQUFJLFdBQVdILE9BQU9JLE1BQ3JCO0FBQUEsMkJBQUMsUUFBRyxXQUFXLDBDQUEwQ0osT0FBT0ssTUFBTSxJQUNuRUYsb0JBQVVHLFFBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsSUFDQSx1QkFBQyxlQUFZLFFBQVFILFVBQVVJLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBc0M7QUFBQSxJQUN0Qyx1QkFBQyxPQUFFLFdBQVcseUNBQXlDLHVCQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQThEO0FBQUEsSUFDOUQsdUJBQUMsUUFBRyxXQUFXLEdBQUdQLE9BQU9RLElBQUksU0FDMUJDLGlCQUFPQyxPQUFPUCxVQUFVUSxlQUFlLEVBQUVDO0FBQUFBLE1BQUksQ0FBQ0MsTUFBTUMsVUFDbkQsdUJBQUMsUUFBRyxXQUFXLGFBQWFkLE9BQU9hLElBQUksSUFDckM7QUFBQSwrQkFBQyxTQUFJLFdBQVdiLE9BQU9lLFVBQ3JCLGlDQUFDLFNBQUksV0FBV2YsT0FBT2dCLFFBQ3JCLGlDQUFDLFNBQUksV0FBV2hCLE9BQU9pQixLQUFLLEtBQUtKLEtBQUtLLGNBQWMsS0FBS0wsS0FBS1AsUUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFtRSxLQURyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSUE7QUFBQSxRQUNBLHVCQUFDLFVBQUssV0FBVSxvQ0FBb0NPLGVBQUtQLFFBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBOEQ7QUFBQSxRQUM5RDtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVywyQ0FBMkNOLE9BQU9tQixRQUFRO0FBQUEsWUFFcEVOO0FBQUFBLG1CQUFLTztBQUFBQSxjQUFNO0FBQUEsY0FBSVAsS0FBS1E7QUFBQUE7QUFBQUE7QUFBQUEsVUFIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSUE7QUFBQSxRQUNBLHVCQUFDLGdCQUFhLE1BQU0sYUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE4QjtBQUFBLFdBWmdCUCxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYUE7QUFBQSxJQUNELEtBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FpQkE7QUFBQSxJQUNBLHVCQUFDLFNBQUksV0FBV2QsT0FBT3NCLFFBQ3JCO0FBQUEsNkJBQUMsT0FBRSxXQUFVLG1EQUNYLGlDQUFDLGlCQUFjLE1BQU1uQixVQUFVb0IsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFvQyxLQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxNQUNBLHVCQUFDLFVBQUssV0FBVyxzQ0FBc0N2QixPQUFPd0IsS0FBSyxJQUNoRXJCLG9CQUFVcUIsU0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxNQUNBLHVCQUFDLGdCQUFhLE1BQU0sYUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE4QjtBQUFBLFNBUGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FRQTtBQUFBLE9BaENGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FpQ0E7QUFFSixDQUFDO0FBQUVDLE1BdkNVeEI7QUFBVyxJQUFBQyxJQUFBdUI7QUFBQUMsYUFBQXhCLElBQUE7QUFBQXdCLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJPcmRlclN0YXR1cyIsIkN1cnJlbmN5SWNvbiIsIkZvcm1hdHRlZERhdGUiLCJtZW1vIiwic3R5bGVzIiwiT3JkZXJJbmZvVUkiLCJfYyIsIm9yZGVySW5mbyIsIndyYXAiLCJoZWFkZXIiLCJuYW1lIiwic3RhdHVzIiwibGlzdCIsIk9iamVjdCIsInZhbHVlcyIsImluZ3JlZGllbnRzSW5mbyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltZ193cmFwIiwiYm9yZGVyIiwiaW1nIiwiaW1hZ2VfbW9iaWxlIiwicXVhbnRpdHkiLCJjb3VudCIsInByaWNlIiwiYm90dG9tIiwiZGF0ZSIsInRvdGFsIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm9yZGVyLWluZm8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyU3RhdHVzIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgQ3VycmVuY3lJY29uLFxuICBGb3JtYXR0ZWREYXRlLFxufSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0eXBlIHsgT3JkZXJJbmZvVUlQcm9wcyB9IGZyb20gJy4vdHlwZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9vcmRlci1pbmZvLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgT3JkZXJJbmZvVUkgPSBtZW1vKGZ1bmN0aW9uIE9yZGVySW5mb1VJKHtcbiAgb3JkZXJJbmZvLFxufTogT3JkZXJJbmZvVUlQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPGgzIGNsYXNzTmFtZT17YHRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtICBwYi0zIHB0LTEwICR7c3R5bGVzLmhlYWRlcn1gfT5cbiAgICAgICAge29yZGVySW5mby5uYW1lfVxuICAgICAgPC9oMz5cbiAgICAgIDxPcmRlclN0YXR1cyBzdGF0dXM9e29yZGVySW5mby5zdGF0dXN9IC8+XG4gICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bSBwdC0xNSBwYj02YH0+0KHQvtGB0YLQsNCyOjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0fSBtYi04YH0+XG4gICAgICAgIHtPYmplY3QudmFsdWVzKG9yZGVySW5mby5pbmdyZWRpZW50c0luZm8pLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGItNCBwci02ICR7c3R5bGVzLml0ZW19YH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ193cmFwfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e2l0ZW0uaW1hZ2VfbW9iaWxlfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCBwbC00XCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdCBwbC00IHByLTQgJHtzdHlsZXMucXVhbnRpdHl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW0uY291bnR9IHgge2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8Q3VycmVuY3lJY29uIHR5cGU9eydwcmltYXJ5J30gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZERhdGUgZGF0ZT17b3JkZXJJbmZvLmRhdGV9IC8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHQgcHItNCAke3N0eWxlcy50b3RhbH1gfT5cbiAgICAgICAgICB7b3JkZXJJbmZvLnRvdGFsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxDdXJyZW5jeUljb24gdHlwZT17J3ByaW1hcnknfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy91aS9vcmRlci1pbmZvL29yZGVyLWluZm8udHN4In0=