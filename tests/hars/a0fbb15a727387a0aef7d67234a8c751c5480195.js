import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/order-card/order-card.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { OrderStatus } from "/src/components/index.ts";
import {
  CurrencyIcon,
  FormattedDate
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport3_react["memo"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import styles from "/src/components/ui/order-card/order-card.module.css";
export const OrderCardUI = memo(_c = function OrderCardUI2({
  orderInfo,
  maxIngredients,
  locationState
}) {
  return /* @__PURE__ */ jsxDEV(
    Link,
    {
      to: orderInfo.number.toString(),
      relative: "path",
      state: locationState,
      className: `p-6 mb-4 mr-2 ${styles.order}`,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: styles.order_info, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text text_type_digits-default", children: [
            "#",
            String(orderInfo.number).padStart(6, "0")
          ] }, void 0, true, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text text_type_main-default text_color_inactive", children: /* @__PURE__ */ jsxDEV(FormattedDate, { date: orderInfo.date }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("h4", { className: `pt-6 text text_type_main-medium ${styles.order_name}`, children: orderInfo.name }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        location.pathname === "/profile/orders" && /* @__PURE__ */ jsxDEV(OrderStatus, { status: orderInfo.status }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: `pt-6 ${styles.order_content}`, children: [
          /* @__PURE__ */ jsxDEV("ul", { className: styles.ingredients, children: orderInfo.ingredientsToShow.map((ingredient, index) => {
            const zIndex = maxIngredients - index;
            const right = 20 * index;
            return /* @__PURE__ */ jsxDEV(
              "li",
              {
                className: styles.img_wrap,
                style: { zIndex, right },
                children: [
                  /* @__PURE__ */ jsxDEV(
                    "img",
                    {
                      style: {
                        opacity: orderInfo.remains && maxIngredients === index + 1 ? "0.5" : "1"
                      },
                      className: styles.img,
                      src: ingredient.image_mobile,
                      alt: ingredient.name
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
                      lineNumber: 50,
                      columnNumber: 17
                    },
                    this
                  ),
                  maxIngredients === index + 1 ? /* @__PURE__ */ jsxDEV("span", { className: `text text_type_digits-default ${styles.remains}`, children: orderInfo.remains > 0 ? `+${orderInfo.remains}` : null }, void 0, false, {
                    fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                  }, this) : null
                ]
              },
              index,
              true,
              {
                fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
                lineNumber: 45,
                columnNumber: 15
              },
              this
            );
          }) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { className: `text text_type_digits-default pr-1 ${styles.order_total}`, children: orderInfo.total }, void 0, false, {
              fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(CurrencyIcon, { type: "primary" }, void 0, false, {
              fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
});
_c2 = OrderCardUI;
var _c, _c2;
$RefreshReg$(_c, "OrderCardUI$memo");
$RefreshReg$(_c2, "OrderCardUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/order-card/order-card.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUE7QUFBQTtBQUFBLG1CQUE0QjtBQUFBLGVBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS0E7QUFBQSxhQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbUNBO0FBQUE7QUFBQTtBQUFBLElBdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXdEQTtBQUVKLENBQUM7QUFBRUMsTUFoRVVoQztBQUFXLElBQUFDLElBQUErQjtBQUFBQyxhQUFBaEMsSUFBQTtBQUFBZ0MsYUFBQUQsS0FBQSIsIm5hbWVzIjpbIk9yZGVyU3RhdHVzIiwiQ3VycmVuY3lJY29uIiwiRm9ybWF0dGVkRGF0ZSIsIm1lbW8iLCJMaW5rIiwic3R5bGVzIiwiT3JkZXJDYXJkVUkiLCJfYyIsIm9yZGVySW5mbyIsIm1heEluZ3JlZGllbnRzIiwibG9jYXRpb25TdGF0ZSIsIm51bWJlciIsInRvU3RyaW5nIiwib3JkZXIiLCJvcmRlcl9pbmZvIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkYXRlIiwib3JkZXJfbmFtZSIsIm5hbWUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhdHVzIiwib3JkZXJfY29udGVudCIsImluZ3JlZGllbnRzIiwiaW5ncmVkaWVudHNUb1Nob3ciLCJtYXAiLCJpbmdyZWRpZW50IiwiaW5kZXgiLCJ6SW5kZXgiLCJyaWdodCIsImltZ193cmFwIiwib3BhY2l0eSIsInJlbWFpbnMiLCJpbWciLCJpbWFnZV9tb2JpbGUiLCJvcmRlcl90b3RhbCIsInRvdGFsIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm9yZGVyLWNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyU3RhdHVzIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgQ3VycmVuY3lJY29uLFxuICBGb3JtYXR0ZWREYXRlLFxufSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB0eXBlIHsgT3JkZXJDYXJkVUlQcm9wcyB9IGZyb20gJy4vdHlwZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9vcmRlci1jYXJkLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgT3JkZXJDYXJkVUkgPSBtZW1vKGZ1bmN0aW9uIE9yZGVyQ2FyZFVJKHtcbiAgb3JkZXJJbmZvLFxuICBtYXhJbmdyZWRpZW50cyxcbiAgbG9jYXRpb25TdGF0ZSxcbn06IE9yZGVyQ2FyZFVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHRvPXtvcmRlckluZm8ubnVtYmVyLnRvU3RyaW5nKCl9XG4gICAgICByZWxhdGl2ZT1cInBhdGhcIlxuICAgICAgc3RhdGU9e2xvY2F0aW9uU3RhdGV9XG4gICAgICBjbGFzc05hbWU9e2BwLTYgbWItNCBtci0yICR7c3R5bGVzLm9yZGVyfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9pbmZvfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfZGlnaXRzLWRlZmF1bHRcIj5cbiAgICAgICAgICAje1N0cmluZyhvcmRlckluZm8ubnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZERhdGUgZGF0ZT17b3JkZXJJbmZvLmRhdGV9IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGg0IGNsYXNzTmFtZT17YHB0LTYgdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gJHtzdHlsZXMub3JkZXJfbmFtZX1gfT5cbiAgICAgICAge29yZGVySW5mby5uYW1lfVxuICAgICAgPC9oND5cbiAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9wcm9maWxlL29yZGVycycgJiYgKFxuICAgICAgICA8T3JkZXJTdGF0dXMgc3RhdHVzPXtvcmRlckluZm8uc3RhdHVzfSAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHQtNiAke3N0eWxlcy5vcmRlcl9jb250ZW50fWB9PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaW5ncmVkaWVudHN9PlxuICAgICAgICAgIHtvcmRlckluZm8uaW5ncmVkaWVudHNUb1Nob3cubWFwKChpbmdyZWRpZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgekluZGV4ID0gbWF4SW5ncmVkaWVudHMgLSBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gMjAgKiBpbmRleDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ193cmFwfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogekluZGV4LCByaWdodDogcmlnaHQgfX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTpcbiAgICAgICAgICAgICAgICAgICAgICBvcmRlckluZm8ucmVtYWlucyAmJiBtYXhJbmdyZWRpZW50cyA9PT0gaW5kZXggKyAxID8gJzAuNScgOiAnMScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxuICAgICAgICAgICAgICAgICAgc3JjPXtpbmdyZWRpZW50LmltYWdlX21vYmlsZX1cbiAgICAgICAgICAgICAgICAgIGFsdD17aW5ncmVkaWVudC5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge21heEluZ3JlZGllbnRzID09PSBpbmRleCArIDEgPyAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdCAke3N0eWxlcy5yZW1haW5zfWB9PlxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJJbmZvLnJlbWFpbnMgPiAwID8gYCske29yZGVySW5mby5yZW1haW5zfWAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdCBwci0xICR7c3R5bGVzLm9yZGVyX3RvdGFsfWB9PlxuICAgICAgICAgICAge29yZGVySW5mby50b3RhbH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPEN1cnJlbmN5SWNvbiB0eXBlPVwicHJpbWFyeVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufSk7XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvdWkvb3JkZXItY2FyZC9vcmRlci1jYXJkLnRzeCJ9