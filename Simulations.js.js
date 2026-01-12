const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const simulations = [
  {
    duration: "10 years",
    monthlyContribution: "₹5,000",
    projectedValue: "₹12,00,000",
  },
  {
    duration: "15 years",
    monthlyContribution: "₹7,000",
    projectedValue: "₹22,50,000",
  },
];

// API endpoint
app.get("/api/simulations", (req, res) => {
  res.json(simulations);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
