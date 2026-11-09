import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/order-card/order-card.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { OrderCardUI } from "/src/components/ui/index.ts";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const memo = __vite__cjsImport2_react["memo"]; const useMemo = __vite__cjsImport2_react["useMemo"];
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { useSelector } from "/src/services/store.ts";
import { selectIngredients } from "/src/services/ingredient-slice.ts";
const maxIngredients = 6;
export const OrderCard = _s(memo(_c = _s(function OrderCard2({
  order
}) {
  _s();
  const location = useLocation();
  const ingredients = useSelector(selectIngredients);
  const orderInfo = useMemo(() => {
    if (!ingredients.length) return null;
    const ingredientsInfo = order.ingredients.reduce(
      (acc, item) => {
        const ingredient = ingredients.find((ing) => ing._id === item);
        if (ingredient) return [...acc, ingredient];
        return acc;
      },
      []
    );
    const total = ingredientsInfo.reduce((acc, item) => acc + item.price, 0);
    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredients);
    const remains = ingredientsInfo.length > maxIngredients ? ingredientsInfo.length - maxIngredients : 0;
    const date = new Date(order.createdAt);
    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow,
      remains,
      total,
      date
    };
  }, [order, ingredients]);
  if (!orderInfo) return null;
  return /* @__PURE__ */ jsxDEV(
    OrderCardUI,
    {
      orderInfo,
      maxIngredients,
      locationState: { background: location }
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/order-card/order-card.tsx",
      lineNumber: 56,
      columnNumber: 5
    },
    this
  );
}, "CdHEU01IKO1sXt26+s+I5uUO5u0=", false, function() {
  return [useLocation, useSelector];
})), "CdHEU01IKO1sXt26+s+I5uUO5u0=", false, function() {
  return [useLocation, useSelector];
});
_c2 = OrderCard;
var _c, _c2;
$RefreshReg$(_c, "OrderCard$memo");
$RefreshReg$(_c2, "OrderCard");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/order-card/order-card.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/order-card/order-card.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/order-card/order-card.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdURJOztBQXZESixTQUFTQSxtQkFBbUI7QUFDNUIsU0FBU0MsTUFBTUMsZUFBZTtBQUM5QixTQUFTQyxtQkFBbUI7QUFFNUIsU0FBU0MsbUJBQW1CO0FBQzVCLFNBQVNDLHlCQUF5QjtBQUtsQyxNQUFNQyxpQkFBaUI7QUFFaEIsYUFBTUMsWUFBU0MsR0FBR1AsS0FBSVEsS0FBQUQsR0FBQyxTQUFTRCxXQUFVO0FBQUEsRUFDL0NHO0FBQ2MsR0FBNkI7QUFBQUYsS0FBQTtBQUMzQyxRQUFNRyxXQUFXUixZQUFZO0FBRzdCLFFBQU1TLGNBQWNSLFlBQVlDLGlCQUFpQjtBQUVqRCxRQUFNUSxZQUFZWCxRQUFRLE1BQU07QUFDOUIsUUFBSSxDQUFDVSxZQUFZRSxPQUFRLFFBQU87QUFFaEMsVUFBTUMsa0JBQWtCTCxNQUFNRSxZQUFZSTtBQUFBQSxNQUN4QyxDQUFDQyxLQUFvQkMsU0FBaUI7QUFDcEMsY0FBTUMsYUFBYVAsWUFBWVEsS0FBSyxDQUFDQyxRQUFRQSxJQUFJQyxRQUFRSixJQUFJO0FBQzdELFlBQUlDLFdBQVksUUFBTyxDQUFDLEdBQUdGLEtBQUtFLFVBQVU7QUFDMUMsZUFBT0Y7QUFBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBRUEsVUFBTU0sUUFBUVIsZ0JBQWdCQyxPQUFPLENBQUNDLEtBQUtDLFNBQVNELE1BQU1DLEtBQUtNLE9BQU8sQ0FBQztBQUV2RSxVQUFNQyxvQkFBb0JWLGdCQUFnQlcsTUFBTSxHQUFHcEIsY0FBYztBQUVqRSxVQUFNcUIsVUFDSlosZ0JBQWdCRCxTQUFTUixpQkFDckJTLGdCQUFnQkQsU0FBU1IsaUJBQ3pCO0FBRU4sVUFBTXNCLE9BQU8sSUFBSUMsS0FBS25CLE1BQU1vQixTQUFTO0FBQ3JDLFdBQU87QUFBQSxNQUNMLEdBQUdwQjtBQUFBQSxNQUNISztBQUFBQSxNQUNBVTtBQUFBQSxNQUNBRTtBQUFBQSxNQUNBSjtBQUFBQSxNQUNBSztBQUFBQSxJQUNGO0FBQUEsRUFDRixHQUFHLENBQUNsQixPQUFPRSxXQUFXLENBQUM7QUFFdkIsTUFBSSxDQUFDQyxVQUFXLFFBQU87QUFFdkIsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQSxlQUFlLEVBQUVrQixZQUFZcEIsU0FBUztBQUFBO0FBQUEsSUFIeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRzBDO0FBRzlDLEdBQUM7QUFBQSxVQTlDa0JSLGFBR0dDLFdBQVc7QUFBQSxFQTJDaEMsR0FBQztBQUFBLFVBOUNpQkQsYUFHR0MsV0FBVztBQUFBO0FBMkM5QjRCLE1BakRVekI7QUFBUyxJQUFBRSxJQUFBdUI7QUFBQUMsYUFBQXhCLElBQUE7QUFBQXdCLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJPcmRlckNhcmRVSSIsIm1lbW8iLCJ1c2VNZW1vIiwidXNlTG9jYXRpb24iLCJ1c2VTZWxlY3RvciIsInNlbGVjdEluZ3JlZGllbnRzIiwibWF4SW5ncmVkaWVudHMiLCJPcmRlckNhcmQiLCJfcyIsIl9jIiwib3JkZXIiLCJsb2NhdGlvbiIsImluZ3JlZGllbnRzIiwib3JkZXJJbmZvIiwibGVuZ3RoIiwiaW5ncmVkaWVudHNJbmZvIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsImluZ3JlZGllbnQiLCJmaW5kIiwiaW5nIiwiX2lkIiwidG90YWwiLCJwcmljZSIsImluZ3JlZGllbnRzVG9TaG93Iiwic2xpY2UiLCJyZW1haW5zIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJiYWNrZ3JvdW5kIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm9yZGVyLWNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyQ2FyZFVJIH0gZnJvbSAnQHVpJztcclxuaW1wb3J0IHsgbWVtbywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RvcmUnO1xyXG5pbXBvcnQgeyBzZWxlY3RJbmdyZWRpZW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZ3JlZGllbnQtc2xpY2UnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBPcmRlckNhcmRQcm9wcyB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCB0eXBlIHsgVEluZ3JlZGllbnQgfSBmcm9tICdAdXRpbHMtdHlwZXMnO1xyXG5cclxuY29uc3QgbWF4SW5ncmVkaWVudHMgPSA2O1xyXG5cclxuZXhwb3J0IGNvbnN0IE9yZGVyQ2FyZCA9IG1lbW8oZnVuY3Rpb24gT3JkZXJDYXJkKHtcclxuICBvcmRlcixcclxufTogT3JkZXJDYXJkUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB8IG51bGwge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuXHJcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQvNCw0YHRgdC40LIg0LLRgdC10YUg0LjQvdCz0YDQtdC00LjQtdC90YLQvtCyINC40LcgUmVkdXgt0YHRgtC+0YDQsFxyXG4gIGNvbnN0IGluZ3JlZGllbnRzID0gdXNlU2VsZWN0b3Ioc2VsZWN0SW5ncmVkaWVudHMpO1xyXG5cclxuICBjb25zdCBvcmRlckluZm8gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghaW5ncmVkaWVudHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBpbmdyZWRpZW50c0luZm8gPSBvcmRlci5pbmdyZWRpZW50cy5yZWR1Y2UoXHJcbiAgICAgIChhY2M6IFRJbmdyZWRpZW50W10sIGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnQgPSBpbmdyZWRpZW50cy5maW5kKChpbmcpID0+IGluZy5faWQgPT09IGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmdyZWRpZW50KSByZXR1cm4gWy4uLmFjYywgaW5ncmVkaWVudF07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSxcclxuICAgICAgW11cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdG90YWwgPSBpbmdyZWRpZW50c0luZm8ucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucHJpY2UsIDApO1xyXG5cclxuICAgIGNvbnN0IGluZ3JlZGllbnRzVG9TaG93ID0gaW5ncmVkaWVudHNJbmZvLnNsaWNlKDAsIG1heEluZ3JlZGllbnRzKTtcclxuXHJcbiAgICBjb25zdCByZW1haW5zID1cclxuICAgICAgaW5ncmVkaWVudHNJbmZvLmxlbmd0aCA+IG1heEluZ3JlZGllbnRzXHJcbiAgICAgICAgPyBpbmdyZWRpZW50c0luZm8ubGVuZ3RoIC0gbWF4SW5ncmVkaWVudHNcclxuICAgICAgICA6IDA7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRBdCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5vcmRlcixcclxuICAgICAgaW5ncmVkaWVudHNJbmZvLFxyXG4gICAgICBpbmdyZWRpZW50c1RvU2hvdyxcclxuICAgICAgcmVtYWlucyxcclxuICAgICAgdG90YWwsXHJcbiAgICAgIGRhdGUsXHJcbiAgICB9O1xyXG4gIH0sIFtvcmRlciwgaW5ncmVkaWVudHNdKTtcclxuXHJcbiAgaWYgKCFvcmRlckluZm8pIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ2FyZFVJXHJcbiAgICAgIG9yZGVySW5mbz17b3JkZXJJbmZvfVxyXG4gICAgICBtYXhJbmdyZWRpZW50cz17bWF4SW5ncmVkaWVudHN9XHJcbiAgICAgIGxvY2F0aW9uU3RhdGU9e3sgYmFja2dyb3VuZDogbG9jYXRpb24gfX1cclxuICAgIC8+XHJcbiAgKTtcclxufSk7Il0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL29yZGVyLWNhcmQvb3JkZXItY2FyZC50c3gifQ==