import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/profile-menu/profile-menu.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { NavLink } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import styles from "/src/components/ui/profile-menu/profile-menu.module.css";
export const ProfileMenuUI = ({
  pathname,
  handleLogout
}) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV(
    NavLink,
    {
      to: "/profile",
      className: ({ isActive }) => `text text_type_main-medium text_color_inactive pt-4 pb-4 ${styles.link} ${isActive ? styles.link_active : ""}`,
      end: true,
      children: "Профиль"
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV(
    NavLink,
    {
      to: "/profile/orders",
      className: ({ isActive }) => `text text_type_main-medium text_color_inactive pt-4 pb-4 ${styles.link} ${isActive ? styles.link_active : ""}`,
      children: "История заказов"
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV(
    "button",
    {
      className: `text text_type_main-medium text_color_inactive pt-4 pb-4 ${styles.button}`,
      onClick: handleLogout,
      children: "Выход"
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV("p", { className: "pt-20 text text_type_main-default text_color_inactive", children: pathname === "/profile" ? "В этом разделе вы можете изменить свои персональные данные" : "В этом разделе вы можете просмотреть свою историю заказов" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.tsx",
  lineNumber: 11,
  columnNumber: 1
}, this);
_c = ProfileMenuUI;
var _c;
$RefreshReg$(_c, "ProfileMenuUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/profile-menu/profile-menu.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVUUsbUJBQ0UsY0FERjtBQVZGLFNBQVNBLGVBQWU7QUFJeEIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLGdCQUFnQkEsQ0FBQztBQUFBLEVBQzVCQztBQUFBQSxFQUNBQztBQUNrQixNQUNsQixtQ0FDRTtBQUFBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxJQUFJO0FBQUEsTUFDSixXQUFXLENBQUMsRUFBRUMsU0FBUyxNQUNyQiw0REFDRUosT0FBT0ssSUFBSSxJQUNURCxXQUFXSixPQUFPTSxjQUFjLEVBQUU7QUFBQSxNQUV4QyxLQUFHO0FBQUE7QUFBQTtBQUFBLElBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVUE7QUFBQSxFQUNBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxJQUFJO0FBQUEsTUFDSixXQUFXLENBQUMsRUFBRUYsU0FBUyxNQUNyQiw0REFDRUosT0FBT0ssSUFBSSxJQUNURCxXQUFXSixPQUFPTSxjQUFjLEVBQUU7QUFBQSxNQUN2QztBQUFBO0FBQUEsSUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTQTtBQUFBLEVBQ0E7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVcsNERBQTRETixPQUFPTyxNQUFNO0FBQUEsTUFDcEYsU0FBU0o7QUFBQUEsTUFBYTtBQUFBO0FBQUEsSUFGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0E7QUFBQSxFQUNBLHVCQUFDLE9BQUUsV0FBVSx5REFDVkQsdUJBQWEsYUFDViwrREFDQSwrREFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUE7QUFBQSxLQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BaUNBO0FBQ0FNLEtBdENXUDtBQUFhLElBQUFPO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJOYXZMaW5rIiwic3R5bGVzIiwiUHJvZmlsZU1lbnVVSSIsInBhdGhuYW1lIiwiaGFuZGxlTG9nb3V0IiwiaXNBY3RpdmUiLCJsaW5rIiwibGlua19hY3RpdmUiLCJidXR0b24iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJwcm9maWxlLW1lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHR5cGUgeyBQcm9maWxlTWVudVVJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcHJvZmlsZS1tZW51Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZU1lbnVVSSA9ICh7XG4gIHBhdGhuYW1lLFxuICBoYW5kbGVMb2dvdXQsXG59OiBQcm9maWxlTWVudVVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDw+XG4gICAgPE5hdkxpbmtcbiAgICAgIHRvPXsnL3Byb2ZpbGUnfVxuICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICBgdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gdGV4dF9jb2xvcl9pbmFjdGl2ZSBwdC00IHBiLTQgJHtcbiAgICAgICAgICBzdHlsZXMubGlua1xuICAgICAgICB9ICR7aXNBY3RpdmUgPyBzdHlsZXMubGlua19hY3RpdmUgOiAnJ31gXG4gICAgICB9XG4gICAgICBlbmRcbiAgICA+XG4gICAgICDQn9GA0L7RhNC40LvRjFxuICAgIDwvTmF2TGluaz5cbiAgICA8TmF2TGlua1xuICAgICAgdG89eycvcHJvZmlsZS9vcmRlcnMnfVxuICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICBgdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gdGV4dF9jb2xvcl9pbmFjdGl2ZSBwdC00IHBiLTQgJHtcbiAgICAgICAgICBzdHlsZXMubGlua1xuICAgICAgICB9ICR7aXNBY3RpdmUgPyBzdHlsZXMubGlua19hY3RpdmUgOiAnJ31gXG4gICAgICB9XG4gICAgPlxuICAgICAg0JjRgdGC0L7RgNC40Y8g0LfQsNC60LDQt9C+0LJcbiAgICA8L05hdkxpbms+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgdGV4dCB0ZXh0X3R5cGVfbWFpbi1tZWRpdW0gdGV4dF9jb2xvcl9pbmFjdGl2ZSBwdC00IHBiLTQgJHtzdHlsZXMuYnV0dG9ufWB9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XG4gICAgPlxuICAgICAg0JLRi9GF0L7QtFxuICAgIDwvYnV0dG9uPlxuICAgIDxwIGNsYXNzTmFtZT1cInB0LTIwIHRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCB0ZXh0X2NvbG9yX2luYWN0aXZlXCI+XG4gICAgICB7cGF0aG5hbWUgPT09ICcvcHJvZmlsZSdcbiAgICAgICAgPyAn0JIg0Y3RgtC+0Lwg0YDQsNC30LTQtdC70LUg0LLRiyDQvNC+0LbQtdGC0LUg0LjQt9C80LXQvdC40YLRjCDRgdCy0L7QuCDQv9C10YDRgdC+0L3QsNC70YzQvdGL0LUg0LTQsNC90L3Ri9C1J1xuICAgICAgICA6ICfQkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQstGLINC80L7QttC10YLQtSDQv9GA0L7RgdC80L7RgtGA0LXRgtGMINGB0LLQvtGOINC40YHRgtC+0YDQuNGOINC30LDQutCw0LfQvtCyJ31cbiAgICA8L3A+XG4gIDwvPlxuKTtcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy91aS9wcm9maWxlLW1lbnUvcHJvZmlsZS1tZW51LnRzeCJ9