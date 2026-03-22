async function predictWaterLevel(
  tankCapacity,
  currentLevel,
  residents,
  dailyUsage,
  rainfall,
) {
  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tank_capacity: tankCapacity,
        current_level: currentLevel,
        residents: residents,
        daily_usage: dailyUsage,
        rainfall: rainfall,
      }),
    });

    const data = await response.json();
    return data; // ✅ return full object
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

document
  .getElementById("predict-btn")
  .addEventListener("click", async function () {
    const tankCapacity = parseFloat(
      document.querySelector(".tank-capacity").value,
    );

    const currentLevel = parseFloat(
      document.querySelector(".current-level").value,
    );

    const residents = parseInt(document.querySelector(".residents").value);

    const dailyUsage = parseFloat(document.querySelector(".daily-usage").value);

    const rainfall = parseFloat(document.querySelector(".rainfall").value);

    const data = await predictWaterLevel(
      tankCapacity,
      currentLevel,
      residents,
      dailyUsage,
      rainfall,
    );

    if (!data) {
      document.querySelector(".result").textContent = "Server error 🚨";
      return;
    }

    const days = data.days_left;

    // Show result
    document.querySelector(".result").textContent =
      `Days Left: ${days} | Status: ${data.alert}`;

    // 🔥 Color logic
    if (days <= 2) {
      document.getElementsByClassName("container").style.backgroundColor =
        "#f30f0f"; // red
    } else if (days <= 5) {
      document.getElementsByClassName("container").style.backgroundColor =
        "#f3f30f"; // yellow
    } else {
      document.getElementsByClassName("container").style.backgroundColor =
        "#0ff30f"; // green
    }
  });
