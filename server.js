const express = require("express")
const next = require("next")

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = dev ? 3000 : 5000

app
  .prepare()
  .then(() => {
      const server = express();

    server.get("/", (req, res) => {
        const actualPage = "/index";
        const queryParams = { slug: 'home', apiRoute: "pages" };
        app.render(req, res, actualPage, queryParams);
    });
    
    server.get("/food", (req, res) => {
        const actualPage = "/food";
        const queryParams = { slug: 'food', apiRoute: "pages" };
        app.render(req, res, actualPage, queryParams);
    });

    server.get("/food/:slug", (req, res) => {
      app.render(req,res,'/archive',{
          slug: req.params.slug,
          apiRoute: 'food/?slug='
      })
    });

    server.get("/community", (req, res) => {
        const actualPage = "/community";
        const queryParams = { slug: 'community', apiRoute: "pages" };
        app.render(req, res, actualPage, queryParams);
    });

    server.get("/community/:slug", (req, res) => {
      const actualPage = "/post";
      const queryParams = { slug: req.params.slug, apiRoute: 'blog' };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/gallery", (req, res) => {
        const actualPage = "/gallery";
        const queryParams = { slug: 'gallery', apiRoute: "pages" };
        app.render(req, res, actualPage, queryParams);
    });

    server.get("/:slug", (req, res) => {
        const actualPage = "/post";
        const queryParams = { slug: req.params.slug, apiRoute: "pages" };
        app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
  });
