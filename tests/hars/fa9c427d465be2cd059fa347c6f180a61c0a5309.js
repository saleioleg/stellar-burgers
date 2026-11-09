import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/profile/profile.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { ProfileUI } from "/src/components/ui/pages/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useEffect = __vite__cjsImport2_react["useEffect"]; const useState = __vite__cjsImport2_react["useState"];
import { useSelector, useDispatch } from "/src/services/store.ts";
import { updateUser } from "/src/services/user-slice.ts";
export const Profile = () => {
  _s();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [formValue, setFormValue] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: ""
  });
  useEffect(() => {
    setFormValue((prevState) => ({
      ...prevState,
      name: user?.name || "",
      email: user?.email || ""
    }));
  }, [user]);
  const isFormChanged = formValue.name !== user?.name || formValue.email !== user?.email || !!formValue.password;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formValue)).unwrap().then(() => {
      setFormValue((prevState) => ({
        ...prevState,
        password: ""
      }));
    }).catch(() => {
    });
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setFormValue({
      name: user?.name || "",
      email: user?.email || "",
      password: ""
    });
  };
  const handleInputChange = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ jsxDEV(
    ProfileUI,
    {
      formValue,
      isFormChanged,
      handleInputChange,
      handleSubmit,
      handleCancel
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/pages/profile/profile.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    this
  );
};
_s(Profile, "9+hpSDZS0gEYkaMRNKl9+bEVS1M=", false, function() {
  return [useDispatch, useSelector];
});
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/pages/profile/profile.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/pages/profile/profile.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/pages/profile/profile.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0VJOztBQWhFSixTQUFTQSxpQkFBaUI7QUFDMUIsU0FBU0MsV0FBV0MsZ0JBQWdCO0FBRXBDLFNBQVNDLGFBQWFDLG1CQUFtQjtBQUN6QyxTQUFTQyxrQkFBa0I7QUFJcEIsYUFBTUMsVUFBY0EsTUFBTTtBQUFBQyxLQUFBO0FBQy9CLFFBQU1DLFdBQVdKLFlBQVk7QUFDN0IsUUFBTUssT0FBT04sWUFBWSxDQUFDTyxVQUFVQSxNQUFNRCxLQUFLQSxJQUFJO0FBRW5ELFFBQU0sQ0FBQ0UsV0FBV0MsWUFBWSxJQUFJVixTQUFTO0FBQUEsSUFDekNXLE1BQU1KLE1BQU1JLFFBQVE7QUFBQSxJQUNwQkMsT0FBT0wsTUFBTUssU0FBUztBQUFBLElBQ3RCQyxVQUFVO0FBQUEsRUFDWixDQUFDO0FBRURkLFlBQVUsTUFBTTtBQUNkVyxpQkFBYSxDQUFDSSxlQUFlO0FBQUEsTUFDM0IsR0FBR0E7QUFBQUEsTUFDSEgsTUFBTUosTUFBTUksUUFBUTtBQUFBLE1BQ3BCQyxPQUFPTCxNQUFNSyxTQUFTO0FBQUEsSUFDeEIsRUFBRTtBQUFBLEVBQ0osR0FBRyxDQUFDTCxJQUFJLENBQUM7QUFFVCxRQUFNUSxnQkFDSk4sVUFBVUUsU0FBU0osTUFBTUksUUFDekJGLFVBQVVHLFVBQVVMLE1BQU1LLFNBQzFCLENBQUMsQ0FBQ0gsVUFBVUk7QUFFZCxRQUFNRyxlQUFlQSxDQUFDQyxNQUFzQjtBQUMxQ0EsTUFBRUMsZUFBZTtBQUNqQlosYUFBU0gsV0FBV00sU0FBUyxDQUFDLEVBQzNCVSxPQUFPLEVBQ1BDLEtBQUssTUFBTTtBQUVWVixtQkFBYSxDQUFDSSxlQUFlO0FBQUEsUUFDM0IsR0FBR0E7QUFBQUEsUUFDSEQsVUFBVTtBQUFBLE1BQ1osRUFBRTtBQUFBLElBQ0osQ0FBQyxFQUNBUSxNQUFNLE1BQU07QUFBQSxJQUNYLENBQ0Q7QUFBQSxFQUNMO0FBRUEsUUFBTUMsZUFBZUEsQ0FBQ0wsTUFBc0I7QUFDMUNBLE1BQUVDLGVBQWU7QUFDakJSLGlCQUFhO0FBQUEsTUFDWEMsTUFBTUosTUFBTUksUUFBUTtBQUFBLE1BQ3BCQyxPQUFPTCxNQUFNSyxTQUFTO0FBQUEsTUFDdEJDLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBRUEsUUFBTVUsb0JBQW9CQSxDQUFDTixNQUEyQztBQUNwRVAsaUJBQWEsQ0FBQ0ksZUFBZTtBQUFBLE1BQzNCLEdBQUdBO0FBQUFBLE1BQ0gsQ0FBQ0csRUFBRU8sT0FBT2IsSUFBSSxHQUFHTSxFQUFFTyxPQUFPQztBQUFBQSxJQUM1QixFQUFFO0FBQUEsRUFDSjtBQUVBLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsSUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLNkI7QUFHakM7QUFBRXBCLEdBaEVXRCxTQUFXO0FBQUEsVUFDTEYsYUFDSkQsV0FBVztBQUFBO0FBQUF5QixLQUZidEI7QUFBVyxJQUFBc0I7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlByb2ZpbGVVSSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVwZGF0ZVVzZXIiLCJQcm9maWxlIiwiX3MiLCJkaXNwYXRjaCIsInVzZXIiLCJzdGF0ZSIsImZvcm1WYWx1ZSIsInNldEZvcm1WYWx1ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJldlN0YXRlIiwiaXNGb3JtQ2hhbmdlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVud3JhcCIsInRoZW4iLCJjYXRjaCIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJwcm9maWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9maWxlVUkgfSBmcm9tICdAdWktcGFnZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RvcmUnO1xyXG5pbXBvcnQgeyB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1zbGljZSc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEZDLCBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyKTtcclxuXHJcbiAgY29uc3QgW2Zvcm1WYWx1ZSwgc2V0Rm9ybVZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IHVzZXI/Lm5hbWUgfHwgJycsXHJcbiAgICBlbWFpbDogdXNlcj8uZW1haWwgfHwgJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGb3JtVmFsdWUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBuYW1lOiB1c2VyPy5uYW1lIHx8ICcnLFxyXG4gICAgICBlbWFpbDogdXNlcj8uZW1haWwgfHwgJycsXHJcbiAgICB9KSk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgaXNGb3JtQ2hhbmdlZCA9XHJcbiAgICBmb3JtVmFsdWUubmFtZSAhPT0gdXNlcj8ubmFtZSB8fFxyXG4gICAgZm9ybVZhbHVlLmVtYWlsICE9PSB1c2VyPy5lbWFpbCB8fFxyXG4gICAgISFmb3JtVmFsdWUucGFzc3dvcmQ7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGlzcGF0Y2godXBkYXRlVXNlcihmb3JtVmFsdWUpKVxyXG4gICAgICAudW53cmFwKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vINCe0YfQuNGJ0LDQtdC8INC/0L7Qu9C1INC/0LDRgNC+0LvRjyDQv9C+0YHQu9C1INGD0YHQv9C10YjQvdC+0LPQviDQvtCx0L3QvtCy0LvQtdC90LjRj1xyXG4gICAgICAgIHNldEZvcm1WYWx1ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAvLyDQntGI0LjQsdC60LAg0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdGC0YHRjyDQsiDRgdC70LDQudGB0LUg0LjQu9C4IFVJXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IChlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0Rm9ybVZhbHVlKHtcclxuICAgICAgbmFtZTogdXNlcj8ubmFtZSB8fCAnJyxcclxuICAgICAgZW1haWw6IHVzZXI/LmVtYWlsIHx8ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0Rm9ybVZhbHVlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2ZpbGVVSVxyXG4gICAgICBmb3JtVmFsdWU9e2Zvcm1WYWx1ZX1cclxuICAgICAgaXNGb3JtQ2hhbmdlZD17aXNGb3JtQ2hhbmdlZH1cclxuICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgaGFuZGxlQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07Il0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUudHN4In0=