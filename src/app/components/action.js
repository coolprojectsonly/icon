import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIcon = createAsyncThunk("/post/getdata", async ({ iconId }) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/geticon?iconId=${iconId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
});
