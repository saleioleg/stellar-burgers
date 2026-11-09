import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/login/login.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { LoginUI } from "/src/components/ui/pages/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useState = __vite__cjsImport2_react["useState"];
import { useNavigate, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { useDispatch, useSelector } from "/src/services/store.ts";
import { loginUser } from "/src/services/user-slice.ts";
export const Login = () => {
  _s();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { error } = useSelector((state) => state.user);
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })).unwrap().then(() => {
      navigate(from, { replace: true });
    }).catch(() => {
    });
  };
  return /* @__PURE__ */ jsxDEV(
    LoginUI,
    {
      errorText: error || "",
      email,
      setEmail,
      password,
      setPassword,
      handleSubmit
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/pages/login/login.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
};
_s(Login, "MQtN2oLFTHtg5IBZ8fsXyHYwdlE=", false, function() {
  return [useDispatch, useNavigate, useLocation, useSelector];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/pages/login/login.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/pages/login/login.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/pages/login/login.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0NJOztBQXBDSixTQUFTQSxlQUFlO0FBQ3hCLFNBQVNDLGdCQUFnQjtBQUN6QixTQUFTQyxhQUFhQyxtQkFBbUI7QUFFekMsU0FBU0MsYUFBYUMsbUJBQW1CO0FBQ3pDLFNBQVNDLGlCQUFpQjtBQUluQixhQUFNQyxRQUFZQSxNQUFNO0FBQUFDLEtBQUE7QUFDN0IsUUFBTSxDQUFDQyxPQUFPQyxRQUFRLElBQUlULFNBQVMsRUFBRTtBQUNyQyxRQUFNLENBQUNVLFVBQVVDLFdBQVcsSUFBSVgsU0FBUyxFQUFFO0FBRTNDLFFBQU1ZLFdBQVdULFlBQVk7QUFDN0IsUUFBTVUsV0FBV1osWUFBWTtBQUM3QixRQUFNYSxXQUFXWixZQUFZO0FBRTdCLFFBQU0sRUFBRWEsTUFBTSxJQUFJWCxZQUFZLENBQUNZLFVBQVVBLE1BQU1DLElBQUk7QUFFbkQsUUFBTUMsT0FBT0osU0FBU0UsT0FBT0UsTUFBTUMsWUFBWTtBQUUvQyxRQUFNQyxlQUFlQSxDQUFDQyxNQUFzQjtBQUMxQ0EsTUFBRUMsZUFBZTtBQUVqQlYsYUFBU1AsVUFBVSxFQUFFRyxPQUFPRSxTQUFTLENBQUMsQ0FBQyxFQUNwQ2EsT0FBTyxFQUNQQyxLQUFLLE1BQU07QUFFVlgsZUFBU0ssTUFBTSxFQUFFTyxTQUFTLEtBQUssQ0FBQztBQUFBLElBQ2xDLENBQUMsRUFDQUMsTUFBTSxNQUFNO0FBQUEsSUFDWCxDQUNEO0FBQUEsRUFDTDtBQUVBLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVdYLFNBQVM7QUFBQSxNQUNwQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTTZCO0FBR2pDO0FBQUVSLEdBcENXRCxPQUFTO0FBQUEsVUFJSEgsYUFDQUYsYUFDQUMsYUFFQ0UsV0FBVztBQUFBO0FBQUF1QixLQVJsQnJCO0FBQVMsSUFBQXFCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJMb2dpblVJIiwidXNlU3RhdGUiLCJ1c2VOYXZpZ2F0ZSIsInVzZUxvY2F0aW9uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ2luVXNlciIsIkxvZ2luIiwiX3MiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRpc3BhdGNoIiwibmF2aWdhdGUiLCJsb2NhdGlvbiIsImVycm9yIiwic3RhdGUiLCJ1c2VyIiwiZnJvbSIsInBhdGhuYW1lIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidW53cmFwIiwidGhlbiIsInJlcGxhY2UiLCJjYXRjaCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImxvZ2luLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpblVJIH0gZnJvbSAnQHVpLXBhZ2VzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RvcmUnO1xyXG5pbXBvcnQgeyBsb2dpblVzZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLXNsaWNlJztcclxuXHJcbmltcG9ydCB0eXBlIHsgRkMsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcblxyXG4gIGNvbnN0IHsgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IGZyb20gPSBsb2NhdGlvbi5zdGF0ZT8uZnJvbT8ucGF0aG5hbWUgfHwgJy8nO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBkaXNwYXRjaChsb2dpblVzZXIoeyBlbWFpbCwgcGFzc3dvcmQgfSkpXHJcbiAgICAgIC51bndyYXAoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8g0J/QtdGA0LXQvdCw0L/RgNCw0LLQu9GP0LXQvCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L7QsdGA0LDRgtC90L4g0L3QsCDQuNGB0YXQvtC00L3Rg9GOINGB0YLRgNCw0L3QuNGG0YMg0LjQu9C4INC90LAg0LPQu9Cw0LLQvdGD0Y5cclxuICAgICAgICBuYXZpZ2F0ZShmcm9tLCB7IHJlcGxhY2U6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgLy8g0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC40YLRgdGPINCyIFJlZHV4LdGB0YLQvtGA0LUgKHN0YXRlLnVzZXIuZXJyb3IpXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9naW5VSVxyXG4gICAgICBlcnJvclRleHQ9e2Vycm9yIHx8ICcnfVxyXG4gICAgICBlbWFpbD17ZW1haWx9XHJcbiAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cclxuICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxyXG4gICAgICBzZXRQYXNzd29yZD17c2V0UGFzc3dvcmR9XHJcbiAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgLz5cclxuICApO1xyXG59OyJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvcGFnZXMvbG9naW4vbG9naW4udHN4In0=