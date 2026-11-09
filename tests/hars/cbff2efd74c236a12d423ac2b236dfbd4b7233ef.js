export function getCookie(name) {
  const matches = new RegExp(
    "(?:^|; )" + // eslint-disable-next-line no-useless-escape
    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
  ).exec(document.cookie);
  return matches ? decodeURIComponent(matches[1]) : void 0;
}
export function setCookie(name, value, props = {}) {
  props = {
    path: "/",
    ...props
  };
  let exp = props.expires;
  if (exp && typeof exp === "number") {
    const d = /* @__PURE__ */ new Date();
    d.setTime(d.getTime() + exp * 1e3);
    exp = props.expires = d;
  }
  if (exp && exp instanceof Date) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + String(propValue);
    }
  }
  document.cookie = updatedCookie;
}
export function deleteCookie(name) {
  setCookie(name, "", { expires: -1 });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2tpZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IG1hdGNoZXMgPSBuZXcgUmVnRXhwKFxuICAgICcoPzpefDsgKScgK1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgK1xuICAgICAgJz0oW147XSopJ1xuICApLmV4ZWMoZG9jdW1lbnQuY29va2llKTtcbiAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUoXG4gIG5hbWU6IHN0cmluZyxcbiAgdmFsdWU6IHN0cmluZyxcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IERhdGUgfCBib29sZWFuPiA9IHt9XG4pOiB2b2lkIHtcbiAgcHJvcHMgPSB7XG4gICAgcGF0aDogJy8nLFxuICAgIC4uLnByb3BzLFxuICB9O1xuXG4gIGxldCBleHAgPSBwcm9wcy5leHBpcmVzO1xuICBpZiAoZXhwICYmIHR5cGVvZiBleHAgPT09ICdudW1iZXInKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwICogMTAwMCk7XG4gICAgZXhwID0gcHJvcHMuZXhwaXJlcyA9IGQ7XG4gIH1cblxuICBpZiAoZXhwICYmIGV4cCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBwcm9wcy5leHBpcmVzID0gZXhwLnRvVVRDU3RyaW5nKCk7XG4gIH1cbiAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICBsZXQgdXBkYXRlZENvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZTtcbiAgZm9yIChjb25zdCBwcm9wTmFtZSBpbiBwcm9wcykge1xuICAgIHVwZGF0ZWRDb29raWUgKz0gJzsgJyArIHByb3BOYW1lO1xuICAgIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICBpZiAocHJvcFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICB1cGRhdGVkQ29va2llICs9ICc9JyArIFN0cmluZyhwcm9wVmFsdWUpO1xuICAgIH1cbiAgfVxuICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBzZXRDb29raWUobmFtZSwgJycsIHsgZXhwaXJlczogLTEgfSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFPLGdCQUFTLFVBQVUsTUFBa0M7QUFDMUQsUUFBTSxVQUFVLElBQUk7QUFBQSxJQUNsQjtBQUFBLElBRUUsS0FBSyxRQUFRLGdDQUFnQyxNQUFNLElBQ25EO0FBQUEsRUFDSixFQUFFLEtBQUssU0FBUyxNQUFNO0FBQ3RCLFNBQU8sVUFBVSxtQkFBbUIsUUFBUSxDQUFDLENBQUMsSUFBSTtBQUNwRDtBQUVPLGdCQUFTLFVBQ2QsTUFDQSxPQUNBLFFBQTBELENBQUMsR0FDckQ7QUFDTixVQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixHQUFHO0FBQUEsRUFDTDtBQUVBLE1BQUksTUFBTSxNQUFNO0FBQ2hCLE1BQUksT0FBTyxPQUFPLFFBQVEsVUFBVTtBQUNsQyxVQUFNLElBQUksb0JBQUksS0FBSztBQUNuQixNQUFFLFFBQVEsRUFBRSxRQUFRLElBQUksTUFBTSxHQUFJO0FBQ2xDLFVBQU0sTUFBTSxVQUFVO0FBQUEsRUFDeEI7QUFFQSxNQUFJLE9BQU8sZUFBZSxNQUFNO0FBQzlCLFVBQU0sVUFBVSxJQUFJLFlBQVk7QUFBQSxFQUNsQztBQUNBLFVBQVEsbUJBQW1CLEtBQUs7QUFDaEMsTUFBSSxnQkFBZ0IsT0FBTyxNQUFNO0FBQ2pDLGFBQVcsWUFBWSxPQUFPO0FBQzVCLHFCQUFpQixPQUFPO0FBQ3hCLFVBQU0sWUFBWSxNQUFNLFFBQVE7QUFDaEMsUUFBSSxjQUFjLE1BQU07QUFDdEIsdUJBQWlCLE1BQU0sT0FBTyxTQUFTO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQ0EsV0FBUyxTQUFTO0FBQ3BCO0FBRU8sZ0JBQVMsYUFBYSxNQUFvQjtBQUMvQyxZQUFVLE1BQU0sSUFBSSxFQUFFLFNBQVMsR0FBRyxDQUFDO0FBQ3JDOyIsIm5hbWVzIjpbXX0=