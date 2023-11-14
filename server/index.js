import { graphql } from "graphql";
import root from "./resolver.js";
import schema from "./schema.js";
import express from "express";
import cors from "cors";
const app = express();
const port = 4000;

app.use(cors());

app.get("/geticon", (req, res) => {
  const iconId = req.query.iconId;

  const source = `{ user(id: ${iconId}){icon}}`;
  const source2 = `{users{icon}}`;

  graphql({ source, schema, rootValue: root }).then((result) => {
    res.json({ item: result.data.user.icon });
    // console.log(result.data.user.icon);
  });

  // graphql({ source: source2, schema, rootValue: root }).then((result) => {
  //   res.json({ item2: result.data.user.icon });
  //   // console.log(result.data.user.icon);
  // });
});

app.listen(port, () => console.log(`listening on port ${port}`));
