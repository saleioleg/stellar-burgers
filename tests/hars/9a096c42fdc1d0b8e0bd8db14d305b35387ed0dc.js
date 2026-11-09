import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/app-header/app-header.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo
} from "/node_modules/.vite/deps/@krgaa_react-developer-burger-ui-components.js?v=5f950827";
import { Link, NavLink } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import styles from "/src/components/ui/app-header/app-header.module.css";
export const AppHeaderUI = ({ userName }) => /* @__PURE__ */ jsxDEV("header", { className: styles.header, children: /* @__PURE__ */ jsxDEV("nav", { className: `${styles.menu} p-4`, children: [
  /* @__PURE__ */ jsxDEV("div", { className: styles.menu_part_left, children: [
    /* @__PURE__ */ jsxDEV(
      NavLink,
      {
        to: "/",
        className: ({ isActive }) => `${styles.link} ${isActive ? styles.link_active : ""}`,
        children: ({ isActive }) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(BurgerIcon, { type: isActive ? "primary" : "secondary" }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default ml-2 mr-10", children: "Конструктор" }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      NavLink,
      {
        to: "/feed",
        className: ({ isActive }) => `${styles.link} ${isActive ? styles.link_active : ""}`,
        children: ({ isActive }) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(ListIcon, { type: isActive ? "primary" : "secondary" }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default ml-2", children: "Лента заказов" }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
        lineNumber: 35,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: styles.logo, children: /* @__PURE__ */ jsxDEV(Link, { to: "/", children: /* @__PURE__ */ jsxDEV(Logo, { className: "" }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
    lineNumber: 55,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: styles.link_position_last, children: /* @__PURE__ */ jsxDEV(
    NavLink,
    {
      to: "/profile",
      className: ({ isActive }) => `${styles.link} ${isActive ? styles.link_active : ""}`,
      children: ({ isActive }) => /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(ProfileIcon, { type: isActive ? "primary" : "secondary" }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text text_type_main-default ml-2", children: userName ?? "Личный кабинет" }, void 0, false, {
          fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
      lineNumber: 61,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx",
  lineNumber: 14,
  columnNumber: 1
}, this);
_c = AppHeaderUI;
var _c;
$RefreshReg$(_c, "AppHeaderUI");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/ui/app-header/app-header.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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LElBQUFVO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJCdXJnZXJJY29uIiwiTGlzdEljb24iLCJQcm9maWxlSWNvbiIsIkxvZ28iLCJMaW5rIiwiTmF2TGluayIsInN0eWxlcyIsIkFwcEhlYWRlclVJIiwidXNlck5hbWUiLCJoZWFkZXIiLCJtZW51IiwibWVudV9wYXJ0X2xlZnQiLCJpc0FjdGl2ZSIsImxpbmsiLCJsaW5rX2FjdGl2ZSIsImxvZ28iLCJsaW5rX3Bvc2l0aW9uX2xhc3QiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhcHAtaGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJ1cmdlckljb24sXHJcbiAgTGlzdEljb24sXHJcbiAgUHJvZmlsZUljb24sXHJcbiAgTG9nbyxcclxufSBmcm9tICdAa3JnYWEvcmVhY3QtZGV2ZWxvcGVyLWJ1cmdlci11aS1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGluaywgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBUQXBwSGVhZGVyVUlQcm9wcyB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXBwLWhlYWRlci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBIZWFkZXJVSSA9ICh7IHVzZXJOYW1lIH06IFRBcHBIZWFkZXJVSVByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQgPT4gKFxyXG4gIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVudX0gcC00YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudV9wYXJ0X2xlZnR9PlxyXG4gICAgICAgIHsvKiDQmtC90L7Qv9C60LAgXCLQmtC+0L3RgdGC0YDRg9C60YLQvtGAXCIgKi99XHJcbiAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgIHRvPScvJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxyXG4gICAgICAgICAgICBgJHtzdHlsZXMubGlua30gJHtpc0FjdGl2ZSA/IHN0eWxlcy5saW5rX2FjdGl2ZSA6ICcnfWBcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxCdXJnZXJJY29uIHR5cGU9e2lzQWN0aXZlID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgbWwtMiBtci0xMCc+XHJcbiAgICAgICAgICAgICAgICDQmtC+0L3RgdGC0YDRg9C60YLQvtGAXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9OYXZMaW5rPlxyXG5cclxuICAgICAgICB7Lyog0JrQvdC+0L/QutCwIFwi0JvQtdC90YLQsCDQt9Cw0LrQsNC30L7QslwiICovfVxyXG4gICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICB0bz0nL2ZlZWQnXHJcbiAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XHJcbiAgICAgICAgICAgIGAke3N0eWxlcy5saW5rfSAke2lzQWN0aXZlID8gc3R5bGVzLmxpbmtfYWN0aXZlIDogJyd9YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsoeyBpc0FjdGl2ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPExpc3RJY29uIHR5cGU9e2lzQWN0aXZlID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0IHRleHRfdHlwZV9tYWluLWRlZmF1bHQgbWwtMic+XHJcbiAgICAgICAgICAgICAgICDQm9C10L3RgtCwINC30LDQutCw0LfQvtCyXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiDQm9C+0LPQvtGC0LjQvyDQv9C10YDQtdC90LDQv9GA0LDQstC70Y/QtdGCINC90LAg0LPQu9Cw0LLQvdGD0Y4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgPExpbmsgdG89Jy8nPlxyXG4gICAgICAgICAgPExvZ28gY2xhc3NOYW1lPScnIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiDQm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua19wb3NpdGlvbl9sYXN0fT5cclxuICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgdG89Jy9wcm9maWxlJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxyXG4gICAgICAgICAgICBgJHtzdHlsZXMubGlua30gJHtpc0FjdGl2ZSA/IHN0eWxlcy5saW5rX2FjdGl2ZSA6ICcnfWBcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxQcm9maWxlSWNvbiB0eXBlPXtpc0FjdGl2ZSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknfSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dCB0ZXh0X3R5cGVfbWFpbi1kZWZhdWx0IG1sLTInPlxyXG4gICAgICAgICAgICAgICAge3VzZXJOYW1lID8/ICfQm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YInfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICA8L2hlYWRlcj5cclxuKTsiXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvdWkvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnRzeCJ9