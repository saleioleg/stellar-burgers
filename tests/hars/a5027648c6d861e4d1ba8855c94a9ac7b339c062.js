import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/order-info/order-info.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useEffect = __vite__cjsImport1_react["useEffect"]; const useMemo = __vite__cjsImport1_react["useMemo"];
import { useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { Preloader } from "/src/components/ui/preloader/index.ts";
import { OrderInfoUI } from "/src/components/ui/order-info/index.ts";
import { useDispatch, useSelector } from "/src/services/store.ts";
import { getOrderByNumber } from "/src/services/order-slice.ts";
export const OrderInfo = () => {
  _s();
  const { number } = useParams();
  const dispatch = useDispatch();
  const ingredients = useSelector(
    (state) => state.ingredients.ingredients
  );
  const feedOrders = useSelector(
    (state) => state.feed?.orders || []
  );
  const fetchedOrder = useSelector((state) => state.order?.orderByNumber);
  const orderData = useMemo(() => {
    if (!number) return null;
    const orderNum = Number(number);
    return feedOrders.find((item) => item.number === orderNum) || (fetchedOrder?.number === orderNum ? fetchedOrder : null);
  }, [number, feedOrders, fetchedOrder]);
  useEffect(() => {
    if (number && !orderData) {
      dispatch(getOrderByNumber(Number(number)));
    }
  }, [dispatch, number, orderData]);
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;
    const date = new Date(orderData.createdAt);
    const ingredientsInfo = orderData.ingredients.reduce(
      (acc, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find(
            (ing) => ing._id === item
          );
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }
        return acc;
      },
      {}
    );
    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);
  if (!orderInfo) {
    return /* @__PURE__ */ jsxDEV(Preloader, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/order-info/order-info.tsx",
      lineNumber: 89,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(OrderInfoUI, { orderInfo }, void 0, false, {
    fileName: "C:/practicum/stellar-burgers/src/components/order-info/order-info.tsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
};
_s(OrderInfo, "lMdenrCGFqtVVpbhzItvnym61gI=", false, function() {
  return [useParams, useDispatch, useSelector, useSelector, useSelector];
});
_c = OrderInfo;
var _c;
$RefreshReg$(_c, "OrderInfo");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/order-info/order-info.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/order-info/order-info.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/order-info/order-info.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBd0ZXOztBQXhGWCxTQUFTQSxXQUFXQyxlQUFlO0FBRW5DLFNBQVNDLGlCQUFpQjtBQUMxQixTQUFTQyxpQkFBaUI7QUFDMUIsU0FBU0MsbUJBQW1CO0FBQzVCLFNBQVNDLGFBQWFDLG1CQUFtQjtBQUN6QyxTQUFTQyx3QkFBd0I7QUFHMUIsYUFBTUMsWUFBZ0JBLE1BQU07QUFBQUMsS0FBQTtBQUNqQyxRQUFNLEVBQUVDLE9BQU8sSUFBSVIsVUFBOEI7QUFDakQsUUFBTVMsV0FBV04sWUFBWTtBQUc3QixRQUFNTyxjQUE2Qk47QUFBQUEsSUFDakMsQ0FBQ08sVUFBVUEsTUFBTUQsWUFBWUE7QUFBQUEsRUFDL0I7QUFHQSxRQUFNRSxhQUF1QlI7QUFBQUEsSUFDM0IsQ0FBQ08sVUFBVUEsTUFBTUUsTUFBTUMsVUFBVTtBQUFBLEVBQ25DO0FBR0EsUUFBTUMsZUFBZVgsWUFBWSxDQUFDTyxVQUFVQSxNQUFNSyxPQUFPQyxhQUFhO0FBR3RFLFFBQU1DLFlBQVluQixRQUFRLE1BQU07QUFDOUIsUUFBSSxDQUFDUyxPQUFRLFFBQU87QUFDcEIsVUFBTVcsV0FBV0MsT0FBT1osTUFBTTtBQUU5QixXQUNFSSxXQUFXUyxLQUFLLENBQUNDLFNBQWlCQSxLQUFLZCxXQUFXVyxRQUFRLE1BQ3pESixjQUFjUCxXQUFXVyxXQUFXSixlQUFlO0FBQUEsRUFFeEQsR0FBRyxDQUFDUCxRQUFRSSxZQUFZRyxZQUFZLENBQUM7QUFFckNqQixZQUFVLE1BQU07QUFFZCxRQUFJVSxVQUFVLENBQUNVLFdBQVc7QUFDeEJULGVBQVNKLGlCQUFpQmUsT0FBT1osTUFBTSxDQUFDLENBQUM7QUFBQSxJQUMzQztBQUFBLEVBQ0YsR0FBRyxDQUFDQyxVQUFVRCxRQUFRVSxTQUFTLENBQUM7QUFFaEMsUUFBTUssWUFBWXhCLFFBQVEsTUFBTTtBQUM5QixRQUFJLENBQUNtQixhQUFhLENBQUNSLFlBQVljLE9BQVEsUUFBTztBQUU5QyxVQUFNQyxPQUFPLElBQUlDLEtBQUtSLFVBQVVTLFNBQVM7QUFNekMsVUFBTUMsa0JBQWtCVixVQUFVUixZQUFZbUI7QUFBQUEsTUFDNUMsQ0FBQ0MsS0FBNEJSLFNBQWlCO0FBQzVDLFlBQUksQ0FBQ1EsSUFBSVIsSUFBSSxHQUFHO0FBQ2QsZ0JBQU1TLGFBQWFyQixZQUFZVztBQUFBQSxZQUM3QixDQUFDVyxRQUFxQkEsSUFBSUMsUUFBUVg7QUFBQUEsVUFDcEM7QUFDQSxjQUFJUyxZQUFZO0FBQ2RELGdCQUFJUixJQUFJLElBQUk7QUFBQSxjQUNWLEdBQUdTO0FBQUFBLGNBQ0hHLE9BQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0YsT0FBTztBQUNMSixjQUFJUixJQUFJLEVBQUVZO0FBQUFBLFFBQ1o7QUFDQSxlQUFPSjtBQUFBQSxNQUNUO0FBQUEsTUFDQSxDQUFDO0FBQUEsSUFDSDtBQUVBLFVBQU1LLFFBQVFDLE9BQU9DLE9BQU9ULGVBQWUsRUFBRUM7QUFBQUEsTUFDM0MsQ0FBQ0MsS0FBYVIsU0FDWlEsTUFBTVIsS0FBS2dCLFFBQVFoQixLQUFLWTtBQUFBQSxNQUMxQjtBQUFBLElBQ0Y7QUFFQSxXQUFPO0FBQUEsTUFDTCxHQUFHaEI7QUFBQUEsTUFDSFU7QUFBQUEsTUFDQUg7QUFBQUEsTUFDQVU7QUFBQUEsSUFDRjtBQUFBLEVBQ0YsR0FBRyxDQUFDakIsV0FBV1IsV0FBVyxDQUFDO0FBRTNCLE1BQUksQ0FBQ2EsV0FBVztBQUNkLFdBQU8sdUJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVU7QUFBQSxFQUNuQjtBQUVBLFNBQU8sdUJBQUMsZUFBWSxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0M7QUFDM0M7QUFBRWhCLEdBbkZXRCxXQUFhO0FBQUEsVUFDTE4sV0FDRkcsYUFHa0JDLGFBS05BLGFBS1JBLFdBQVc7QUFBQTtBQUFBbUMsS0FmckJqQztBQUFhLElBQUFpQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVBhcmFtcyIsIlByZWxvYWRlciIsIk9yZGVySW5mb1VJIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldE9yZGVyQnlOdW1iZXIiLCJPcmRlckluZm8iLCJfcyIsIm51bWJlciIsImRpc3BhdGNoIiwiaW5ncmVkaWVudHMiLCJzdGF0ZSIsImZlZWRPcmRlcnMiLCJmZWVkIiwib3JkZXJzIiwiZmV0Y2hlZE9yZGVyIiwib3JkZXIiLCJvcmRlckJ5TnVtYmVyIiwib3JkZXJEYXRhIiwib3JkZXJOdW0iLCJOdW1iZXIiLCJmaW5kIiwiaXRlbSIsIm9yZGVySW5mbyIsImxlbmd0aCIsImRhdGUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiaW5ncmVkaWVudHNJbmZvIiwicmVkdWNlIiwiYWNjIiwiaW5ncmVkaWVudCIsImluZyIsIl9pZCIsImNvdW50IiwidG90YWwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwcmljZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm9yZGVyLWluZm8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSAnLi4vdWkvcHJlbG9hZGVyJztcclxuaW1wb3J0IHsgT3JkZXJJbmZvVUkgfSBmcm9tICcuLi91aS9vcmRlci1pbmZvJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RvcmUnO1xyXG5pbXBvcnQgeyBnZXRPcmRlckJ5TnVtYmVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3JkZXItc2xpY2UnO1xyXG5pbXBvcnQgdHlwZSB7IFRJbmdyZWRpZW50LCBUT3JkZXIgfSBmcm9tICdAdXRpbHMtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9yZGVySW5mbzogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBudW1iZXIgfSA9IHVzZVBhcmFtczx7IG51bWJlcjogc3RyaW5nIH0+KCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyAxLiDQmNC90LPRgNC10LTQuNC10L3RgtGLINC40Lcg0YHRgtC+0YDQsFxyXG4gIGNvbnN0IGluZ3JlZGllbnRzOiBUSW5ncmVkaWVudFtdID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLmluZ3JlZGllbnRzLmluZ3JlZGllbnRzXHJcbiAgKTtcclxuXHJcbiAgLy8gMi4g0KHQv9C40YHQvtC6INC30LDQutCw0LfQvtCyINC40Lcg0LjQvNC10Y7RidC10LnRgdGPINC70LXQvdGC0YsgKNC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9GA0LjQvdC10YHQu9C+INGBINGN0YLQvtC5INGB0YLRgNCw0L3QuNGG0YspXHJcbiAgY29uc3QgZmVlZE9yZGVyczogVE9yZGVyW10gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuZmVlZD8ub3JkZXJzIHx8IFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gMy4g0J7RgtC00LXQu9GM0L3QviDQt9Cw0LPRgNGD0LbQtdC90L3Ri9C5INC30LDQutCw0Lcg0L/QviDQvdC+0LzQtdGA0YMg0LjQtyBvcmRlci1zbGljZVxyXG4gIGNvbnN0IGZldGNoZWRPcmRlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUub3JkZXI/Lm9yZGVyQnlOdW1iZXIpO1xyXG5cclxuICAvLyDQmNGJ0LXQvCDQt9Cw0LrQsNC3INGB0L3QsNGH0LDQu9CwINCyINC30LDQs9GA0YPQttC10L3QvdC+0Lwg0YHQv9C40YHQutC1IGZlZWQsINC40L3QsNGH0LUg0LHQtdGA0LXQvCDQvtGC0LTQtdC70YzQvdC+INC30LDQs9GA0YPQttC10L3QvdGL0Lkg0LfQsNC60LDQt1xyXG4gIGNvbnN0IG9yZGVyRGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFudW1iZXIpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3Qgb3JkZXJOdW0gPSBOdW1iZXIobnVtYmVyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBmZWVkT3JkZXJzLmZpbmQoKGl0ZW06IFRPcmRlcikgPT4gaXRlbS5udW1iZXIgPT09IG9yZGVyTnVtKSB8fFxyXG4gICAgICAoZmV0Y2hlZE9yZGVyPy5udW1iZXIgPT09IG9yZGVyTnVtID8gZmV0Y2hlZE9yZGVyIDogbnVsbClcclxuICAgICk7XHJcbiAgfSwgW251bWJlciwgZmVlZE9yZGVycywgZmV0Y2hlZE9yZGVyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDQl9Cw0L/RgNCw0YjQuNCy0LDQtdC8INC30LDQutCw0Lcg0YEg0YHQtdGA0LLQtdGA0LAg0YfQtdGA0LXQtyB0aHVuayDRgtC+0LvRjNC60L4g0LXRgdC70Lgg0LXQs9C+INC10YnRkSDQvdC10YIg0LIgUmVkdXgt0YHRgtC+0YDQtVxyXG4gICAgaWYgKG51bWJlciAmJiAhb3JkZXJEYXRhKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldE9yZGVyQnlOdW1iZXIoTnVtYmVyKG51bWJlcikpKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIG51bWJlciwgb3JkZXJEYXRhXSk7XHJcblxyXG4gIGNvbnN0IG9yZGVySW5mbyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFvcmRlckRhdGEgfHwgIWluZ3JlZGllbnRzLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG9yZGVyRGF0YS5jcmVhdGVkQXQpO1xyXG5cclxuICAgIHR5cGUgVEluZ3JlZGllbnRzV2l0aENvdW50ID0ge1xyXG4gICAgICBba2V5OiBzdHJpbmddOiBUSW5ncmVkaWVudCAmIHsgY291bnQ6IG51bWJlciB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbmdyZWRpZW50c0luZm8gPSBvcmRlckRhdGEuaW5ncmVkaWVudHMucmVkdWNlKFxyXG4gICAgICAoYWNjOiBUSW5ncmVkaWVudHNXaXRoQ291bnQsIGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICghYWNjW2l0ZW1dKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmdyZWRpZW50ID0gaW5ncmVkaWVudHMuZmluZChcclxuICAgICAgICAgICAgKGluZzogVEluZ3JlZGllbnQpID0+IGluZy5faWQgPT09IGl0ZW1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoaW5ncmVkaWVudCkge1xyXG4gICAgICAgICAgICBhY2NbaXRlbV0gPSB7XHJcbiAgICAgICAgICAgICAgLi4uaW5ncmVkaWVudCxcclxuICAgICAgICAgICAgICBjb3VudDogMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY2NbaXRlbV0uY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdG90YWwgPSBPYmplY3QudmFsdWVzKGluZ3JlZGllbnRzSW5mbykucmVkdWNlKFxyXG4gICAgICAoYWNjOiBudW1iZXIsIGl0ZW06IFRJbmdyZWRpZW50ICYgeyBjb3VudDogbnVtYmVyIH0pID0+XHJcbiAgICAgICAgYWNjICsgaXRlbS5wcmljZSAqIGl0ZW0uY291bnQsXHJcbiAgICAgIDBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub3JkZXJEYXRhLFxyXG4gICAgICBpbmdyZWRpZW50c0luZm8sXHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIHRvdGFsXHJcbiAgICB9O1xyXG4gIH0sIFtvcmRlckRhdGEsIGluZ3JlZGllbnRzXSk7XHJcblxyXG4gIGlmICghb3JkZXJJbmZvKSB7XHJcbiAgICByZXR1cm4gPFByZWxvYWRlciAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiA8T3JkZXJJbmZvVUkgb3JkZXJJbmZvPXtvcmRlckluZm99IC8+O1xyXG59OyJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy9vcmRlci1pbmZvL29yZGVyLWluZm8udHN4In0=