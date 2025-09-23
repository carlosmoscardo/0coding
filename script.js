let countryCodes = {
    49: "Germany",
    41: "Switzerland",
    44: "UK",
    1: "USA",
}

for (let key in countryCodes) {
    console.log(key + countryCodes[key]);
}

// result: order changes