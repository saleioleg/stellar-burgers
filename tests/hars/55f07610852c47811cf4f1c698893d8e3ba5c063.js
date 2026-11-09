import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/reset-password/reset-password.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { resetPasswordApi } from "/src/utils/burger-api.ts";
import { ResetPasswordUI } from "/src/components/ui/pages/index.ts";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
export const ResetPassword = () => {
  _s();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    void resetPasswordApi({ password, token }).then(() => {
      localStorage.removeItem("resetPassword");
      void navigate("/login");
    }).catch((err) => setError(err));
  };
  useEffect(() => {
    if (!localStorage.getItem("resetPassword")) {
      void navigate("/forgot-password", { replace: true });
    }
  }, [navigate]);
  return /* @__PURE__ */ jsxDEV(
    ResetPasswordUI,
    {
      errorText: error?.message,
      password,
      token,
      setPassword,
      setToken,
      handleSubmit
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/pages/reset-password/reset-password.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  );
};
_s(ResetPassword, "Mq/s6piO/cSIbAzrmGdQBH0iqvY=", false, function() {
  return [useNavigate];
});
_c = ResetPassword;
var _c;
$RefreshReg$(_c, "ResetPassword");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/pages/reset-password/reset-password.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/pages/reset-password/reset-password.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/pages/reset-password/reset-password.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBOEJJOztBQTlCSixTQUFTQSx3QkFBd0I7QUFDakMsU0FBU0MsdUJBQXVCO0FBQ2hDLFNBQThCQyxXQUFXQyxnQkFBZ0I7QUFDekQsU0FBU0MsbUJBQW1CO0FBRXJCLGFBQU1DLGdCQUFnQkEsTUFBeUI7QUFBQUMsS0FBQTtBQUNwRCxRQUFNQyxXQUFXSCxZQUFZO0FBQzdCLFFBQU0sQ0FBQ0ksVUFBVUMsV0FBVyxJQUFJTixTQUFTLEVBQUU7QUFDM0MsUUFBTSxDQUFDTyxPQUFPQyxRQUFRLElBQUlSLFNBQVMsRUFBRTtBQUNyQyxRQUFNLENBQUNTLE9BQU9DLFFBQVEsSUFBSVYsU0FBdUIsSUFBSTtBQUVyRCxRQUFNVyxlQUFlQSxDQUFDQyxNQUE0QjtBQUNoREEsTUFBRUMsZUFBZTtBQUVqQkgsYUFBUyxJQUFJO0FBQ2IsU0FBS2IsaUJBQWlCLEVBQUVRLFVBQVVFLE1BQU0sQ0FBQyxFQUN0Q08sS0FBSyxNQUFNO0FBQ1ZDLG1CQUFhQyxXQUFXLGVBQWU7QUFDdkMsV0FBS1osU0FBUyxRQUFRO0FBQUEsSUFDeEIsQ0FBQyxFQUNBYSxNQUFNLENBQUNDLFFBQWVSLFNBQVNRLEdBQUcsQ0FBQztBQUFBLEVBQ3hDO0FBRUFuQixZQUFVLE1BQU07QUFDZCxRQUFJLENBQUNnQixhQUFhSSxRQUFRLGVBQWUsR0FBRztBQUMxQyxXQUFLZixTQUFTLG9CQUFvQixFQUFFZ0IsU0FBUyxLQUFLLENBQUM7QUFBQSxJQUNyRDtBQUFBLEVBQ0YsR0FBRyxDQUFDaEIsUUFBUSxDQUFDO0FBRWIsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsV0FBV0ssT0FBT1k7QUFBQUEsTUFDbEI7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxJQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU02QjtBQUdqQztBQUFFbEIsR0FsQ1dELGVBQWE7QUFBQSxVQUNQRCxXQUFXO0FBQUE7QUFBQXFCLEtBRGpCcEI7QUFBYSxJQUFBb0I7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInJlc2V0UGFzc3dvcmRBcGkiLCJSZXNldFBhc3N3b3JkVUkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwiUmVzZXRQYXNzd29yZCIsIl9zIiwibmF2aWdhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidG9rZW4iLCJzZXRUb2tlbiIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImNhdGNoIiwiZXJyIiwiZ2V0SXRlbSIsInJlcGxhY2UiLCJtZXNzYWdlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicmVzZXQtcGFzc3dvcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc2V0UGFzc3dvcmRBcGkgfSBmcm9tICdAYXBpJztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRVSSB9IGZyb20gJ0B1aS1wYWdlcyc7XG5pbXBvcnQgeyB0eXBlIFN5bnRoZXRpY0V2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGNvbnN0IFJlc2V0UGFzc3dvcmQgPSAoKTogUmVhY3QuSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxFcnJvciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBTeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldEVycm9yKG51bGwpO1xuICAgIHZvaWQgcmVzZXRQYXNzd29yZEFwaSh7IHBhc3N3b3JkLCB0b2tlbiB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVzZXRQYXNzd29yZCcpO1xuICAgICAgICB2b2lkIG5hdmlnYXRlKCcvbG9naW4nKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHNldEVycm9yKGVycikpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzZXRQYXNzd29yZCcpKSB7XG4gICAgICB2b2lkIG5hdmlnYXRlKCcvZm9yZ290LXBhc3N3b3JkJywgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVzZXRQYXNzd29yZFVJXG4gICAgICBlcnJvclRleHQ9e2Vycm9yPy5tZXNzYWdlfVxuICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxuICAgICAgdG9rZW49e3Rva2VufVxuICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfVxuICAgICAgc2V0VG9rZW49e3NldFRva2VufVxuICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgLz5cbiAgKTtcbn07XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRzeCJ9