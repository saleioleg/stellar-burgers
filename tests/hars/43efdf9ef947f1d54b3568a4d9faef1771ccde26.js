import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/forgot-password/forgot-password.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Input, Button } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import styles from "/src/components/ui/pages/common.module.css";
export const ForgotPasswordUI = ({
  errorText,
  email,
  setEmail,
  handleSubmit
}) => /* @__PURE__ */ jsxDEV("main", { className: styles.container, children: /* @__PURE__ */ jsxDEV("div", { className: `pt-6 ${styles.wrapCenter}`, children: [
  /* @__PURE__ */ jsxDEV("h3", { className: "pb-6 text text_type_main-medium", children: "Восстановление пароля" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("form", { className: `pb-15 ${styles.form}`, name: "login", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: /* @__PURE__ */ jsxDEV(
      Input,
      {
        type: "email",
        placeholder: "Укажите e-mail",
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
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
        lineNumber: 19,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `pb-6 ${styles.button}`, children: /* @__PURE__ */ jsxDEV(Button, { type: "primary", size: "medium", htmlType: "submit", children: "Восстановить" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    errorText && /* @__PURE__ */ jsxDEV("p", { className: `${styles.error} text text_type_main-default pb-6`, children: errorText }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: `${styles.question} text text_type_main-default pb-6`, children: [
    "Вспомнили пароль?",
    /* @__PURE__ */ jsxDEV(Link, { to: "/login", className: `pl-2 ${styles.link}`, children: "Войти" }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx",
  lineNumber: 14,
  columnNumber: 1
}, this);
_c = ForgotPasswordUI;
var _c;
$RefreshReg$(_c, "ForgotPasswordUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/pages/forgot-password/forgot-password.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZU07QUFmTixTQUFTQSxPQUFPQyxjQUFjO0FBQzlCLFNBQVNDLFlBQVk7QUFJckIsT0FBT0MsWUFBWTtBQUVaLGFBQU1DLG1CQUFtQkEsQ0FBQztBQUFBLEVBQy9CQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUNXLE1BQ1gsdUJBQUMsVUFBSyxXQUFXTCxPQUFPTSxXQUN0QixpQ0FBQyxTQUFJLFdBQVcsUUFBUU4sT0FBT08sVUFBVSxJQUN2QztBQUFBLHlCQUFDLFFBQUcsV0FBVSxtQ0FBa0MscUNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcUU7QUFBQSxFQUNyRSx1QkFBQyxVQUFLLFdBQVcsU0FBU1AsT0FBT1EsSUFBSSxJQUFJLE1BQUssU0FBUSxVQUFVSCxjQUM5RDtBQUFBLDJCQUFDLFNBQUksV0FBVSxRQUNiO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxNQUFLO0FBQUEsUUFDTCxhQUFZO0FBQUEsUUFDWixVQUFVLENBQUNJLE1BQU1MLFNBQVNLLEVBQUVDLE9BQU9DLEtBQUs7QUFBQSxRQUN4QyxPQUFPUjtBQUFBQSxRQUNQLE1BQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLFdBQVU7QUFBQSxRQUNWLE1BQUs7QUFBQTtBQUFBLE1BUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUWdCLEtBVGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FXQTtBQUFBLElBQ0EsdUJBQUMsU0FBSSxXQUFXLFFBQVFILE9BQU9ZLE1BQU0sSUFDbkMsaUNBQUMsVUFBTyxNQUFLLFdBQVUsTUFBSyxVQUFTLFVBQVMsVUFBUSw0QkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlBO0FBQUEsSUFDQ1YsYUFDQyx1QkFBQyxPQUFFLFdBQVcsR0FBR0YsT0FBT2EsS0FBSyxxQ0FDMUJYLHVCQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLE9BckJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F1QkE7QUFBQSxFQUNBLHVCQUFDLFNBQUksV0FBVyxHQUFHRixPQUFPYyxRQUFRLHFDQUFvQztBQUFBO0FBQUEsSUFFcEUsdUJBQUMsUUFBSyxJQUFJLFVBQVUsV0FBVyxRQUFRZCxPQUFPZSxJQUFJLElBQUcscUJBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLE9BSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtBO0FBQUEsS0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWdDQSxLQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9Ba0NBO0FBQ0FDLEtBekNXZjtBQUFnQixJQUFBZTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiSW5wdXQiLCJCdXR0b24iLCJMaW5rIiwic3R5bGVzIiwiRm9yZ290UGFzc3dvcmRVSSIsImVycm9yVGV4dCIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVTdWJtaXQiLCJjb250YWluZXIiLCJ3cmFwQ2VudGVyIiwiZm9ybSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsImVycm9yIiwicXVlc3Rpb24iLCJsaW5rIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZm9yZ290LXBhc3N3b3JkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnQGtyZ2FhL3JlYWN0LWRldmVsb3Blci1idXJnZXItdWktY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB0eXBlIHsgUGFnZVVJUHJvcHMgfSBmcm9tICdAdWktcGFnZXMvY29tbW9uLXR5cGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2NvbW1vbi5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkVUkgPSAoe1xuICBlcnJvclRleHQsXG4gIGVtYWlsLFxuICBzZXRFbWFpbCxcbiAgaGFuZGxlU3VibWl0LFxufTogUGFnZVVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BwdC02ICR7c3R5bGVzLndyYXBDZW50ZXJ9YH0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGItNiB0ZXh0IHRleHRfdHlwZV9tYWluLW1lZGl1bVwiPtCS0L7RgdGB0YLQsNC90L7QstC70LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9oMz5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17YHBiLTE1ICR7c3R5bGVzLmZvcm19YH0gbmFtZT1cImxvZ2luXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNlwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KPQutCw0LbQuNGC0LUgZS1tYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGVycm9yPXtmYWxzZX1cbiAgICAgICAgICAgIGVycm9yVGV4dD1cIlwiXG4gICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcGItNiAke3N0eWxlcy5idXR0b259YH0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJtZWRpdW1cIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAg0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXJyb3JUZXh0ICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5lcnJvcn0gdGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IHBiLTZgfT5cbiAgICAgICAgICAgIHtlcnJvclRleHR9XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5xdWVzdGlvbn0gdGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IHBiLTZgfT5cbiAgICAgICAg0JLRgdC/0L7QvNC90LjQu9C4INC/0LDRgNC+0LvRjD9cbiAgICAgICAgPExpbmsgdG89eycvbG9naW4nfSBjbGFzc05hbWU9e2BwbC0yICR7c3R5bGVzLmxpbmt9YH0+XG4gICAgICAgICAg0JLQvtC50YLQuFxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9tYWluPlxuKTtcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy91aS9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnRzeCJ9