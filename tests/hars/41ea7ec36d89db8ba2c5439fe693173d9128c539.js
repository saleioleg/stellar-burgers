import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/profile-menu/profile-menu.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { ProfileMenuUI } from "/src/components/ui/index.ts";
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { useDispatch } from "/src/services/store.ts";
import { logoutUser } from "/src/services/user-slice.ts";
export const ProfileMenu = () => {
  _s();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return /* @__PURE__ */ jsxDEV(ProfileMenuUI, { handleLogout, pathname }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/profile-menu/profile-menu.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
};
_s(ProfileMenu, "eYc/xH9yPgy6MHRi2xSHaqYdkI8=", false, function() {
  return [useLocation, useDispatch];
});
_c = ProfileMenu;
var _c;
$RefreshReg$(_c, "ProfileMenu");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/profile-menu/profile-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/profile-menu/profile-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/profile-menu/profile-menu.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JTOztBQWhCVCxTQUFTQSxxQkFBcUI7QUFDOUIsU0FBU0MsbUJBQW1CO0FBRTVCLFNBQVNDLG1CQUFtQjtBQUM1QixTQUFTQyxrQkFBa0I7QUFJcEIsYUFBTUMsY0FBa0JBLE1BQU07QUFBQUMsS0FBQTtBQUNuQyxRQUFNLEVBQUVDLFNBQVMsSUFBSUwsWUFBWTtBQUNqQyxRQUFNTSxXQUFXTCxZQUFZO0FBRTdCLFFBQU1NLGVBQWVBLE1BQU07QUFDekJELGFBQVNKLFdBQVcsQ0FBQztBQUFBLEVBQ3ZCO0FBRUEsU0FBTyx1QkFBQyxpQkFBYyxjQUE0QixZQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThEO0FBQ3ZFO0FBQUVFLEdBVFdELGFBQWU7QUFBQSxVQUNMSCxhQUNKQyxXQUFXO0FBQUE7QUFBQU8sS0FGakJMO0FBQWUsSUFBQUs7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlByb2ZpbGVNZW51VUkiLCJ1c2VMb2NhdGlvbiIsInVzZURpc3BhdGNoIiwibG9nb3V0VXNlciIsIlByb2ZpbGVNZW51IiwiX3MiLCJwYXRobmFtZSIsImRpc3BhdGNoIiwiaGFuZGxlTG9nb3V0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicHJvZmlsZS1tZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9maWxlTWVudVVJIH0gZnJvbSAnQHVpJztcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RvcmUnO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1zbGljZSc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVNZW51OiBGQyA9ICgpID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0VXNlcigpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPFByb2ZpbGVNZW51VUkgaGFuZGxlTG9nb3V0PXtoYW5kbGVMb2dvdXR9IHBhdGhuYW1lPXtwYXRobmFtZX0gLz47XHJcbn07XHJcbiJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy9wcm9maWxlLW1lbnUvcHJvZmlsZS1tZW51LnRzeCJ9