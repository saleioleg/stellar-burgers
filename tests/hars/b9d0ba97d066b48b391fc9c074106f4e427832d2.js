import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/feed-info/feed-info.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport1_react["memo"];
import styles from "/src/components/ui/feed-info/feed-info.module.css";
export const FeedInfoUI = memo(_c = function FeedInfoUI2({
  feed,
  readyOrders,
  pendingOrders
}) {
  const { total, totalToday } = feed;
  return /* @__PURE__ */ jsxDEV("section", { children: [
    /* @__PURE__ */ jsxDEV("div", { className: styles.columns, children: [
      /* @__PURE__ */ jsxDEV(HalfColumn, { orders: readyOrders, title: "Готовы", textColor: "blue" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(HalfColumn, { orders: pendingOrders, title: "В работе" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Column, { title: "Выполнено за все время", content: total }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Column, { title: "Выполнено за сегодня", content: totalToday }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
});
_c2 = FeedInfoUI;
const HalfColumn = ({
  orders,
  title,
  textColor
}) => /* @__PURE__ */ jsxDEV("div", { className: `pr-6 ${styles.column}`, children: [
  /* @__PURE__ */ jsxDEV("h3", { className: `text text_type_main-medium ${styles.title}`, children: [
    title,
    ":"
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("ul", { className: `pt-6  ${styles.list}`, children: orders.map(
    (item, index) => /* @__PURE__ */ jsxDEV(
      "li",
      {
        className: `text text_type_digits-default ${styles.list_item}`,
        style: { color: textColor === "blue" ? "#00cccc" : "#F2F2F3" },
        children: item
      },
      index,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
        lineNumber: 35,
        columnNumber: 5
      },
      this
    )
  ) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
  lineNumber: 31,
  columnNumber: 1
}, this);
_c3 = HalfColumn;
const Column = ({ title, content }) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV("h3", { className: `pt-15 text text_type_main-medium ${styles.title}`, children: [
    title,
    ":"
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("p", { className: `text text_type_digits-large ${styles.content}`, children: content }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx",
  lineNumber: 48,
  columnNumber: 1
}, this);
_c4 = Column;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "FeedInfoUI$memo");
$RefreshReg$(_c2, "FeedInfoUI");
$RefreshReg$(_c3, "HalfColumn");
$RefreshReg$(_c4, "Column");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/feed-info/feed-info.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JRLFNBK0JOLFVBL0JNO0FBaEJSLFNBQVNBLFlBQVk7QUFJckIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLGFBQWFGLEtBQUlHLEtBQUMsU0FBU0QsWUFBVztBQUFBLEVBQ2pERTtBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUNlLEdBQXNCO0FBQ3JDLFFBQU0sRUFBRUMsT0FBT0MsV0FBVyxJQUFJSjtBQUU5QixTQUNFLHVCQUFDLGFBQ0M7QUFBQSwyQkFBQyxTQUFJLFdBQVdILE9BQU9RLFNBQ3JCO0FBQUEsNkJBQUMsY0FBVyxRQUFRSixhQUFhLE9BQU8sVUFBVSxXQUFXLFVBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBb0U7QUFBQSxNQUNwRSx1QkFBQyxjQUFXLFFBQVFDLGVBQWUsT0FBTyxjQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXFEO0FBQUEsU0FGdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUdBO0FBQUEsSUFDQSx1QkFBQyxVQUFPLE9BQU8sMEJBQTBCLFNBQVNDLFNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBd0Q7QUFBQSxJQUN4RCx1QkFBQyxVQUFPLE9BQU8sd0JBQXdCLFNBQVNDLGNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMkQ7QUFBQSxPQU43RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0E7QUFFSixDQUFDO0FBQUVFLE1BakJVUjtBQW1CYixNQUFNUyxhQUFhQSxDQUFDO0FBQUEsRUFDbEJDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQ2UsTUFDZix1QkFBQyxTQUFJLFdBQVcsUUFBUWIsT0FBT2MsTUFBTSxJQUNuQztBQUFBLHlCQUFDLFFBQUcsV0FBVyw4QkFBOEJkLE9BQU9ZLEtBQUssSUFBS0E7QUFBQUE7QUFBQUEsSUFBTTtBQUFBLE9BQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcUU7QUFBQSxFQUNyRSx1QkFBQyxRQUFHLFdBQVcsU0FBU1osT0FBT2UsSUFBSSxJQUNoQ0osaUJBQU9LO0FBQUFBLElBQUksQ0FBQ0MsTUFBTUMsVUFDakI7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFdBQVcsaUNBQWlDbEIsT0FBT21CLFNBQVM7QUFBQSxRQUM1RCxPQUFPLEVBQUVDLE9BQU9QLGNBQWMsU0FBUyxZQUFZLFVBQVU7QUFBQSxRQUc1REk7QUFBQUE7QUFBQUEsTUFGSUM7QUFBQUEsTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTUE7QUFBQSxFQUNELEtBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVBO0FBQUEsS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BYUE7QUFDQUcsTUFuQklYO0FBcUJOLE1BQU1ZLFNBQVNBLENBQUMsRUFBRVYsT0FBT1csUUFBc0IsTUFDN0MsbUNBQ0U7QUFBQSx5QkFBQyxRQUFHLFdBQVcsb0NBQW9DdkIsT0FBT1ksS0FBSyxJQUFLQTtBQUFBQTtBQUFBQSxJQUFNO0FBQUEsT0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEyRTtBQUFBLEVBQzNFLHVCQUFDLE9BQUUsV0FBVywrQkFBK0JaLE9BQU91QixPQUFPLElBQUtBLHFCQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXdFO0FBQUEsS0FGMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdBO0FBQ0FDLE1BTElGO0FBQU0sSUFBQXBCLElBQUFPLEtBQUFZLEtBQUFHO0FBQUFDLGFBQUF2QixJQUFBO0FBQUF1QixhQUFBaEIsS0FBQTtBQUFBZ0IsYUFBQUosS0FBQTtBQUFBSSxhQUFBRCxLQUFBIiwibmFtZXMiOlsibWVtbyIsInN0eWxlcyIsIkZlZWRJbmZvVUkiLCJfYyIsImZlZWQiLCJyZWFkeU9yZGVycyIsInBlbmRpbmdPcmRlcnMiLCJ0b3RhbCIsInRvdGFsVG9kYXkiLCJjb2x1bW5zIiwiX2MyIiwiSGFsZkNvbHVtbiIsIm9yZGVycyIsInRpdGxlIiwidGV4dENvbG9yIiwiY29sdW1uIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpc3RfaXRlbSIsImNvbG9yIiwiX2MzIiwiQ29sdW1uIiwiY29udGVudCIsIl9jNCIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJmZWVkLWluZm8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0eXBlIHsgRmVlZEluZm9VSVByb3BzLCBIYWxmQ29sdW1uUHJvcHMsIFRDb2x1bW5Qcm9wcyB9IGZyb20gJy4vdHlwZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mZWVkLWluZm8ubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBGZWVkSW5mb1VJID0gbWVtbyhmdW5jdGlvbiBGZWVkSW5mb1VJKHtcbiAgZmVlZCxcbiAgcmVhZHlPcmRlcnMsXG4gIHBlbmRpbmdPcmRlcnMsXG59OiBGZWVkSW5mb1VJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgdG90YWwsIHRvdGFsVG9kYXkgfSA9IGZlZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1uc30+XG4gICAgICAgIDxIYWxmQ29sdW1uIG9yZGVycz17cmVhZHlPcmRlcnN9IHRpdGxlPXsn0JPQvtGC0L7QstGLJ30gdGV4dENvbG9yPXsnYmx1ZSd9IC8+XG4gICAgICAgIDxIYWxmQ29sdW1uIG9yZGVycz17cGVuZGluZ09yZGVyc30gdGl0bGU9eyfQkiDRgNCw0LHQvtGC0LUnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29sdW1uIHRpdGxlPXsn0JLRi9C/0L7Qu9C90LXQvdC+INC30LAg0LLRgdC1INCy0YDQtdC80Y8nfSBjb250ZW50PXt0b3RhbH0gLz5cbiAgICAgIDxDb2x1bW4gdGl0bGU9eyfQktGL0L/QvtC70L3QtdC90L4g0LfQsCDRgdC10LPQvtC00L3Rjyd9IGNvbnRlbnQ9e3RvdGFsVG9kYXl9IC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufSk7XG5cbmNvbnN0IEhhbGZDb2x1bW4gPSAoe1xuICBvcmRlcnMsXG4gIHRpdGxlLFxuICB0ZXh0Q29sb3IsXG59OiBIYWxmQ29sdW1uUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtgcHItNiAke3N0eWxlcy5jb2x1bW59YH0+XG4gICAgPGgzIGNsYXNzTmFtZT17YHRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtICR7c3R5bGVzLnRpdGxlfWB9Pnt0aXRsZX06PC9oMz5cbiAgICA8dWwgY2xhc3NOYW1lPXtgcHQtNiAgJHtzdHlsZXMubGlzdH1gfT5cbiAgICAgIHtvcmRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0IHRleHRfdHlwZV9kaWdpdHMtZGVmYXVsdCAke3N0eWxlcy5saXN0X2l0ZW19YH1cbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogdGV4dENvbG9yID09PSAnYmx1ZScgPyAnIzAwY2NjYycgOiAnI0YyRjJGMycgfX1cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW19XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvbHVtbiA9ICh7IHRpdGxlLCBjb250ZW50IH06IFRDb2x1bW5Qcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50ID0+IChcbiAgPD5cbiAgICA8aDMgY2xhc3NOYW1lPXtgcHQtMTUgdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gJHtzdHlsZXMudGl0bGV9YH0+e3RpdGxlfTo8L2gzPlxuICAgIDxwIGNsYXNzTmFtZT17YHRleHQgdGV4dF90eXBlX2RpZ2l0cy1sYXJnZSAke3N0eWxlcy5jb250ZW50fWB9Pntjb250ZW50fTwvcD5cbiAgPC8+XG4pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL3VpL2ZlZWQtaW5mby9mZWVkLWluZm8udHN4In0=