const axios = require("axios")

const getUrl = symbol =>
	`https://api.polygon.io/v2/last/trade/${symbol?.toUpperCase()}?apiKey=${process.env.STOCKS_API_KEY}`

// get Value of a specific stock
module.exports.getStocksValue = async symbol => {
	return axios.get(getUrl(symbol))
}

// TSLA      Tesla
// AAPL      Apple
// AMZN      Amazon
// META      Meta
// SNAP    Snap
// American Express (NYSE:AXP)
// Cisco Systems (NASDAQ:CSCO)
// AT&T (T)
// The Walt Disney Co. (DIS)
// AbbVie (ABBV)
// 3M (MMM)
// JPMorgan Chase & Co. (JPM)
// Johnson & Johnson (JNJ)

// get Stocks of All above companies
module.exports.getStocksValueOfAll = async () => {
	const stocks = ["TSLA", "AAPL", "AMZN", "MSFT", "SNAP", "AXP", "CSCO", "T", "DIS", "ABBV", "MMM", "JPM", "JNJ"]
	const promises = stocks.map(stock => axios.get(getUrl(stock)))
	return Promise.all(promises)
}
