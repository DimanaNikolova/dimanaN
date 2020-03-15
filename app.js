function getInfo() {
    let stopName = document.getElementById("stopName")
    let busesUl = document.getElementById("buses")
    let stopIdInput = document.getElementById("stopId")

    let url = `https://judgetests.firebaseio.com/businfo/${stopIdInput.value}.json `
    busesUl.textContent = ""
    stopName.textContent = ""

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let { name, buses } = data
            stopName.textContent = name

            Object.entries(buses)
                .forEach(([busId, busTime]) => {
                    let li = document.createElement("li")
                    li.textContent = `Bus ${busId} arrives in ${busTime} minutes`
                    busesUl.appendChild(li)
                });

        }
        )
        .catch((err) => {
            stopName.textContent = "Error"
        })
}