/**
 * dynamic add script to html
 *
 * @param url
 * @param callback
 */
export default function createScript(url, callback) {
  const oScript = document.createElement('script');
  oScript.type = 'text/javascript';
  oScript.async = true;
  oScript.src = url;

  /**
   * IE6/7/8                -- onreadystatechange
   * IE9/10                 -- onreadystatechange, onload
   * Firefox/Chrome/Opera   -- onload
   */

  const isIE = !-[1,];
  if (isIE) {
    // 判断IE8及以下浏览器
    oScript.onreadystatechange = function () {
      if (this.readyState == 'loaded' || this.readyState == 'complete') {
        callback();
      }
    }
  } else {
    // IE9及以上浏览器，Firefox，Chrome，Opera
    oScript.onload = function () {
      callback();
    }
  }

  document.body.appendChild(oScript);
}
