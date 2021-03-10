import React, { Fragment } from "react";

const Message = ({ hideMessage, setHideMessage }) => {
  const typeClient = (window.navigator.sayswho = (function () {
    var ua = window.navigator.userAgent,
      tem,
      M =
        ua.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return "IE " + (tem[1] || "");
    }
    if (M[1] === "Chrome") {
      tem = ua.match(/\b(OPR|Edge)\//);
      if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
    }
    M = M[2]
      ? [M[1]]
      : [window.navigator.appName, window.navigator.appVersion, "-?"];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(" ");
  })());
  return (
    <Fragment>
      {typeClient !== "Chrome" && hideMessage ? (
        typeClient !== "Firefox" && hideMessage ? (
          typeClient !== "Opera" && hideMessage ? (
            <div className="z-index-99 bg-gray-200 fixed-top w-100 d-flex justify-content-between h--30">
              <p className="m-auto text-dark font-weight-lighter fs--20">
                Te recomandamos usar Google Chrome, Firefox, Opera o Edge para
                un correcto funcionamiento.
              </p>
              <button
                className=" btn btn-sm"
                onClick={() => setHideMessage(false)}
              >
                x
              </button>
            </div>
          ) : (
            setHideMessage(false)
          )
        ) : (
          setHideMessage(false)
        )
      ) : (
        setHideMessage(false)
      )}
    </Fragment>
  );
};

export default Message;
