import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/login/login.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import {
  Input,
  Button,
  PasswordInput
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import styles from "/src/components/ui/pages/common.module.css";
export const LoginUI = ({
  email,
  setEmail,
  errorText,
  handleSubmit,
  password,
  setPassword
}) => /* @__PURE__ */ jsxDEV("main", { className: styles.container, children: /* @__PURE__ */ jsxDEV("div", { className: `pt-6 ${styles.wrapCenter}`, children: [
  /* @__PURE__ */ jsxDEV("h3", { className: "pb-6 text text_type_main-medium", children: "Вход" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("form", { className: `pb-15 ${styles.form}`, name: "login", onSubmit: handleSubmit, children: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: /* @__PURE__ */ jsxDEV(
      Input,
      {
        type: "email",
        placeholder: "E-mail",
        onChange: (e) => setEmail(e.target.value),
        value: email,
        name: "email",
        error: false,
        errorText: "",
        size: "default"
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
        lineNumber: 26,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
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
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
        lineNumber: 38,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `pb-6 ${styles.button}`, children: /* @__PURE__ */ jsxDEV(Button, { type: "primary", size: "medium", htmlType: "submit", children: "Войти" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this),
    errorText && /* @__PURE__ */ jsxDEV("p", { className: `${styles.error} text text_type_main-default pb-6`, children: errorText }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: `pb-4 ${styles.question} text text_type_main-default`, children: [
    "Вы - новый пользователь?",
    /* @__PURE__ */ jsxDEV(Link, { to: "/register", className: `pl-2 ${styles.link}`, children: "Зарегистрироваться" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: `${styles.question} text text_type_main-default pb-6`, children: [
    "Забыли пароль?",
    /* @__PURE__ */ jsxDEV(Link, { to: "/forgot-password", className: `pl-2 ${styles.link}`, children: "Восстановить пароль" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx",
  lineNumber: 20,
  columnNumber: 1
}, this);
_c = LoginUI;
var _c;
$RefreshReg$(_c, "LoginUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/pages/login/login.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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TG9naW5VSSIsImVtYWlsIiwic2V0RW1haWwiLCJlcnJvclRleHQiLCJoYW5kbGVTdWJtaXQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29udGFpbmVyIiwid3JhcENlbnRlciIsImZvcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJlcnJvciIsInF1ZXN0aW9uIiwibGluayIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImxvZ2luLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgQnV0dG9uLFxuICBQYXNzd29yZElucHV0LFxufSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHR5cGUgeyBMb2dpblVJUHJvcHMgfSBmcm9tICcuL3R5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2NvbW1vbi5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IExvZ2luVUkgPSAoe1xuICBlbWFpbCxcbiAgc2V0RW1haWwsXG4gIGVycm9yVGV4dCxcbiAgaGFuZGxlU3VibWl0LFxuICBwYXNzd29yZCxcbiAgc2V0UGFzc3dvcmQsXG59OiBMb2dpblVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BwdC02ICR7c3R5bGVzLndyYXBDZW50ZXJ9YH0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGItNiB0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bVwiPtCS0YXQvtC0PC9oMz5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17YHBiLTE1ICR7c3R5bGVzLmZvcm19YH0gbmFtZT1cImxvZ2luXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02XCI+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBlcnJvcj17ZmFsc2V9XG4gICAgICAgICAgICAgIGVycm9yVGV4dD1cIlwiXG4gICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02XCI+XG4gICAgICAgICAgICA8UGFzc3dvcmRJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBiLTYgJHtzdHlsZXMuYnV0dG9ufWB9PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJtZWRpdW1cIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICDQktC+0LnRgtC4XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZXJyb3JUZXh0ICYmIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLmVycm9yfSB0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgcGItNmB9PlxuICAgICAgICAgICAgICB7ZXJyb3JUZXh0fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYi00ICR7c3R5bGVzLnF1ZXN0aW9ufSB0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHRgfT5cbiAgICAgICAg0JLRiyAtINC90L7QstGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMP1xuICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT17YHBsLTIgJHtzdHlsZXMubGlua31gfT5cbiAgICAgICAgICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnF1ZXN0aW9ufSB0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgcGItNmB9PlxuICAgICAgICDQl9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMP1xuICAgICAgICA8TGluayB0bz17Jy9mb3Jnb3QtcGFzc3dvcmQnfSBjbGFzc05hbWU9e2BwbC0yICR7c3R5bGVzLmxpbmt9YH0+XG4gICAgICAgICAg0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINC/0LDRgNC+0LvRjFxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9tYWluPlxuKTtcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy91aS9wYWdlcy9sb2dpbi9sb2dpbi50c3gifQ==