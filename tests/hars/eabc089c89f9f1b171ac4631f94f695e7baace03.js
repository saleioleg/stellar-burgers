import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/protected-route/protected-route.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Navigate, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { useSelector } from "/src/services/store.ts";
import { Preloader } from "/src/components/ui/preloader/index.ts";
export const ProtectedRoute = ({
  onlyUnAuth = false,
  children
}) => {
  _s();
  const location = useLocation();
  const { user, isAuthChecked } = useSelector((state) => state.user);
  if (!isAuthChecked) {
    return /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/protected-route/protected-route.tsx",
      lineNumber: 20,
      columnNumber: 12
    }, this);
  }
  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: "/" };
    return /* @__PURE__ */ jsxDEV(Navigate, { to: from, replace: true }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/protected-route/protected-route.tsx",
      lineNumber: 27,
      columnNumber: 12
    }, this);
  }
  if (!onlyUnAuth && !user) {
    return /* @__PURE__ */ jsxDEV(Navigate, { to: "/login", state: { from: location }, replace: true }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/protected-route/protected-route.tsx",
      lineNumber: 33,
      columnNumber: 12
    }, this);
  }
  return children;
};
_s(ProtectedRoute, "nsl07ubJ8bJ+5z1SEYZpS8dBcTE=", false, function() {
  return [useLocation, useSelector];
});
_c = ProtectedRoute;
var _c;
$RefreshReg$(_c, "ProtectedRoute");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/protected-route/protected-route.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/protected-route/protected-route.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/protected-route/protected-route.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbUJXOztBQWxCWCxTQUFTQSxVQUFVQyxtQkFBbUI7QUFDdEMsU0FBU0MsbUJBQW1CO0FBQzVCLFNBQVNDLGlCQUFpQjtBQU9uQixhQUFNQyxpQkFBaUJBLENBQUM7QUFBQSxFQUM3QkMsYUFBYTtBQUFBLEVBQ2JDO0FBQ29CLE1BQU07QUFBQUMsS0FBQTtBQUMxQixRQUFNQyxXQUFXUCxZQUFZO0FBQzdCLFFBQU0sRUFBRVEsTUFBTUMsY0FBYyxJQUFJUixZQUFZLENBQUNTLFVBQVVBLE1BQU1GLElBQUk7QUFHakUsTUFBSSxDQUFDQyxlQUFlO0FBQ2xCLFdBQU8sdUJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVU7QUFBQSxFQUNuQjtBQUlBLE1BQUlMLGNBQWNJLE1BQU07QUFDdEIsVUFBTUcsT0FBT0osU0FBU0csT0FBT0MsUUFBUSxFQUFFQyxVQUFVLElBQUk7QUFDckQsV0FBTyx1QkFBQyxZQUFTLElBQUlELE1BQU0sU0FBTyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTJCO0FBQUEsRUFDcEM7QUFJQSxNQUFJLENBQUNQLGNBQWMsQ0FBQ0ksTUFBTTtBQUN4QixXQUFPLHVCQUFDLFlBQVMsSUFBRyxVQUFTLE9BQU8sRUFBRUcsTUFBTUosU0FBUyxHQUFHLFNBQU8sUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3RDtBQUFBLEVBQ2pFO0FBRUEsU0FBT0Y7QUFDVDtBQUFFQyxHQTFCV0gsZ0JBQWM7QUFBQSxVQUlSSCxhQUNlQyxXQUFXO0FBQUE7QUFBQVksS0FMaENWO0FBQWMsSUFBQVU7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIk5hdmlnYXRlIiwidXNlTG9jYXRpb24iLCJ1c2VTZWxlY3RvciIsIlByZWxvYWRlciIsIlByb3RlY3RlZFJvdXRlIiwib25seVVuQXV0aCIsImNoaWxkcmVuIiwiX3MiLCJsb2NhdGlvbiIsInVzZXIiLCJpc0F1dGhDaGVja2VkIiwic3RhdGUiLCJmcm9tIiwicGF0aG5hbWUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJwcm90ZWN0ZWQtcm91dGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gJy4uL3VpL3ByZWxvYWRlcic7XHJcblxyXG50eXBlIFRQcm90ZWN0ZWRSb3V0ZVByb3BzID0ge1xyXG4gIG9ubHlVbkF1dGg/OiBib29sZWFuO1xyXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdGVjdGVkUm91dGUgPSAoe1xyXG4gIG9ubHlVbkF1dGggPSBmYWxzZSxcclxuICBjaGlsZHJlblxyXG59OiBUUHJvdGVjdGVkUm91dGVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB7IHVzZXIsIGlzQXV0aENoZWNrZWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIC8vINCf0L7QutCwINC90LUg0LfQsNCy0LXRgNGI0LjQu9Cw0YHRjCDQv9GA0L7QstC10YDQutCwINCw0LLRgtC+0YDQuNC30LDRhtC40LgsINC/0L7QutCw0LfRi9Cy0LDQtdC8INC40L3QtNC40LrQsNGC0L7RgCDQt9Cw0LPRgNGD0LfQutC4XHJcbiAgaWYgKCFpc0F1dGhDaGVja2VkKSB7XHJcbiAgICByZXR1cm4gPFByZWxvYWRlciAvPjtcclxuICB9XHJcblxyXG4gIC8vINCV0YHQu9C4INGA0L7Rg9GCINC/0YDQtdC00L3QsNC30L3QsNGH0LXQvSDRgtC+0LvRjNC60L4g0LTQu9GPINC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9GFICjQvdCw0L/RgNC40LzQtdGALCAvbG9naW4sIC9yZWdpc3RlciksXHJcbiAgLy8g0LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGD0LbQtSDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9IOKAlCDQv9C10YDQtdC90LDQv9GA0LDQstC70Y/QtdC8INC10LPQviDQvdCw0LfQsNC0INC40LvQuCDQvdCwINCz0LvQsNCy0L3Rg9GOXHJcbiAgaWYgKG9ubHlVbkF1dGggJiYgdXNlcikge1xyXG4gICAgY29uc3QgZnJvbSA9IGxvY2F0aW9uLnN0YXRlPy5mcm9tIHx8IHsgcGF0aG5hbWU6ICcvJyB9O1xyXG4gICAgcmV0dXJuIDxOYXZpZ2F0ZSB0bz17ZnJvbX0gcmVwbGFjZSAvPjtcclxuICB9XHJcblxyXG4gIC8vINCV0YHQu9C4INGA0L7Rg9GCINC30LDRidC40YnRkdC90L3Ri9C5LCDQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9IOKAlCDQv9C10YDQtdC90LDQv9GA0LDQstC70Y/QtdC8INC90LAgL2xvZ2luLFxyXG4gIC8vINGB0L7RhdGA0LDQvdGP0Y8g0YLQtdC60YPRidC40Lkg0LDQtNGA0LXRgSDQsiBzdGF0ZSDQtNC70Y8g0L/QvtGB0LvQtdC00YPRjtGJ0LXQs9C+INCy0L7Qt9Cy0YDQsNGC0LBcclxuICBpZiAoIW9ubHlVbkF1dGggJiYgIXVzZXIpIHtcclxuICAgIHJldHVybiA8TmF2aWdhdGUgdG89Jy9sb2dpbicgc3RhdGU9e3sgZnJvbTogbG9jYXRpb24gfX0gcmVwbGFjZSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTsiXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkLXJvdXRlL3Byb3RlY3RlZC1yb3V0ZS50c3gifQ==