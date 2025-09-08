const quotes = [
    "The only way ettur gets bitches is to talk to them.",
    "women are suns, hot as mackarooli",
    "to become a walker like sten, you must get rejected a thousand times",
    "If you chase for pleasure, then you have become Harald Luik(väike tillu)",
    "If you chase knowleadge, then you shall have great future",
    "Dont be like ettur",
    "If you like working out, dont be like Raul",
    "Life is dark, cuz its night time dumbass",
    "They used to get bitches, but now they get bros",
    "Why use the bus, when you can walk -Rainer",
    "The purpose of life is to suck ceed",
    "This a quote and so is life",
    "Rando was empty inside and she still is",
    "Dont give up, because the insects still want you",
    "Drink water for d1 growth",
    "When you hear a random noise, then it's a plane",
    "Sigma Sigma boy Sigma boy",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {

    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
    if (usedIndexes.has(randomIdx)) continue
    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
    }
}
