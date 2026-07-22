/* Deep Mist AI — site analytics loader.
 *
 * Engine: Cloudflare Web Analytics (cookieless, no localStorage, no fingerprinting,
 * no cross-site tracking). Because it stores nothing on the visitor's device it needs
 * no cookie-consent banner under GDPR/ePrivacy.
 *
 * TO ENABLE: paste the site token from the Cloudflare Web Analytics dashboard below.
 * While the token is empty this file is a deliberate no-op — no request is made and
 * no data leaves the visitor's browser. That is the current, shipped state.
 *
 * Setup steps live in OPS/analytics-setup.md (company repo).
 */
var CF_BEACON_TOKEN = "";

(function () {
  if (!CF_BEACON_TOKEN) return; // not configured yet — stay silent

  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_BEACON_TOKEN }));
  document.head.appendChild(s);
})();
