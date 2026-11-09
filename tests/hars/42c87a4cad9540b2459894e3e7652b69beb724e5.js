import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/burger-constructor/burger-constructor.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useMemo = __vite__cjsImport1_react["useMemo"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { BurgerConstructorUI } from "/src/components/ui/index.ts";
import { clearConstructor } from "/src/services/constructor-slice.ts";
import { placeOrder, resetOrderModal } from "/src/services/order-slice.ts";
import { useDispatch, useSelector } from "/src/services/store.ts";
export const BurgerConstructor = () => {
  _s();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const constructorItems = useSelector((state) => state.burgerConstructor);
  const { orderRequest, orderModalData } = useSelector((state) => state.order);
  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
    if (!user) {
      navigate("/login");
      return;
    }
    const ingredientIds = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((item) => item._id),
      constructorItems.bun._id
    ];
    dispatch(placeOrder(ingredientIds)).then((action) => {
      if (placeOrder.fulfilled.match(action)) {
        dispatch(clearConstructor());
      }
    });
  };
  const closeOrderModal = () => {
    dispatch(resetOrderModal());
  };
  const price = useMemo(() => {
    const bunPrice = constructorItems.bun ? constructorItems.bun.price * 2 : 0;
    const ingredientsPrice = constructorItems.ingredients.reduce(
      (sum, item) => sum + item.price,
      0
    );
    return bunPrice + ingredientsPrice;
  }, [constructorItems]);
  return /* @__PURE__ */ jsxDEV(
    BurgerConstructorUI,
    {
      price,
      orderRequest,
      constructorItems,
      orderModalData,
      onOrderClick,
      closeOrderModal
    },
    void 0,
    false,
    {
      fileName: "C:/practicum/stellar-burgers/src/components/burger-constructor/burger-constructor.tsx",
      lineNumber: 53,
      columnNumber: 5
    },
    this
  );
};
_s(BurgerConstructor, "uIjqXv8dkLbdTLK+fs5L2G0mpeY=", false, function() {
  return [useNavigate, useDispatch, useSelector, useSelector, useSelector];
});
_c = BurgerConstructor;
var _c;
$RefreshReg$(_c, "BurgerConstructor");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/burger-constructor/burger-constructor.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/burger-constructor/burger-constructor.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/burger-constructor/burger-constructor.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0RJOztBQXBESixTQUFTQSxlQUFlO0FBRXhCLFNBQVNDLG1CQUFtQjtBQUM1QixTQUFTQywyQkFBMkI7QUFDcEMsU0FBU0Msd0JBQXdCO0FBQ2pDLFNBQVNDLFlBQVlDLHVCQUF1QjtBQUM1QyxTQUFTQyxhQUFhQyxtQkFBbUI7QUFHbEMsYUFBTUMsb0JBQXdCQSxNQUFNO0FBQUFDLEtBQUE7QUFDekMsUUFBTUMsV0FBV1QsWUFBWTtBQUM3QixRQUFNVSxXQUFXTCxZQUFZO0FBRTdCLFFBQU1NLE9BQU9MLFlBQVksQ0FBQ00sVUFBVUEsTUFBTUQsS0FBS0EsSUFBSTtBQUNuRCxRQUFNRSxtQkFBbUJQLFlBQVksQ0FBQ00sVUFBVUEsTUFBTUUsaUJBQWlCO0FBQ3ZFLFFBQU0sRUFBRUMsY0FBY0MsZUFBZSxJQUFJVixZQUFZLENBQUNNLFVBQVVBLE1BQU1LLEtBQUs7QUFFM0UsUUFBTUMsZUFBZUEsTUFBTTtBQUN6QixRQUFJLENBQUNMLGlCQUFpQk0sT0FBT0osYUFBYztBQUUzQyxRQUFJLENBQUNKLE1BQU07QUFDVEYsZUFBUyxRQUFRO0FBQ2pCO0FBQUEsSUFDRjtBQUVBLFVBQU1XLGdCQUFnQjtBQUFBLE1BQ3BCUCxpQkFBaUJNLElBQUlFO0FBQUFBLE1BQ3JCLEdBQUdSLGlCQUFpQlMsWUFBWUMsSUFBSSxDQUFDQyxTQUFpQ0EsS0FBS0gsR0FBRztBQUFBLE1BQzlFUixpQkFBaUJNLElBQUlFO0FBQUFBLElBQUc7QUFHMUJYLGFBQVNQLFdBQVdpQixhQUFhLENBQUMsRUFBRUssS0FBSyxDQUFDQyxXQUFXO0FBQ25ELFVBQUl2QixXQUFXd0IsVUFBVUMsTUFBTUYsTUFBTSxHQUFHO0FBQ3RDaEIsaUJBQVNSLGlCQUFpQixDQUFDO0FBQUEsTUFDN0I7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBRUEsUUFBTTJCLGtCQUFrQkEsTUFBTTtBQUM1Qm5CLGFBQVNOLGdCQUFnQixDQUFDO0FBQUEsRUFDNUI7QUFFQSxRQUFNMEIsUUFBUS9CLFFBQVEsTUFBTTtBQUMxQixVQUFNZ0MsV0FBV2xCLGlCQUFpQk0sTUFBTU4saUJBQWlCTSxJQUFJVyxRQUFRLElBQUk7QUFDekUsVUFBTUUsbUJBQW1CbkIsaUJBQWlCUyxZQUFZVztBQUFBQSxNQUNwRCxDQUFDQyxLQUFhVixTQUFpQ1UsTUFBTVYsS0FBS007QUFBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQ0EsV0FBT0MsV0FBV0M7QUFBQUEsRUFDcEIsR0FBRyxDQUFDbkIsZ0JBQWdCLENBQUM7QUFFckIsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsSUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNbUM7QUFHdkM7QUFBRUwsR0FwRFdELG1CQUFxQjtBQUFBLFVBQ2ZQLGFBQ0FLLGFBRUpDLGFBQ1lBLGFBQ2dCQSxXQUFXO0FBQUE7QUFBQTZCLEtBTnpDNUI7QUFBcUIsSUFBQTRCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlTmF2aWdhdGUiLCJCdXJnZXJDb25zdHJ1Y3RvclVJIiwiY2xlYXJDb25zdHJ1Y3RvciIsInBsYWNlT3JkZXIiLCJyZXNldE9yZGVyTW9kYWwiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiQnVyZ2VyQ29uc3RydWN0b3IiLCJfcyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RhdGUiLCJjb25zdHJ1Y3Rvckl0ZW1zIiwiYnVyZ2VyQ29uc3RydWN0b3IiLCJvcmRlclJlcXVlc3QiLCJvcmRlck1vZGFsRGF0YSIsIm9yZGVyIiwib25PcmRlckNsaWNrIiwiYnVuIiwiaW5ncmVkaWVudElkcyIsIl9pZCIsImluZ3JlZGllbnRzIiwibWFwIiwiaXRlbSIsInRoZW4iLCJhY3Rpb24iLCJmdWxmaWxsZWQiLCJtYXRjaCIsImNsb3NlT3JkZXJNb2RhbCIsInByaWNlIiwiYnVuUHJpY2UiLCJpbmdyZWRpZW50c1ByaWNlIiwicmVkdWNlIiwic3VtIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYnVyZ2VyLWNvbnN0cnVjdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXJnZXJDb25zdHJ1Y3RvclVJIH0gZnJvbSAnQHVpJztcclxuaW1wb3J0IHsgY2xlYXJDb25zdHJ1Y3RvciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0cnVjdG9yLXNsaWNlJztcclxuaW1wb3J0IHsgcGxhY2VPcmRlciwgcmVzZXRPcmRlck1vZGFsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3JkZXItc2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcbmltcG9ydCB0eXBlIHsgVENvbnN0cnVjdG9ySW5ncmVkaWVudCB9IGZyb20gJ0B1dGlscy10eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQnVyZ2VyQ29uc3RydWN0b3I6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcik7XHJcbiAgY29uc3QgY29uc3RydWN0b3JJdGVtcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYnVyZ2VyQ29uc3RydWN0b3IpO1xyXG4gIGNvbnN0IHsgb3JkZXJSZXF1ZXN0LCBvcmRlck1vZGFsRGF0YSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5vcmRlcik7XHJcblxyXG4gIGNvbnN0IG9uT3JkZXJDbGljayA9ICgpID0+IHtcclxuICAgIGlmICghY29uc3RydWN0b3JJdGVtcy5idW4gfHwgb3JkZXJSZXF1ZXN0KSByZXR1cm47XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIG5hdmlnYXRlKCcvbG9naW4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluZ3JlZGllbnRJZHMgPSBbXHJcbiAgICAgIGNvbnN0cnVjdG9ySXRlbXMuYnVuLl9pZCxcclxuICAgICAgLi4uY29uc3RydWN0b3JJdGVtcy5pbmdyZWRpZW50cy5tYXAoKGl0ZW06IFRDb25zdHJ1Y3RvckluZ3JlZGllbnQpID0+IGl0ZW0uX2lkKSxcclxuICAgICAgY29uc3RydWN0b3JJdGVtcy5idW4uX2lkXHJcbiAgICBdO1xyXG5cclxuICAgIGRpc3BhdGNoKHBsYWNlT3JkZXIoaW5ncmVkaWVudElkcykpLnRoZW4oKGFjdGlvbikgPT4ge1xyXG4gICAgICBpZiAocGxhY2VPcmRlci5mdWxmaWxsZWQubWF0Y2goYWN0aW9uKSkge1xyXG4gICAgICAgIGRpc3BhdGNoKGNsZWFyQ29uc3RydWN0b3IoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlT3JkZXJNb2RhbCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHJlc2V0T3JkZXJNb2RhbCgpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmljZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgYnVuUHJpY2UgPSBjb25zdHJ1Y3Rvckl0ZW1zLmJ1biA/IGNvbnN0cnVjdG9ySXRlbXMuYnVuLnByaWNlICogMiA6IDA7XHJcbiAgICBjb25zdCBpbmdyZWRpZW50c1ByaWNlID0gY29uc3RydWN0b3JJdGVtcy5pbmdyZWRpZW50cy5yZWR1Y2UoXHJcbiAgICAgIChzdW06IG51bWJlciwgaXRlbTogVENvbnN0cnVjdG9ySW5ncmVkaWVudCkgPT4gc3VtICsgaXRlbS5wcmljZSxcclxuICAgICAgMFxyXG4gICAgKTtcclxuICAgIHJldHVybiBidW5QcmljZSArIGluZ3JlZGllbnRzUHJpY2U7XHJcbiAgfSwgW2NvbnN0cnVjdG9ySXRlbXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXJnZXJDb25zdHJ1Y3RvclVJXHJcbiAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgb3JkZXJSZXF1ZXN0PXtvcmRlclJlcXVlc3R9XHJcbiAgICAgIGNvbnN0cnVjdG9ySXRlbXM9e2NvbnN0cnVjdG9ySXRlbXN9XHJcbiAgICAgIG9yZGVyTW9kYWxEYXRhPXtvcmRlck1vZGFsRGF0YX1cclxuICAgICAgb25PcmRlckNsaWNrPXtvbk9yZGVyQ2xpY2t9XHJcbiAgICAgIGNsb3NlT3JkZXJNb2RhbD17Y2xvc2VPcmRlck1vZGFsfVxyXG4gICAgLz5cclxuICApO1xyXG59OyJdLCJmaWxlIjoiQzovcHJhY3RpY3VtL3N0ZWxsYXItYnVyZ2Vycy9zcmMvY29tcG9uZW50cy9idXJnZXItY29uc3RydWN0b3IvYnVyZ2VyLWNvbnN0cnVjdG9yLnRzeCJ9