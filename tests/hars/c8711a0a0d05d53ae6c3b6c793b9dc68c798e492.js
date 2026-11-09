import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/register/register.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useState = __vite__cjsImport1_react["useState"];
import { RegisterUI } from "/src/components/ui/pages/index.ts";
import { useDispatch } from "/src/services/store.ts";
import { registerUser } from "/src/services/user-slice.ts";
export const Register = () => {
  _s();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: userName,
        email,
        password
      })
    );
  };
  return /* @__PURE__ */ jsxDEV(
    RegisterUI,
    {
      errorText: "",
      email,
      userName,
      password,
      setEmail,
      setPassword,
      setUserName,
      handleSubmit
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/pages/register/register.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
};
_s(Register, "V4icRySIKEpQcKaYBHzF7jUeG6w=", false, function() {
  return [useDispatch];
});
_c = Register;
var _c;
$RefreshReg$(_c, "Register");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/pages/register/register.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/pages/register/register.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/pages/register/register.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBeUJJOztBQXpCSixTQUFTQSxnQkFBZ0I7QUFFekIsU0FBU0Msa0JBQWtCO0FBQzNCLFNBQVNDLG1CQUFtQjtBQUM1QixTQUFTQyxvQkFBb0I7QUFFdEIsYUFBTUMsV0FBZUEsTUFBTTtBQUFBQyxLQUFBO0FBQ2hDLFFBQU0sQ0FBQ0MsVUFBVUMsV0FBVyxJQUFJUCxTQUFTLEVBQUU7QUFDM0MsUUFBTSxDQUFDUSxPQUFPQyxRQUFRLElBQUlULFNBQVMsRUFBRTtBQUNyQyxRQUFNLENBQUNVLFVBQVVDLFdBQVcsSUFBSVgsU0FBUyxFQUFFO0FBRTNDLFFBQU1ZLFdBQVdWLFlBQVk7QUFFN0IsUUFBTVcsZUFBZUEsQ0FBQ0MsTUFBc0I7QUFDMUNBLE1BQUVDLGVBQWU7QUFDakJIO0FBQUFBLE1BQ0VULGFBQWE7QUFBQSxRQUNYYSxNQUFNVjtBQUFBQSxRQUNORTtBQUFBQSxRQUNBRTtBQUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUVBLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVU7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxJQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVE2QjtBQUdqQztBQUFFTCxHQTlCV0QsVUFBWTtBQUFBLFVBS05GLFdBQVc7QUFBQTtBQUFBZSxLQUxqQmI7QUFBWSxJQUFBYTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWdpc3RlclVJIiwidXNlRGlzcGF0Y2giLCJyZWdpc3RlclVzZXIiLCJSZWdpc3RlciIsIl9zIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicmVnaXN0ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdHlwZSB7IEZDLCBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSZWdpc3RlclVJIH0gZnJvbSAnQHVpLXBhZ2VzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItc2xpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICByZWdpc3RlclVzZXIoe1xyXG4gICAgICAgIG5hbWU6IHVzZXJOYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVnaXN0ZXJVSVxyXG4gICAgICBlcnJvclRleHQ9XCJcIlxyXG4gICAgICBlbWFpbD17ZW1haWx9XHJcbiAgICAgIHVzZXJOYW1lPXt1c2VyTmFtZX1cclxuICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxyXG4gICAgICBzZXRFbWFpbD17c2V0RW1haWx9XHJcbiAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cclxuICAgICAgc2V0VXNlck5hbWU9e3NldFVzZXJOYW1lfVxyXG4gICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTsiXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnRzeCJ9