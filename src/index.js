import { h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { renderToString as ionRenderToString } from "@ionic/core/hydrate";
import styles from "@ionic/core/css/ionic.bundle.css";
import { App } from "./app";

import express from "express";

const server = express();
const ctx = {};

server.use("/dist", express.static("dist"));

if (styles.__inject__) {
  styles.__inject__(ctx);
}

server.get("*", (_req, res) => {
  (async () => {
    // hydrate ONLY the Vue app
    const html = await vueSSR();

    // hydrate the Vue app AND Ionic components
    // const html = await ionicSSR();

    res.end(html);
  })();
});

server.listen(8080, () => {
  console.log("listening on http://localhost:8080");
});

async function vueSSR() {
  const html = await renderToString(h(App));
  return `<!DOCTYPE html>
    <html lang="en">
    <head><title>Hello</title>${ctx.styles}</head>
    <body>
    <div id="app">${html}</div>
    </body>
    <script src="/dist/client.js"></script>
    </html>`;
}

async function ionicSSR() {
  return (await ionRenderToString(await vueSSR())).html;
}
