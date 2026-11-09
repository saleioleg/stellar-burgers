import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/profile-orders/profile-orders.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { ProfileMenu, OrdersList } from "/src/components/index.ts";
import styles from "/src/components/ui/pages/profile-orders/profile-orders.module.css";
export const ProfileOrdersUI = ({ orders }) => /* @__PURE__ */ jsxDEV("main", { className: `${styles.main}`, children: [
  /* @__PURE__ */ jsxDEV("div", { className: `mt-30 mr-15 ${styles.menu}`, children: /* @__PURE__ */ jsxDEV(ProfileMenu, {}, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: `mt-10 ${styles.orders}`, children: /* @__PURE__ */ jsxDEV(OrdersList, { orders }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.tsx",
  lineNumber: 8,
  columnNumber: 1
}, this);
_c = ProfileOrdersUI;
var _c;
$RefreshReg$(_c, "ProfileOrdersUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/pages/profile-orders/profile-orders.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU007QUFUTixTQUFTQSxhQUFhQyxrQkFBa0I7QUFJeEMsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLGtCQUFrQkEsQ0FBQyxFQUFFQyxPQUE2QixNQUM3RCx1QkFBQyxVQUFLLFdBQVcsR0FBR0YsT0FBT0csSUFBSSxJQUM3QjtBQUFBLHlCQUFDLFNBQUksV0FBVyxlQUFlSCxPQUFPSSxJQUFJLElBQ3hDLGlDQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWSxLQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUFBLEVBQ0EsdUJBQUMsU0FBSSxXQUFXLFNBQVNKLE9BQU9FLE1BQU0sSUFDcEMsaUNBQUMsY0FBVyxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMkIsS0FEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQUEsS0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0E7QUFDQUcsS0FUV0o7QUFBZSxJQUFBSTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUHJvZmlsZU1lbnUiLCJPcmRlcnNMaXN0Iiwic3R5bGVzIiwiUHJvZmlsZU9yZGVyc1VJIiwib3JkZXJzIiwibWFpbiIsIm1lbnUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJwcm9maWxlLW9yZGVycy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZmlsZU1lbnUsIE9yZGVyc0xpc3QgfSBmcm9tICdAY29tcG9uZW50cyc7XG5cbmltcG9ydCB0eXBlIHsgUHJvZmlsZU9yZGVyc1VJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcHJvZmlsZS1vcmRlcnMubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlT3JkZXJzVUkgPSAoeyBvcmRlcnMgfTogUHJvZmlsZU9yZGVyc1VJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1haW59YH0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BtdC0zMCBtci0xNSAke3N0eWxlcy5tZW51fWB9PlxuICAgICAgPFByb2ZpbGVNZW51IC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BtdC0xMCAke3N0eWxlcy5vcmRlcnN9YH0+XG4gICAgICA8T3JkZXJzTGlzdCBvcmRlcnM9e29yZGVyc30gLz5cbiAgICA8L2Rpdj5cbiAgPC9tYWluPlxuKTtcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy91aS9wYWdlcy9wcm9maWxlLW9yZGVycy9wcm9maWxlLW9yZGVycy50c3gifQ==