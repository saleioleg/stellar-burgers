import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pages/profile/profile.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { ProfileMenu } from "/src/components/index.ts";
import { Button, Input } from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import styles from "/src/components/ui/pages/profile/profile.module.css";
export const ProfileUI = ({
  formValue,
  isFormChanged,
  updateUserError,
  handleSubmit,
  handleCancel,
  handleInputChange
}) => /* @__PURE__ */ jsxDEV("main", { className: styles.container, children: [
  /* @__PURE__ */ jsxDEV("div", { className: `mt-30 mr-15 ${styles.menu}`, children: /* @__PURE__ */ jsxDEV(ProfileMenu, {}, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("form", { className: `mt-30 ${styles.form}`, onSubmit: handleSubmit, children: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: /* @__PURE__ */ jsxDEV(
      Input,
      {
        type: "text",
        placeholder: "Имя",
        onChange: handleInputChange,
        value: formValue.name,
        name: "name",
        error: false,
        errorText: "",
        size: "default",
        icon: "EditIcon"
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
        lineNumber: 23,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: /* @__PURE__ */ jsxDEV(
      Input,
      {
        type: "email",
        placeholder: "E-mail",
        onChange: handleInputChange,
        value: formValue.email,
        name: "email",
        error: false,
        errorText: "",
        size: "default",
        icon: "EditIcon"
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
        lineNumber: 36,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "pb-6", children: /* @__PURE__ */ jsxDEV(
      Input,
      {
        type: "password",
        placeholder: "Пароль",
        onChange: handleInputChange,
        value: formValue.password,
        name: "password",
        error: false,
        errorText: "",
        size: "default",
        icon: "EditIcon"
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
        lineNumber: 49,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    isFormChanged && /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          type: "secondary",
          htmlType: "button",
          size: "medium",
          onClick: handleCancel,
          children: "Отменить"
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
          lineNumber: 63,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(Button, { type: "primary", size: "medium", htmlType: "submit", children: "Сохранить" }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    updateUserError && /* @__PURE__ */ jsxDEV("p", { className: `${styles.error} pt-5 text text_type_main-default`, children: updateUserError }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx",
  lineNumber: 16,
  columnNumber: 1
}, this);
_c = ProfileUI;
var _c;
$RefreshReg$(_c, "ProfileUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/pages/profile/profile.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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OlsiUHJvZmlsZU1lbnUiLCJCdXR0b24iLCJJbnB1dCIsInN0eWxlcyIsIlByb2ZpbGVVSSIsImZvcm1WYWx1ZSIsImlzRm9ybUNoYW5nZWQiLCJ1cGRhdGVVc2VyRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImNvbnRhaW5lciIsIm1lbnUiLCJmb3JtIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInByb2ZpbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2ZpbGVNZW51IH0gZnJvbSAnQGNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gJ0BrcmdhYS9yZWFjdC1kZXZlbG9wZXItYnVyZ2VyLXVpLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgdHlwZSB7IFByb2ZpbGVVSVByb3BzIH0gZnJvbSAnLi90eXBlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Byb2ZpbGUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlVUkgPSAoe1xuICBmb3JtVmFsdWUsXG4gIGlzRm9ybUNoYW5nZWQsXG4gIHVwZGF0ZVVzZXJFcnJvcixcbiAgaGFuZGxlU3VibWl0LFxuICBoYW5kbGVDYW5jZWwsXG4gIGhhbmRsZUlucHV0Q2hhbmdlLFxufTogUHJvZmlsZVVJUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BtdC0zMCBtci0xNSAke3N0eWxlcy5tZW51fWB9PlxuICAgICAgPFByb2ZpbGVNZW51IC8+XG4gICAgPC9kaXY+XG4gICAgPGZvcm0gY2xhc3NOYW1lPXtgbXQtMzAgJHtzdHlsZXMuZm9ybX1gfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNlwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyfQmNC80Y8nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZS5uYW1lfVxuICAgICAgICAgICAgbmFtZT17J25hbWUnfVxuICAgICAgICAgICAgZXJyb3I9e2ZhbHNlfVxuICAgICAgICAgICAgZXJyb3JUZXh0PXsnJ31cbiAgICAgICAgICAgIHNpemU9eydkZWZhdWx0J31cbiAgICAgICAgICAgIGljb249eydFZGl0SWNvbid9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNlwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT17J2VtYWlsJ31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnRS1tYWlsJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWUuZW1haWx9XG4gICAgICAgICAgICBuYW1lPXsnZW1haWwnfVxuICAgICAgICAgICAgZXJyb3I9e2ZhbHNlfVxuICAgICAgICAgICAgZXJyb3JUZXh0PXsnJ31cbiAgICAgICAgICAgIHNpemU9eydkZWZhdWx0J31cbiAgICAgICAgICAgIGljb249eydFZGl0SWNvbid9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNlwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT17J3Bhc3N3b3JkJ31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsn0J/QsNGA0L7Qu9GMJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWUucGFzc3dvcmR9XG4gICAgICAgICAgICBuYW1lPXsncGFzc3dvcmQnfVxuICAgICAgICAgICAgZXJyb3I9e2ZhbHNlfVxuICAgICAgICAgICAgZXJyb3JUZXh0PXsnJ31cbiAgICAgICAgICAgIHNpemU9eydkZWZhdWx0J31cbiAgICAgICAgICAgIGljb249eydFZGl0SWNvbid9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc0Zvcm1DaGFuZ2VkICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQntGC0LzQtdC90LjRgtGMXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibWVkaXVtXCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3VwZGF0ZVVzZXJFcnJvciAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZXJyb3J9IHB0LTUgdGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0YH0+XG4gICAgICAgICAgICB7dXBkYXRlVXNlckVycm9yfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgIDwvZm9ybT5cbiAgPC9tYWluPlxuKTtcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy91aS9wYWdlcy9wcm9maWxlL3Byb2ZpbGUudHN4In0=