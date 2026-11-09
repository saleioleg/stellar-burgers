import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/burger-ingredients/burger-ingredients.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { BurgerIngredientsUI } from "/src/components/ui/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useMemo = __vite__cjsImport2_react["useMemo"]; const useState = __vite__cjsImport2_react["useState"]; const useRef = __vite__cjsImport2_react["useRef"];
import { useSelector } from "/src/services/store.ts";
import { selectIngredients } from "/src/services/ingredient-slice.ts";
export const BurgerIngredients = () => {
  _s();
  const [currentTab, setCurrentTab] = useState("bun");
  const titleBunRef = useRef(null);
  const titleMainRef = useRef(null);
  const titleSaucesRef = useRef(null);
  const ingredients = useSelector(selectIngredients);
  const onTabClick = (tab) => {
    const tabMode = tab;
    setCurrentTab(tabMode);
    if (tabMode === "bun") {
      titleBunRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (tabMode === "main") {
      titleMainRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (tabMode === "sauce") {
      titleSaucesRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const buns = useMemo(
    () => ingredients.filter((item) => item.type === "bun"),
    [ingredients]
  );
  const mains = useMemo(
    () => ingredients.filter((item) => item.type === "main"),
    [ingredients]
  );
  const sauces = useMemo(
    () => ingredients.filter((item) => item.type === "sauce"),
    [ingredients]
  );
  const dummyRef = () => {
  };
  return /* @__PURE__ */ jsxDEV(
    BurgerIngredientsUI,
    {
      currentTab,
      buns,
      mains,
      sauces,
      titleBunRef,
      titleMainRef,
      titleSaucesRef,
      bunsRef: dummyRef,
      mainsRef: dummyRef,
      saucesRef: dummyRef,
      onTabClick
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/burger-ingredients/burger-ingredients.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
};
_s(BurgerIngredients, "Omin2NTQrLrzfdj3F/2hnmeeJrA=", false, function() {
  return [useSelector];
});
_c = BurgerIngredients;
var _c;
$RefreshReg$(_c, "BurgerIngredients");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/burger-ingredients/burger-ingredients.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/burger-ingredients/burger-ingredients.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/burger-ingredients/burger-ingredients.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0RJOztBQWhESixTQUFTQSwyQkFBMkI7QUFDcEMsU0FBU0MsU0FBU0MsVUFBVUMsY0FBYztBQUUxQyxTQUFTQyxtQkFBbUI7QUFDNUIsU0FBU0MseUJBQXlCO0FBSTNCLGFBQU1DLG9CQUFvQkEsTUFBeUI7QUFBQUMsS0FBQTtBQUN4RCxRQUFNLENBQUNDLFlBQVlDLGFBQWEsSUFBSVAsU0FBbUIsS0FBSztBQUU1RCxRQUFNUSxjQUFjUCxPQUEyQixJQUFJO0FBQ25ELFFBQU1RLGVBQWVSLE9BQTJCLElBQUk7QUFDcEQsUUFBTVMsaUJBQWlCVCxPQUEyQixJQUFJO0FBRXRELFFBQU1VLGNBQWNULFlBQVlDLGlCQUFpQjtBQUVqRCxRQUFNUyxhQUFhQSxDQUFDQyxRQUFzQjtBQUN4QyxVQUFNQyxVQUFVRDtBQUNoQk4sa0JBQWNPLE9BQU87QUFFckIsUUFBSUEsWUFBWSxPQUFPO0FBQ3JCTixrQkFBWU8sU0FBU0MsZUFBZSxFQUFFQyxVQUFVLFNBQVMsQ0FBQztBQUFBLElBQzVELFdBQVdILFlBQVksUUFBUTtBQUM3QkwsbUJBQWFNLFNBQVNDLGVBQWUsRUFBRUMsVUFBVSxTQUFTLENBQUM7QUFBQSxJQUM3RCxXQUFXSCxZQUFZLFNBQVM7QUFDOUJKLHFCQUFlSyxTQUFTQyxlQUFlLEVBQUVDLFVBQVUsU0FBUyxDQUFDO0FBQUEsSUFDL0Q7QUFBQSxFQUNGO0FBRUEsUUFBTUMsT0FBT25CO0FBQUFBLElBQ1gsTUFBTVksWUFBWVEsT0FBTyxDQUFDQyxTQUFzQkEsS0FBS0MsU0FBUyxLQUFLO0FBQUEsSUFDbkUsQ0FBQ1YsV0FBVztBQUFBLEVBQ2Q7QUFFQSxRQUFNVyxRQUFRdkI7QUFBQUEsSUFDWixNQUFNWSxZQUFZUSxPQUFPLENBQUNDLFNBQXNCQSxLQUFLQyxTQUFTLE1BQU07QUFBQSxJQUNwRSxDQUFDVixXQUFXO0FBQUEsRUFDZDtBQUVBLFFBQU1ZLFNBQVN4QjtBQUFBQSxJQUNiLE1BQU1ZLFlBQVlRLE9BQU8sQ0FBQ0MsU0FBc0JBLEtBQUtDLFNBQVMsT0FBTztBQUFBLElBQ3JFLENBQUNWLFdBQVc7QUFBQSxFQUNkO0FBRUEsUUFBTWEsV0FBV0EsTUFBTTtBQUFBLEVBQUM7QUFFeEIsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFNBQVNBO0FBQUFBLE1BQ1QsVUFBVUE7QUFBQUEsTUFDVixXQUFXQTtBQUFBQSxNQUNYO0FBQUE7QUFBQSxJQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVd5QjtBQUc3QjtBQUFFbkIsR0F0RFdELG1CQUFpQjtBQUFBLFVBT1JGLFdBQVc7QUFBQTtBQUFBdUIsS0FQcEJyQjtBQUFpQixJQUFBcUI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkJ1cmdlckluZ3JlZGllbnRzVUkiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEluZ3JlZGllbnRzIiwiQnVyZ2VySW5ncmVkaWVudHMiLCJfcyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwidGl0bGVCdW5SZWYiLCJ0aXRsZU1haW5SZWYiLCJ0aXRsZVNhdWNlc1JlZiIsImluZ3JlZGllbnRzIiwib25UYWJDbGljayIsInRhYiIsInRhYk1vZGUiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJ1bnMiLCJmaWx0ZXIiLCJpdGVtIiwidHlwZSIsIm1haW5zIiwic2F1Y2VzIiwiZHVtbXlSZWYiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJidXJnZXItaW5ncmVkaWVudHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1cmdlckluZ3JlZGllbnRzVUkgfSBmcm9tICdAdWknO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcbmltcG9ydCB7IHNlbGVjdEluZ3JlZGllbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5ncmVkaWVudC1zbGljZSc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFRJbmdyZWRpZW50LCBUVGFiTW9kZSB9IGZyb20gJ0B1dGlscy10eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQnVyZ2VySW5ncmVkaWVudHMgPSAoKTogUmVhY3QuSlNYLkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50VGFiLCBzZXRDdXJyZW50VGFiXSA9IHVzZVN0YXRlPFRUYWJNb2RlPignYnVuJyk7XHJcblxyXG4gIGNvbnN0IHRpdGxlQnVuUmVmID0gdXNlUmVmPEhUTUxIZWFkaW5nRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgdGl0bGVNYWluUmVmID0gdXNlUmVmPEhUTUxIZWFkaW5nRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgdGl0bGVTYXVjZXNSZWYgPSB1c2VSZWY8SFRNTEhlYWRpbmdFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3QgaW5ncmVkaWVudHMgPSB1c2VTZWxlY3RvcihzZWxlY3RJbmdyZWRpZW50cyk7XHJcblxyXG4gIGNvbnN0IG9uVGFiQ2xpY2sgPSAodGFiOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHRhYk1vZGUgPSB0YWIgYXMgVFRhYk1vZGU7XHJcbiAgICBzZXRDdXJyZW50VGFiKHRhYk1vZGUpO1xyXG5cclxuICAgIGlmICh0YWJNb2RlID09PSAnYnVuJykge1xyXG4gICAgICB0aXRsZUJ1blJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH0gZWxzZSBpZiAodGFiTW9kZSA9PT0gJ21haW4nKSB7XHJcbiAgICAgIHRpdGxlTWFpblJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH0gZWxzZSBpZiAodGFiTW9kZSA9PT0gJ3NhdWNlJykge1xyXG4gICAgICB0aXRsZVNhdWNlc1JlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBidW5zID0gdXNlTWVtbyhcclxuICAgICgpID0+IGluZ3JlZGllbnRzLmZpbHRlcigoaXRlbTogVEluZ3JlZGllbnQpID0+IGl0ZW0udHlwZSA9PT0gJ2J1bicpLFxyXG4gICAgW2luZ3JlZGllbnRzXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG1haW5zID0gdXNlTWVtbyhcclxuICAgICgpID0+IGluZ3JlZGllbnRzLmZpbHRlcigoaXRlbTogVEluZ3JlZGllbnQpID0+IGl0ZW0udHlwZSA9PT0gJ21haW4nKSxcclxuICAgIFtpbmdyZWRpZW50c11cclxuICApO1xyXG5cclxuICBjb25zdCBzYXVjZXMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gaW5ncmVkaWVudHMuZmlsdGVyKChpdGVtOiBUSW5ncmVkaWVudCkgPT4gaXRlbS50eXBlID09PSAnc2F1Y2UnKSxcclxuICAgIFtpbmdyZWRpZW50c11cclxuICApO1xyXG5cclxuICBjb25zdCBkdW1teVJlZiA9ICgpID0+IHt9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1cmdlckluZ3JlZGllbnRzVUlcclxuICAgICAgY3VycmVudFRhYj17Y3VycmVudFRhYn1cclxuICAgICAgYnVucz17YnVuc31cclxuICAgICAgbWFpbnM9e21haW5zfVxyXG4gICAgICBzYXVjZXM9e3NhdWNlc31cclxuICAgICAgdGl0bGVCdW5SZWY9e3RpdGxlQnVuUmVmfVxyXG4gICAgICB0aXRsZU1haW5SZWY9e3RpdGxlTWFpblJlZn1cclxuICAgICAgdGl0bGVTYXVjZXNSZWY9e3RpdGxlU2F1Y2VzUmVmfVxyXG4gICAgICBidW5zUmVmPXtkdW1teVJlZn1cclxuICAgICAgbWFpbnNSZWY9e2R1bW15UmVmfVxyXG4gICAgICBzYXVjZXNSZWY9e2R1bW15UmVmfVxyXG4gICAgICBvblRhYkNsaWNrPXtvblRhYkNsaWNrfVxyXG4gICAgLz5cclxuICApO1xyXG59OyJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy9idXJnZXItaW5ncmVkaWVudHMvYnVyZ2VyLWluZ3JlZGllbnRzLnRzeCJ9