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
  // const selectedOption = req.query.selectedOption;

  const source = `{ user(id: ${iconId}){icon}}`;

  graphql({ source, schema, rootValue: root }).then((result) => {
    res.json({ item: result.data.user.icon });
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
