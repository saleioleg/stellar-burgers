import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/app/app.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f950827"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Modal, OrderInfo, IngredientDetails, AppHeader } from "/src/components/index.ts";
import {
  ConstructorPage,
  Feed,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  ProfileOrders,
  NotFound404
} from "/src/pages/index.ts";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5f950827"; const useEffect = __vite__cjsImport3_react["useEffect"];
import { Routes, Route, useLocation, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=5f950827";
import { fetchIngredients } from "/src/services/ingredient-slice.ts";
import { useDispatch } from "/src/services/store.ts";
import { checkUserAuth } from "/src/services/user-slice.ts";
import { ProtectedRoute } from "/src/components/protected-route/protected-route.tsx";
export const App = () => {
  _s();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundLocation = location.state?.background;
  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(fetchIngredients());
  }, [dispatch]);
  const handleModalClose = () => {
    navigate(-1);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "app", children: [
    /* @__PURE__ */ jsxDEV(AppHeader, {}, void 0, false, {
      fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Routes, { location: backgroundLocation || location, children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(ConstructorPage, {}, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 49,
        columnNumber: 34
      }, this) }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/feed", element: /* @__PURE__ */ jsxDEV(Feed, {}, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 50,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/login",
          element: /* @__PURE__ */ jsxDEV(ProtectedRoute, { onlyUnAuth: true, children: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 56,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/register",
          element: /* @__PURE__ */ jsxDEV(ProtectedRoute, { onlyUnAuth: true, children: /* @__PURE__ */ jsxDEV(Register, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/forgot-password",
          element: /* @__PURE__ */ jsxDEV(ProtectedRoute, { onlyUnAuth: true, children: /* @__PURE__ */ jsxDEV(ForgotPassword, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 69,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/reset-password",
          element: /* @__PURE__ */ jsxDEV(ProtectedRoute, { onlyUnAuth: true, children: /* @__PURE__ */ jsxDEV(ResetPassword, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 77,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/profile",
          element: /* @__PURE__ */ jsxDEV(ProtectedRoute, { children: /* @__PURE__ */ jsxDEV(Profile, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 87,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/profile/orders",
          element: /* @__PURE__ */ jsxDEV(ProtectedRoute, { children: /* @__PURE__ */ jsxDEV(ProfileOrders, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 98,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 95,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(Route, { path: "/ingredients/:id", element: /* @__PURE__ */ jsxDEV(IngredientDetails, {}, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 105,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/feed/:number", element: /* @__PURE__ */ jsxDEV(OrderInfo, {}, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 106,
        columnNumber: 46
      }, this) }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/profile/orders/:number",
          element: /* @__PURE__ */ jsxDEV(ProtectedRoute, { children: /* @__PURE__ */ jsxDEV(OrderInfo, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 110,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 107,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(Route, { path: "*", element: /* @__PURE__ */ jsxDEV(NotFound404, {}, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 117,
        columnNumber: 34
      }, this) }, void 0, false, {
        fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    backgroundLocation && /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/feed/:number",
          element: /* @__PURE__ */ jsxDEV(Modal, { title: "Детали заказа", onClose: handleModalClose, children: /* @__PURE__ */ jsxDEV(OrderInfo, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 127,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 126,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 123,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/ingredients/:id",
          element: /* @__PURE__ */ jsxDEV(Modal, { title: "Детали ингредиента", onClose: handleModalClose, children: /* @__PURE__ */ jsxDEV(IngredientDetails, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 135,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 134,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 131,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Route,
        {
          path: "/profile/orders/:number",
          element: /* @__PURE__ */ jsxDEV(ProtectedRoute, { children: /* @__PURE__ */ jsxDEV(Modal, { title: "Детали заказа", onClose: handleModalClose, children: /* @__PURE__ */ jsxDEV(OrderInfo, {}, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
            lineNumber: 142,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
          lineNumber: 139,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/practicum/stellar-burgers/src/components/app/app.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};
_s(App, "Gbpvi5woO4Twssj8SXIdK8j449Y=", false, function() {
  return [useDispatch, useLocation, useNavigate];
});
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/practicum/stellar-burgers/src/components/app/app.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/practicum/stellar-burgers/src/components/app/app.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/practicum/stellar-burgers/src/components/app/app.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBNENNOztBQTVDTixTQUFTQSxPQUFPQyxXQUFXQyxtQkFBbUJDLGlCQUFpQjtBQUMvRDtBQUFBLEVBQ0VDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLE9BQ0s7QUFDUCxTQUFTQyxpQkFBaUI7QUFDMUIsU0FBU0MsUUFBUUMsT0FBT0MsYUFBYUMsbUJBQW1CO0FBRXhELFNBQVNDLHdCQUF3QjtBQUNqQyxTQUFTQyxtQkFBbUI7QUFDNUIsU0FBU0MscUJBQXFCO0FBQzlCLFNBQVNDLHNCQUFzQjtBQUl4QixhQUFNQyxNQUFVQSxNQUFNO0FBQUFDLEtBQUE7QUFDM0IsUUFBTUMsV0FBV0wsWUFBWTtBQUM3QixRQUFNTSxXQUFXVCxZQUFZO0FBQzdCLFFBQU1VLFdBQVdULFlBQVk7QUFHN0IsUUFBTVUscUJBQXFCRixTQUFTRyxPQUFPQztBQUUzQ2hCLFlBQVUsTUFBTTtBQUVkVyxhQUFTSixjQUFjLENBQUM7QUFFeEJJLGFBQVNOLGlCQUFpQixDQUFDO0FBQUEsRUFDN0IsR0FBRyxDQUFDTSxRQUFRLENBQUM7QUFFYixRQUFNTSxtQkFBbUJBLE1BQU07QUFFN0JKLGFBQVMsRUFBRTtBQUFBLEVBQ2I7QUFFQSxTQUNFLHVCQUFDLFNBQUksV0FBVSxPQUNiO0FBQUEsMkJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVU7QUFBQSxJQUdWLHVCQUFDLFVBQU8sVUFBVUMsc0JBQXNCRixVQUN0QztBQUFBLDZCQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsdUJBQUMscUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFnQixLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTZDO0FBQUEsTUFDN0MsdUJBQUMsU0FBTSxNQUFLLFNBQVEsU0FBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXNDO0FBQUEsTUFHdEM7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFNBQ0UsdUJBQUMsa0JBQWUsWUFBVSxNQUN4QixpQ0FBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQU0sS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUE7QUFBQSxRQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1HO0FBQUEsTUFFSDtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsTUFBSztBQUFBLFVBQ0wsU0FDRSx1QkFBQyxrQkFBZSxZQUFVLE1BQ3hCLGlDQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUyxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUE7QUFBQTtBQUFBLFFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUc7QUFBQSxNQUVIO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxNQUFLO0FBQUEsVUFDTCxTQUNFLHVCQUFDLGtCQUFlLFlBQVUsTUFDeEIsaUNBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZSxLQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUE7QUFBQSxRQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1HO0FBQUEsTUFFSDtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsTUFBSztBQUFBLFVBQ0wsU0FDRSx1QkFBQyxrQkFBZSxZQUFVLE1BQ3hCLGlDQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWMsS0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBO0FBQUEsUUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRztBQUFBLE1BSUg7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFNBQ0UsdUJBQUMsa0JBQ0MsaUNBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFRLEtBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBO0FBQUEsUUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRztBQUFBLE1BRUg7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFNBQ0UsdUJBQUMsa0JBQ0MsaUNBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBYyxLQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUE7QUFBQSxRQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1HO0FBQUEsTUFJSCx1QkFBQyxTQUFNLE1BQUssb0JBQW1CLFNBQVMsdUJBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFrQixLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThEO0FBQUEsTUFDOUQsdUJBQUMsU0FBTSxNQUFLLGlCQUFnQixTQUFTLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFVLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBbUQ7QUFBQSxNQUNuRDtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsTUFBSztBQUFBLFVBQ0wsU0FDRSx1QkFBQyxrQkFDQyxpQ0FBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVUsS0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUE7QUFBQSxRQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1HO0FBQUEsTUFJSCx1QkFBQyxTQUFNLE1BQUssS0FBSSxTQUFTLHVCQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWSxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXlDO0FBQUEsU0FyRTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FzRUE7QUFBQSxJQUdDRSxzQkFDQyx1QkFBQyxVQUNDO0FBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFNBQ0UsdUJBQUMsU0FBTSxPQUFNLGlCQUFnQixTQUFTRyxrQkFDcEMsaUNBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFVLEtBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBO0FBQUEsUUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRztBQUFBLE1BRUg7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFNBQ0UsdUJBQUMsU0FBTSxPQUFNLHNCQUFxQixTQUFTQSxrQkFDekMsaUNBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBa0IsS0FEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBO0FBQUEsUUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRztBQUFBLE1BRUg7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFNBQ0UsdUJBQUMsa0JBQ0MsaUNBQUMsU0FBTSxPQUFNLGlCQUFnQixTQUFTQSxrQkFDcEMsaUNBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFVLEtBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQTtBQUFBLFFBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUc7QUFBQSxTQXpCTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMkJBO0FBQUEsT0F6R0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTJHQTtBQUVKO0FBQUVQLEdBbElXRCxLQUFPO0FBQUEsVUFDREgsYUFDQUgsYUFDQUMsV0FBVztBQUFBO0FBQUFjLEtBSGpCVDtBQW9JYixlQUFlQTtBQUFJLElBQUFTO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJNb2RhbCIsIk9yZGVySW5mbyIsIkluZ3JlZGllbnREZXRhaWxzIiwiQXBwSGVhZGVyIiwiQ29uc3RydWN0b3JQYWdlIiwiRmVlZCIsIkxvZ2luIiwiUmVnaXN0ZXIiLCJGb3Jnb3RQYXNzd29yZCIsIlJlc2V0UGFzc3dvcmQiLCJQcm9maWxlIiwiUHJvZmlsZU9yZGVycyIsIk5vdEZvdW5kNDA0IiwidXNlRWZmZWN0IiwiUm91dGVzIiwiUm91dGUiLCJ1c2VMb2NhdGlvbiIsInVzZU5hdmlnYXRlIiwiZmV0Y2hJbmdyZWRpZW50cyIsInVzZURpc3BhdGNoIiwiY2hlY2tVc2VyQXV0aCIsIlByb3RlY3RlZFJvdXRlIiwiQXBwIiwiX3MiLCJkaXNwYXRjaCIsImxvY2F0aW9uIiwibmF2aWdhdGUiLCJiYWNrZ3JvdW5kTG9jYXRpb24iLCJzdGF0ZSIsImJhY2tncm91bmQiLCJoYW5kbGVNb2RhbENsb3NlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCwgT3JkZXJJbmZvLCBJbmdyZWRpZW50RGV0YWlscywgQXBwSGVhZGVyIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gIENvbnN0cnVjdG9yUGFnZSxcclxuICBGZWVkLFxyXG4gIExvZ2luLFxyXG4gIFJlZ2lzdGVyLFxyXG4gIEZvcmdvdFBhc3N3b3JkLFxyXG4gIFJlc2V0UGFzc3dvcmQsXHJcbiAgUHJvZmlsZSxcclxuICBQcm9maWxlT3JkZXJzLFxyXG4gIE5vdEZvdW5kNDA0XHJcbn0gZnJvbSAnQHBhZ2VzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlLCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB7IGZldGNoSW5ncmVkaWVudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmdyZWRpZW50LXNsaWNlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yZSc7XHJcbmltcG9ydCB7IGNoZWNrVXNlckF1dGggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLXNsaWNlJztcclxuaW1wb3J0IHsgUHJvdGVjdGVkUm91dGUgfSBmcm9tICcuLi9wcm90ZWN0ZWQtcm91dGUvcHJvdGVjdGVkLXJvdXRlJztcclxuXHJcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INGE0L7QvdC+0LLRi9C5INC80LDRgNGI0YDRg9GCINC00LvRjyDQutC+0YDRgNC10LrRgtC90L7Qs9C+INC+0YLQutGA0YvRgtC40Y8g0LzQvtC00LDQu9GM0L3Ri9GFINC+0LrQvtC9INC/0L7QstC10YDRhSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXHJcbiAgY29uc3QgYmFja2dyb3VuZExvY2F0aW9uID0gbG9jYXRpb24uc3RhdGU/LmJhY2tncm91bmQ7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAxLiDQn9GA0L7QstC10YDRj9C10Lwg0YHRgtCw0YLRg9GBINCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPICjQstC90YPRgtGA0Lgg0L/RgNC+0LLQtdGA0Y/QtdGC0YHRjyDQvdCw0LvQuNGH0LjQtSByZWZyZXNoVG9rZW4pXHJcbiAgICBkaXNwYXRjaChjaGVja1VzZXJBdXRoKCkpO1xyXG4gICAgLy8gMi4g0J/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90LDRjyDQt9Cw0LPRgNGD0LfQutCwINC40L3Qs9GA0LXQtNC40LXQvdGC0L7QslxyXG4gICAgZGlzcGF0Y2goZmV0Y2hJbmdyZWRpZW50cygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWxDbG9zZSA9ICgpID0+IHtcclxuICAgIC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdC80YHRjyDQvdCwINC/0YDQtdC00YvQtNGD0YnQuNC5INC80LDRgNGI0YDRg9GCINC/0YDQuCDQt9Cw0LrRgNGL0YLQuNC4INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXHJcbiAgICBuYXZpZ2F0ZSgtMSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgIDxBcHBIZWFkZXIgLz5cclxuXHJcbiAgICAgIHsvKiDQntGB0L3QvtCy0L3Ri9C1INC80LDRgNGI0YDRg9GC0YsgKi99XHJcbiAgICAgIDxSb3V0ZXMgbG9jYXRpb249e2JhY2tncm91bmRMb2NhdGlvbiB8fCBsb2NhdGlvbn0+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PENvbnN0cnVjdG9yUGFnZSAvPn0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9mZWVkXCIgZWxlbWVudD17PEZlZWQgLz59IC8+XHJcblxyXG4gICAgICAgIHsvKiDQoNC+0YPRgtGLINGC0L7Qu9GM0LrQviDQtNC70Y8g0J3QldCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LkgKi99XHJcbiAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICBwYXRoPVwiL2xvZ2luXCJcclxuICAgICAgICAgIGVsZW1lbnQ9e1xyXG4gICAgICAgICAgICA8UHJvdGVjdGVkUm91dGUgb25seVVuQXV0aD5cclxuICAgICAgICAgICAgICA8TG9naW4gLz5cclxuICAgICAgICAgICAgPC9Qcm90ZWN0ZWRSb3V0ZT5cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgcGF0aD1cIi9yZWdpc3RlclwiXHJcbiAgICAgICAgICBlbGVtZW50PXtcclxuICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlIG9ubHlVbkF1dGg+XHJcbiAgICAgICAgICAgICAgPFJlZ2lzdGVyIC8+XHJcbiAgICAgICAgICAgIDwvUHJvdGVjdGVkUm91dGU+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIHBhdGg9XCIvZm9yZ290LXBhc3N3b3JkXCJcclxuICAgICAgICAgIGVsZW1lbnQ9e1xyXG4gICAgICAgICAgICA8UHJvdGVjdGVkUm91dGUgb25seVVuQXV0aD5cclxuICAgICAgICAgICAgICA8Rm9yZ290UGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgPC9Qcm90ZWN0ZWRSb3V0ZT5cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgcGF0aD1cIi9yZXNldC1wYXNzd29yZFwiXHJcbiAgICAgICAgICBlbGVtZW50PXtcclxuICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlIG9ubHlVbkF1dGg+XHJcbiAgICAgICAgICAgICAgPFJlc2V0UGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgPC9Qcm90ZWN0ZWRSb3V0ZT5cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7Lyog0JfQsNGJ0LjRidGR0L3QvdGL0LUg0YDQvtGD0YLRiyAo0YLQvtC70YzQutC+INC00LvRjyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9GFKSAqL31cclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIHBhdGg9XCIvcHJvZmlsZVwiXHJcbiAgICAgICAgICBlbGVtZW50PXtcclxuICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlPlxyXG4gICAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgIDwvUHJvdGVjdGVkUm91dGU+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIHBhdGg9XCIvcHJvZmlsZS9vcmRlcnNcIlxyXG4gICAgICAgICAgZWxlbWVudD17XHJcbiAgICAgICAgICAgIDxQcm90ZWN0ZWRSb3V0ZT5cclxuICAgICAgICAgICAgICA8UHJvZmlsZU9yZGVycyAvPlxyXG4gICAgICAgICAgICA8L1Byb3RlY3RlZFJvdXRlPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiDQn9GA0Y/QvNGL0LUg0L/QtdGA0LXRhdC+0LTRiyDQv9C+INGB0YHRi9C70LrQsNC8INC90LAg0L7RgtC00LXQu9GM0L3Ri9C1INGB0YLRgNCw0L3QuNGG0YsgKNCx0LXQtyDQvNC+0LTQsNC70LrQuC/RhNC+0L3QsCkgKi99XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvaW5ncmVkaWVudHMvOmlkXCIgZWxlbWVudD17PEluZ3JlZGllbnREZXRhaWxzIC8+fSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZlZWQvOm51bWJlclwiIGVsZW1lbnQ9ezxPcmRlckluZm8gLz59IC8+XHJcbiAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICBwYXRoPVwiL3Byb2ZpbGUvb3JkZXJzLzpudW1iZXJcIlxyXG4gICAgICAgICAgZWxlbWVudD17XHJcbiAgICAgICAgICAgIDxQcm90ZWN0ZWRSb3V0ZT5cclxuICAgICAgICAgICAgICA8T3JkZXJJbmZvIC8+XHJcbiAgICAgICAgICAgIDwvUHJvdGVjdGVkUm91dGU+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgey8qINCc0LDRgNGI0YDRg9GCIDQwNCAqL31cclxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQ0MDQgLz59IC8+XHJcbiAgICAgIDwvUm91dGVzPlxyXG5cclxuICAgICAgey8qINCg0L7Rg9GC0Ysg0LzQvtC00LDQu9GM0L3Ri9GFINC+0LrQvtC9LCDQvtGC0L7QsdGA0LDQttCw0LXQvNGL0LUg0L/QvtCy0LXRgNGFINGE0L7QvdC+0LLQvtCz0L4g0Y3QutGA0LDQvdCwICovfVxyXG4gICAgICB7YmFja2dyb3VuZExvY2F0aW9uICYmIChcclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgIHBhdGg9XCIvZmVlZC86bnVtYmVyXCJcclxuICAgICAgICAgICAgZWxlbWVudD17XHJcbiAgICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwi0JTQtdGC0LDQu9C4INC30LDQutCw0LfQsFwiIG9uQ2xvc2U9e2hhbmRsZU1vZGFsQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgPE9yZGVySW5mbyAvPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgcGF0aD1cIi9pbmdyZWRpZW50cy86aWRcIlxyXG4gICAgICAgICAgICBlbGVtZW50PXtcclxuICAgICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCLQlNC10YLQsNC70Lgg0LjQvdCz0YDQtdC00LjQtdC90YLQsFwiIG9uQ2xvc2U9e2hhbmRsZU1vZGFsQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgPEluZ3JlZGllbnREZXRhaWxzIC8+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICBwYXRoPVwiL3Byb2ZpbGUvb3JkZXJzLzpudW1iZXJcIlxyXG4gICAgICAgICAgICBlbGVtZW50PXtcclxuICAgICAgICAgICAgICA8UHJvdGVjdGVkUm91dGU+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCLQlNC10YLQsNC70Lgg0LfQsNC60LDQt9CwXCIgb25DbG9zZT17aGFuZGxlTW9kYWxDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxPcmRlckluZm8gLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgPC9Qcm90ZWN0ZWRSb3V0ZT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sImZpbGUiOiJDOi9wcmFjdGljdW0vc3RlbGxhci1idXJnZXJzL3NyYy9jb21wb25lbnRzL2FwcC9hcHAudHN4In0=