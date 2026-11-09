import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/reset-password/reset-password.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import {
  Input,
  Button,
  PasswordInput
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import styles from "/src/components/ui/pages/common.module.css";
export const ResetPasswordUI = ({
  errorText,
  password,
  setPassword,
  handleSubmit,
  token,
  setToken
}) => /* @__PURE__ */ jsxDEV("main", { className: styles.container, children: /* @__PURE__ */ jsxDEV("div", { className: `pt-6 ${styles.wrapCenter}`, children: [
  /* @__PURE__ */ jsxDEV("h3", { className: "pb-6 text text_type_main-medium", children: "Восстановление пароля" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("form", { className: `pb-15 ${styles.form}`, name: "login", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: /* @__PURE__ */ jsxDEV(
      PasswordInput,
      {
        onChange: (e) => setPassword(e.target.value),
        value: password,
        name: "password"
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: /* @__PURE__ */ jsxDEV(
      Input,
      {
        type: "text",
        placeholder: "Введите код из письма",
        onChange: (e) => setToken(e.target.value),
        value: token,
        name: "token",
        error: false,
        errorText: "",
        size: "default"
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `pb-6 ${styles.button}`, children: /* @__PURE__ */ jsxDEV(Button, { type: "primary", size: "medium", htmlType: "submit", children: "Сохранить" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    errorText && /* @__PURE__ */ jsxDEV("p", { className: `${styles.error} text text_type_main-default pb-6`, children: errorText }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: `${styles.question} text text_type_main-default pb-6`, children: [
    "Вспомнили пароль?",
    /* @__PURE__ */ jsxDEV(Link, { to: "/login", className: `pl-2 ${styles.link}`, children: "Войти" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx",
  lineNumber: 20,
  columnNumber: 1
}, this);
_c = ResetPasswordUI;
var _c;
$RefreshReg$(_c, "ResetPasswordUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/pages/reset-password/reset-password.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUJNO0FBckJOO0FBQUEsRUFDRUE7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsT0FDSztBQUNQLFNBQVNDLFlBQVk7QUFJckIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLGtCQUFrQkEsQ0FBQztBQUFBLEVBQzlCQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUNvQixNQUNwQix1QkFBQyxVQUFLLFdBQVdQLE9BQU9RLFdBQ3RCLGlDQUFDLFNBQUksV0FBVyxRQUFRUixPQUFPUyxVQUFVLElBQ3ZDO0FBQUEseUJBQUMsUUFBRyxXQUFVLG1DQUFrQyxxQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxRTtBQUFBLEVBQ3JFLHVCQUFDLFVBQUssV0FBVyxTQUFTVCxPQUFPVSxJQUFJLElBQUksTUFBSyxTQUFRLFVBQVVMLGNBQzlEO0FBQUEsMkJBQUMsU0FBSSxXQUFVLFFBQ2I7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFVBQVUsQ0FBQ00sTUFBTVAsWUFBWU8sRUFBRUMsT0FBT0MsS0FBSztBQUFBLFFBQzNDLE9BQU9WO0FBQUFBLFFBQ1AsTUFBSztBQUFBO0FBQUEsTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFHaUIsS0FKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU1BO0FBQUEsSUFDQSx1QkFBQyxTQUFJLFdBQVUsUUFDYjtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsTUFBSztBQUFBLFFBQ0wsYUFBWTtBQUFBLFFBQ1osVUFBVSxDQUFDUSxNQUFNSixTQUFTSSxFQUFFQyxPQUFPQyxLQUFLO0FBQUEsUUFDeEMsT0FBT1A7QUFBQUEsUUFDUCxNQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxXQUFVO0FBQUEsUUFDVixNQUFLO0FBQUE7QUFBQSxNQVJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFnQixLQVRsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBV0E7QUFBQSxJQUNBLHVCQUFDLFNBQUksV0FBVyxRQUFRTixPQUFPYyxNQUFNLElBQ25DLGlDQUFDLFVBQU8sTUFBSyxXQUFVLE1BQUssVUFBUyxVQUFTLFVBQVEseUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJQTtBQUFBLElBQ0NaLGFBQ0MsdUJBQUMsT0FBRSxXQUFXLEdBQUdGLE9BQU9lLEtBQUsscUNBQzFCYix1QkFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxPQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBOEJBO0FBQUEsRUFDQSx1QkFBQyxTQUFJLFdBQVcsR0FBR0YsT0FBT2dCLFFBQVEscUNBQW9DO0FBQUE7QUFBQSxJQUVwRSx1QkFBQyxRQUFLLElBQUcsVUFBUyxXQUFXLFFBQVFoQixPQUFPaUIsSUFBSSxJQUFHLHFCQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxPQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLQTtBQUFBLEtBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0F1Q0EsS0F4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQXlDQTtBQUNBQyxLQWxEV2pCO0FBQWUsSUFBQWlCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJJbnB1dCIsIkJ1dHRvbiIsIlBhc3N3b3JkSW5wdXQiLCJMaW5rIiwic3R5bGVzIiwiUmVzZXRQYXNzd29yZFVJIiwiZXJyb3JUZXh0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsInRva2VuIiwic2V0VG9rZW4iLCJjb250YWluZXIiLCJ3cmFwQ2VudGVyIiwiZm9ybSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsImVycm9yIiwicXVlc3Rpb24iLCJsaW5rIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicmVzZXQtcGFzc3dvcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBCdXR0b24sXG4gIFBhc3N3b3JkSW5wdXQsXG59IGZyb20gJ0BrcmdhYS9yZWFjdC1kZXZlbG9wZXItYnVyZ2VyLXVpLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgdHlwZSB7IFJlc2V0UGFzc3dvcmRVSVByb3BzIH0gZnJvbSAnLi90eXBlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jb21tb24ubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBSZXNldFBhc3N3b3JkVUkgPSAoe1xuICBlcnJvclRleHQsXG4gIHBhc3N3b3JkLFxuICBzZXRQYXNzd29yZCxcbiAgaGFuZGxlU3VibWl0LFxuICB0b2tlbixcbiAgc2V0VG9rZW4sXG59OiBSZXNldFBhc3N3b3JkVUlQcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50ID0+IChcbiAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YHB0LTYgJHtzdHlsZXMud3JhcENlbnRlcn1gfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYi02IHRleHQgdGV4dF90eXBlX21haW4tbWVkaXVtXCI+0JLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjQtSDQv9Cw0YDQvtC70Y88L2gzPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtgcGItMTUgJHtzdHlsZXMuZm9ybX1gfSBuYW1lPVwibG9naW5cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02XCI+XG4gICAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02XCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC60L7QtCDQuNC3INC/0LjRgdGM0LzQsFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRva2VuKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXt0b2tlbn1cbiAgICAgICAgICAgIG5hbWU9XCJ0b2tlblwiXG4gICAgICAgICAgICBlcnJvcj17ZmFsc2V9XG4gICAgICAgICAgICBlcnJvclRleHQ9XCJcIlxuICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBiLTYgJHtzdHlsZXMuYnV0dG9ufWB9PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibWVkaXVtXCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Vycm9yVGV4dCAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZXJyb3J9IHRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCBwYi02YH0+XG4gICAgICAgICAgICB7ZXJyb3JUZXh0fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucXVlc3Rpb259IHRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCBwYi02YH0+XG4gICAgICAgINCS0YHQv9C+0LzQvdC40LvQuCDQv9Cw0YDQvtC70Yw/XG4gICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtgcGwtMiAke3N0eWxlcy5saW5rfWB9PlxuICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cbik7XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvdWkvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudHN4In0=