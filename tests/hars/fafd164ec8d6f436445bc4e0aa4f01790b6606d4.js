import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/register/register.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import {
  Input,
  Button,
  PasswordInput
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import styles from "/src/components/ui/pages/common.module.css";
export const RegisterUI = ({
  errorText,
  email,
  setEmail,
  handleSubmit,
  password,
  setPassword,
  userName,
  setUserName
}) => /* @__PURE__ */ jsxDEV("main", { className: styles.container, children: /* @__PURE__ */ jsxDEV("div", { className: `pt-6 ${styles.wrapCenter}`, children: [
  /* @__PURE__ */ jsxDEV("h3", { className: "pb-6 text text_type_main-medium", children: "Регистрация" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("form", { className: `pb-15 ${styles.form}`, name: "register", onSubmit: handleSubmit, children: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: /* @__PURE__ */ jsxDEV(
      Input,
      {
        type: "text",
        placeholder: "Имя",
        onChange: (e) => setUserName(e.target.value),
        value: userName,
        name: "name",
        error: false,
        errorText: "",
        size: "default"
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
        lineNumber: 28,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
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
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
        lineNumber: 40,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
      lineNumber: 39,
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
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
        lineNumber: 52,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `pb-6 ${styles.button}`, children: /* @__PURE__ */ jsxDEV(Button, { type: "primary", size: "medium", htmlType: "submit", children: "Зарегистрироваться" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this),
    errorText && /* @__PURE__ */ jsxDEV("p", { className: `${styles.error} text text_type_main-default pb-6`, children: errorText }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: `${styles.question} text text_type_main-default pb-6`, children: [
    "Уже зарегистрированы?",
    /* @__PURE__ */ jsxDEV(Link, { to: "/login", className: `pl-2 ${styles.link}`, children: "Войти" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx",
  lineNumber: 22,
  columnNumber: 1
}, this);
_c = RegisterUI;
var _c;
$RefreshReg$(_c, "RegisterUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/pages/register/register.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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S0F0REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQXVEQTtBQUNBQyxLQWxFV25CO0FBQVUsSUFBQW1CO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJJbnB1dCIsIkJ1dHRvbiIsIlBhc3N3b3JkSW5wdXQiLCJMaW5rIiwic3R5bGVzIiwiUmVnaXN0ZXJVSSIsImVycm9yVGV4dCIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVTdWJtaXQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsImNvbnRhaW5lciIsIndyYXBDZW50ZXIiLCJmb3JtIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiZXJyb3IiLCJxdWVzdGlvbiIsImxpbmsiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJyZWdpc3Rlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIEJ1dHRvbixcbiAgUGFzc3dvcmRJbnB1dCxcbn0gZnJvbSAnQGtyZ2FhL3JlYWN0LWRldmVsb3Blci1idXJnZXItdWktY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB0eXBlIHsgUmVnaXN0ZXJVSVByb3BzIH0gZnJvbSAnLi90eXBlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jb21tb24ubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RlclVJID0gKHtcbiAgZXJyb3JUZXh0LFxuICBlbWFpbCxcbiAgc2V0RW1haWwsXG4gIGhhbmRsZVN1Ym1pdCxcbiAgcGFzc3dvcmQsXG4gIHNldFBhc3N3b3JkLFxuICB1c2VyTmFtZSxcbiAgc2V0VXNlck5hbWUsXG59OiBSZWdpc3RlclVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BwdC02ICR7c3R5bGVzLndyYXBDZW50ZXJ9YH0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGItNiB0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bVwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2gzPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtgcGItMTUgJHtzdHlsZXMuZm9ybX1gfSBuYW1lPVwicmVnaXN0ZXJcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTZcIj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBlcnJvcj17ZmFsc2V9XG4gICAgICAgICAgICAgIGVycm9yVGV4dD1cIlwiXG4gICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02XCI+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBuYW1lPXsnZW1haWwnfVxuICAgICAgICAgICAgICBlcnJvcj17ZmFsc2V9XG4gICAgICAgICAgICAgIGVycm9yVGV4dD1cIlwiXG4gICAgICAgICAgICAgIHNpemU9eydkZWZhdWx0J31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02XCI+XG4gICAgICAgICAgICA8UGFzc3dvcmRJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBiLTYgJHtzdHlsZXMuYnV0dG9ufWB9PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJtZWRpdW1cIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtlcnJvclRleHQgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZXJyb3J9IHRleHQgdGV4dF90eXBlX21haW4tZGVmYXVsdCBwYi02YH0+XG4gICAgICAgICAgICAgIHtlcnJvclRleHR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnF1ZXN0aW9ufSB0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgcGItNmB9PlxuICAgICAgICDQo9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90Ys/XG4gICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtgcGwtMiAke3N0eWxlcy5saW5rfWB9PlxuICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cbik7XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvdWkvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIudHN4In0=