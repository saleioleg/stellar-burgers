import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/modal/modal.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { CloseIcon } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import { ModalOverlayUI } from "/src/components/ui/index.ts";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport3_react["memo"];
import styles from "/src/components/ui/modal/modal.module.css";
export const ModalUI = memo(_c = function ModalUI2({
  title,
  onClose,
  children
}) {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: styles.modal, children: [
      /* @__PURE__ */ jsxDEV("div", { className: styles.header, children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text text_type_main-large", children: title }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: styles.button, type: "button", "aria-label": "Закрыть", children: /* @__PURE__ */ jsxDEV(CloseIcon, { type: "primary", onClick: onClose }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: styles.content, children }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ModalOverlayUI, { onClick: onClose }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
});
_c2 = ModalUI;
var _c, _c2;
$RefreshReg$(_c, "ModalUI$memo");
$RefreshReg$(_c2, "ModalUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/modal/modal.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY0ksbUJBR00sY0FITjtBQWRKLFNBQVNBLGlCQUFpQjtBQUMxQixTQUFTQyxzQkFBc0I7QUFDL0IsU0FBU0MsWUFBWTtBQUlyQixPQUFPQyxZQUFZO0FBRVosYUFBTUMsVUFBVUYsS0FBSUcsS0FBQyxTQUFTRCxTQUFRO0FBQUEsRUFDM0NFO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQ2EsR0FBc0I7QUFDbkMsU0FDRSxtQ0FDRTtBQUFBLDJCQUFDLFNBQUksV0FBV0wsT0FBT00sT0FDckI7QUFBQSw2QkFBQyxTQUFJLFdBQVdOLE9BQU9PLFFBQ3JCO0FBQUEsK0JBQUMsUUFBRyxXQUFVLDZCQUE2QkosbUJBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaUQ7QUFBQSxRQUNqRCx1QkFBQyxZQUFPLFdBQVdILE9BQU9RLFFBQVEsTUFBSyxVQUFTLGNBQVcsV0FDekQsaUNBQUMsYUFBVSxNQUFLLFdBQVUsU0FBU0osV0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEyQyxLQUQ3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxXQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFLQTtBQUFBLE1BQ0EsdUJBQUMsU0FBSSxXQUFXSixPQUFPUyxTQUFVSixZQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTBDO0FBQUEsU0FQNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFBO0FBQUEsSUFDQSx1QkFBQyxrQkFBZSxTQUFTRCxXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlDO0FBQUEsT0FWbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdBO0FBRUosQ0FBQztBQUFFTSxNQW5CVVQ7QUFBTyxJQUFBQyxJQUFBUTtBQUFBQyxhQUFBVCxJQUFBO0FBQUFTLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJDbG9zZUljb24iLCJNb2RhbE92ZXJsYXlVSSIsIm1lbW8iLCJzdHlsZXMiLCJNb2RhbFVJIiwiX2MiLCJ0aXRsZSIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsIm1vZGFsIiwiaGVhZGVyIiwiYnV0dG9uIiwiY29udGVudCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnQGtyZ2FhL3JlYWN0LWRldmVsb3Blci1idXJnZXItdWktY29tcG9uZW50cyc7XG5pbXBvcnQgeyBNb2RhbE92ZXJsYXlVSSB9IGZyb20gJ0B1aSc7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdHlwZSB7IFRNb2RhbFVJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFVJID0gbWVtbyhmdW5jdGlvbiBNb2RhbFVJKHtcbiAgdGl0bGUsXG4gIG9uQ2xvc2UsXG4gIGNoaWxkcmVuLFxufTogVE1vZGFsVUlQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dCB0ZXh0X3R5cGVfbWFpbi1sYXJnZVwiPnt0aXRsZX08L2gzPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cItCX0LDQutGA0YvRgtGMXCI+XG4gICAgICAgICAgICA8Q2xvc2VJY29uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TW9kYWxPdmVybGF5VUkgb25DbGljaz17b25DbG9zZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL3VpL21vZGFsL21vZGFsLnRzeCJ9