const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

app.get("/api/fetchArticles", async (req, res) => {
  try {
    const response = await fetch("https://dev.to/api/articles/me/published", {
      headers: {
        "api-key": process.env.REACT_APP_DEV_TO_API_KEY,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching articles from dev.to:", error);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
