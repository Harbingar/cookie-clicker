(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t);
  new MutationObserver((t) => {
    for (const n of t)
      if (n.type === "childList")
        for (const r of n.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && c(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(t) {
    const n = {};
    return (
      t.integrity && (n.integrity = t.integrity),
      t.referrerPolicy && (n.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function c(t) {
    if (t.ep) return;
    t.ep = !0;
    const n = l(t);
    fetch(t.href, n);
  }
})();
(() => {
  let e = 0,
    o = 10,
    l = 0,
    c = !1,
    t,
    n = 0,
    r = 50;
  (document.getElementById("score").innerHTML = e),
    (document.getElementById("cost-multiplicator").innerHTML = o),
    (document.getElementById("cost-booster").innerHTML = r),
    document
      .getElementById("btn-cookieClicker")
      .addEventListener("click", function () {
        l > 0
          ? c
            ? (e += 1 * (l * 2) * 5)
            : (e += 1 * (l * 2))
          : c
          ? (e += 5)
          : (e += 1),
          (document.getElementById("score").textContent = e);
      }),
    document
      .getElementById("btn-multiplicator")
      .addEventListener("click", () => {
        e >= o
          ? ((e -= o),
            (o *= 2),
            (l += 1),
            (document.getElementById("score").innerHTML = e),
            (document.getElementById("cost-multiplicator").innerHTML = o),
            (document.getElementById("lvl-multiplicator").innerHTML = l))
          : alert("Vous n'avez pas assez de crédits");
      });
  let i = 50,
    s = 0;
  document.getElementById("cost-autoClicker").innerHTML = i;
  function u() {
    (e += s), (document.getElementById("score").textContent = e);
  }
  document.getElementById("btn-autoClicker").addEventListener("click", () => {
    e >= i
      ? ((e -= i),
        (i *= 3),
        s++,
        setInterval(u, 1e3),
        (document.getElementById("score").innerHTML = e),
        (document.getElementById("cost-autoClicker").innerHTML = i),
        (document.getElementById("lvl-autoClicker").innerHTML = s))
      : alert("Vous n'avez pas assez de crédits");
  }),
    document
      .getElementById("btn-booster")
      .addEventListener("click", function () {
        if (!c && e >= r) {
          (c = !0),
            (e -= r),
            (r *= 2),
            n++,
            (document.getElementById("cost-booster").innerHTML = r),
            (document.getElementById("lvl-booster").innerHTML = n),
            (document.getElementById("score").innerHTML = e);
          let d = 30;
          t = setInterval(function () {
            d--,
              (document.getElementById("timer-booster").innerHTML = d),
              d <= 0 &&
                (clearInterval(t),
                (c = !1),
                (document.getElementById("timer-booster").innerHTML = 0));
          }, 1e3);
        } else alert("pas assez de credits");
      });
})();
