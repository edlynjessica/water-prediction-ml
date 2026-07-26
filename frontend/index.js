async function predict() {

    // Button
    const button = document.getElementById("predict-btn");
    button.innerText = "⏳ Predicting...";
    button.disabled = true;

    // Read Inputs
    const data = {
        tank_capacity: Number(document.getElementById("tank_capacity").value),
        current_level: Number(document.getElementById("current_level").value),
        residents: Number(document.getElementById("residents").value),
        daily_usage: Number(document.getElementById("daily_usage").value),
        rainfall: Number(document.getElementById("rainfall").value)
    };

    try {

        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Backend returned an error.");
        }

        const result = await response.json();

        // Progress bar percentage (0-30 days)
        let percent = (result.days_left / 8) * 100;
        percent = Math.min(percent, 100);

        // Progress bar color
        let color = "#2ecc71";
        let icon = "🟢";

        if (result.alert === "WARNING") {
            color = "#f39c12";
            icon = "🟡";
        } else if (result.alert === "CRITICAL") {
            color = "#e74c3c";
            icon = "🔴";
        }

        const resultBox = document.getElementById("result");

        resultBox.style.visibility = "visible";
        resultBox.style.opacity = "1";

        resultBox.innerHTML = `
            <div class="result-title">
                Prediction
            </div>

            <div class="days">
                ${Number(result.days_left).toFixed(2)} Days
            </div>

            <div class="progress-container">
                <div class="progress-bar"
                    style="width:${percent}%; background:${color};">
                </div>
            </div>

            <div class="status">
                ${icon} ${result.alert}
            </div>
        `;

    }
    catch (error) {

        console.error(error);
        alert(error.message);

    }
    finally {

        button.innerText = "🔍 Predict";
        button.disabled = false;

    }

}