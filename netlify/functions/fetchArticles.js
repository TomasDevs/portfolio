const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const response = await fetch("https://dev.to/api/articles/me/published", {
      headers: {
        "api-key": process.env.VITE_DEV_TO_API_KEY,
      },
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch articles" }),
    };
  }
};
