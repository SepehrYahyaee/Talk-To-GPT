import express from "express";

const app = express();

app.use(express.json());

app.post("/talk", async (req, res) => {
    const response = await fetch(process.env.API_ADDRESS, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'one-api-token': process.env.ONE_API_KEY,
            'Content-Type': 'application/json'
          },
        body: JSON.stringify([req.body])
      })

    const result = await response.json()

    return res.send(result);
})

app.listen(process.env.PORT, () => console.log("App is running on port:", process.env.PORT));