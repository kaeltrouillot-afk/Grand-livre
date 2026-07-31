<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Grand Livre — Gestion de patrimoine</title>
  <meta name="description" content="Application personnelle de gestion de patrimoine : revenus, dépenses, comptes, objectifs, budgets." />
  <link rel="manifest" href="manifest.json" />
  <meta name="theme-color" content="#1C2B22" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Grand Livre" />
  <link rel="icon" href="icon-192.png" />
  <link rel="apple-touch-icon" href="icon-192.png" />
  <style>
    html, body { margin: 0; padding: 0; background: #F4F6F1; }
    #root { min-height: 100vh; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
  <script>
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(() => {});
      });
    }
  </script>
</body>
</html>
