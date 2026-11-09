import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/forgot-password/forgot-password.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { forgotPasswordApi } from "/src/utils/burger-api.ts";
import { ForgotPasswordUI } from "/src/components/ui/pages/index.ts";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useState = __vite__cjsImport3_react["useState"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
export const ForgotPassword = () => {
  _s();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    void forgotPasswordApi({ email }).then(() => {
      localStorage.setItem("resetPassword", "true");
      void navigate("/reset-password", { replace: true });
    }).catch((err) => setError(err));
  };
  return /* @__PURE__ */ jsxDEV(
    ForgotPasswordUI,
    {
      errorText: error?.message,
      email,
      setEmail,
      handleSubmit
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/pages/forgot-password/forgot-password.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
};
_s(ForgotPassword, "BB0Ed4F0LbHjPUuh7+Vao0bkmSU=", false, function() {
  return [useNavigate];
});
_c = ForgotPassword;
var _c;
$RefreshReg$(_c, "ForgotPassword");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/pages/forgot-password/forgot-password.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/pages/forgot-password/forgot-password.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/pages/forgot-password/forgot-password.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBd0JJOztBQXhCSixTQUFTQSx5QkFBeUI7QUFDbEMsU0FBU0Msd0JBQXdCO0FBQ2pDLFNBQVNDLGdCQUFxQztBQUM5QyxTQUFTQyxtQkFBbUI7QUFFckIsYUFBTUMsaUJBQWlCQSxNQUF5QjtBQUFBQyxLQUFBO0FBQ3JELFFBQU0sQ0FBQ0MsT0FBT0MsUUFBUSxJQUFJTCxTQUFTLEVBQUU7QUFDckMsUUFBTSxDQUFDTSxPQUFPQyxRQUFRLElBQUlQLFNBQXVCLElBQUk7QUFFckQsUUFBTVEsV0FBV1AsWUFBWTtBQUU3QixRQUFNUSxlQUFlQSxDQUFDQyxNQUE0QjtBQUNoREEsTUFBRUMsZUFBZTtBQUVqQkosYUFBUyxJQUFJO0FBQ2IsU0FBS1Qsa0JBQWtCLEVBQUVNLE1BQU0sQ0FBQyxFQUM3QlEsS0FBSyxNQUFNO0FBQ1ZDLG1CQUFhQyxRQUFRLGlCQUFpQixNQUFNO0FBQzVDLFdBQUtOLFNBQVMsbUJBQW1CLEVBQUVPLFNBQVMsS0FBSyxDQUFDO0FBQUEsSUFDcEQsQ0FBQyxFQUNBQyxNQUFNLENBQUNDLFFBQWVWLFNBQVNVLEdBQUcsQ0FBQztBQUFBLEVBQ3hDO0FBRUEsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsV0FBV1gsT0FBT1k7QUFBQUEsTUFDbEI7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsSUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJNkI7QUFHakM7QUFBRWYsR0ExQldELGdCQUFjO0FBQUEsVUFJUkQsV0FBVztBQUFBO0FBQUFrQixLQUpqQmpCO0FBQWMsSUFBQWlCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJmb3Jnb3RQYXNzd29yZEFwaSIsIkZvcmdvdFBhc3N3b3JkVUkiLCJ1c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwiRm9yZ290UGFzc3dvcmQiLCJfcyIsImVtYWlsIiwic2V0RW1haWwiLCJlcnJvciIsInNldEVycm9yIiwibmF2aWdhdGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlcGxhY2UiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJmb3Jnb3QtcGFzc3dvcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcmdvdFBhc3N3b3JkQXBpIH0gZnJvbSAnQGFwaSc7XG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZFVJIH0gZnJvbSAnQHVpLXBhZ2VzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB0eXBlIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkID0gKCk6IFJlYWN0LkpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8RXJyb3IgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFN5bnRoZXRpY0V2ZW50KTogdm9pZCA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgdm9pZCBmb3Jnb3RQYXNzd29yZEFwaSh7IGVtYWlsIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXNldFBhc3N3b3JkJywgJ3RydWUnKTtcbiAgICAgICAgdm9pZCBuYXZpZ2F0ZSgnL3Jlc2V0LXBhc3N3b3JkJywgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gc2V0RXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9yZ290UGFzc3dvcmRVSVxuICAgICAgZXJyb3JUZXh0PXtlcnJvcj8ubWVzc2FnZX1cbiAgICAgIGVtYWlsPXtlbWFpbH1cbiAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cbiAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgIC8+XG4gICk7XG59O1xuIl0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnRzeCJ9