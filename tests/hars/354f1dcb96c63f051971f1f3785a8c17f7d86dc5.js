import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/modal/modal.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { ModalUI } from "/src/components/ui/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport2_react["memo"]; const useEffect = __vite__cjsImport2_react["useEffect"];
import __vite__cjsImport3_reactDom from "/node_modules/.vite/deps/react-dom.js?v=5f950827"; const ReactDOM = __vite__cjsImport3_reactDom.__esModule ? __vite__cjsImport3_reactDom.default : __vite__cjsImport3_reactDom;
const modalRoot = document.getElementById("modals");
export const Modal = _s(memo(_c = _s(function Modal2({
  title,
  onClose,
  children
}) {
  _s();
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);
  return ReactDOM.createPortal(
    /* @__PURE__ */ jsxDEV(ModalUI, { title, onClose, children }, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/modal/modal.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this),
    modalRoot
  );
}, "OD7bBpZva5O2jO+Puf00hKivP7c=")), "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c2 = Modal;
var _c, _c2;
$RefreshReg$(_c, "Modal$memo");
$RefreshReg$(_c2, "Modal");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/modal/modal.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/modal/modal.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/modal/modal.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBeUJJOztBQXpCSixTQUFTQSxlQUFlO0FBQ3hCLFNBQVNDLE1BQU1DLGlCQUFpQjtBQUNoQyxPQUFPQyxjQUFjO0FBSXJCLE1BQU1DLFlBQVlDLFNBQVNDLGVBQWUsUUFBUTtBQUUzQyxhQUFNQyxRQUFLQyxHQUFHUCxLQUFJUSxLQUFBRCxHQUFDLFNBQVNELE9BQU07QUFBQSxFQUN2Q0c7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFDVyxHQUFzQjtBQUFBSixLQUFBO0FBQ2pDTixZQUFVLE1BQU07QUFDZCxVQUFNVyxZQUFZQSxDQUFDQyxNQUEyQjtBQUM1QyxVQUFJQSxFQUFFQyxRQUFRLFNBQVVKLFNBQVE7QUFBQSxJQUNsQztBQUVBTixhQUFTVyxpQkFBaUIsV0FBV0gsU0FBUztBQUM5QyxXQUFPLE1BQVk7QUFDakJSLGVBQVNZLG9CQUFvQixXQUFXSixTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO0FBRVosU0FBT1IsU0FBU2U7QUFBQUEsSUFDZCx1QkFBQyxXQUFRLE9BQWMsU0FDcEJOLFlBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsSUFDQVI7QUFBQUEsRUFDRjtBQUNGLEdBQUMsa0NBQUM7QUFBQ2UsTUF0QlVaO0FBQUssSUFBQUUsSUFBQVU7QUFBQUMsYUFBQVgsSUFBQTtBQUFBVyxhQUFBRCxLQUFBIiwibmFtZXMiOlsiTW9kYWxVSSIsIm1lbW8iLCJ1c2VFZmZlY3QiLCJSZWFjdERPTSIsIm1vZGFsUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNb2RhbCIsIl9zIiwiX2MiLCJ0aXRsZSIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsImhhbmRsZUVzYyIsImUiLCJrZXkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVBvcnRhbCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWxVSSB9IGZyb20gJ0B1aSc7XG5pbXBvcnQgeyBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHR5cGUgeyBUTW9kYWxQcm9wcyB9IGZyb20gJy4vdHlwZSc7XG5cbmNvbnN0IG1vZGFsUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbHMnKTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gbWVtbyhmdW5jdGlvbiBNb2RhbCh7XG4gIHRpdGxlLFxuICBvbkNsb3NlLFxuICBjaGlsZHJlbixcbn06IFRNb2RhbFByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUVzYyA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBvbkNsb3NlKCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2MpO1xuICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcbiAgICB9O1xuICB9LCBbb25DbG9zZV0pO1xuXG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgPE1vZGFsVUkgdGl0bGU9e3RpdGxlfSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01vZGFsVUk+LFxuICAgIG1vZGFsUm9vdCBhcyBIVE1MRGl2RWxlbWVudFxuICApO1xufSk7XG4iXSwiZmlsZSI6IkM6L3ByYWN0aWN1bS9zdGVsbGFyLWJ1cmdlcnMvc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwudHN4In0=