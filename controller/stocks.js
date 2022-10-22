const { getStocksValue, getStocksValueOfAll } = require("../services/stocks")

// STOCK
// get specific stock data
// Route: /stocks/:symbol
module.exports.getSpecificStockPrice = async (req, res) => {
	try {
		const { symbol } = req.params
		const resp = await getStocksValue(symbol)
		const price = resp.data?.results?.p
		res.status(200).json({
			success: true,
			price,
		})
	} catch (err) {
		res.status(404).json({
			success: false,
			message: "not found",
		})
	}
}

// get all stock prices
// Route: /stocks
module.exports.getAllStocksPrice = async (_, res) => {
	try {
		const resp = await getStocksValueOfAll()
		const prices = resp.map(r => {
			const result = r.data?.results
			return {
				[result?.T]: result?.p,
			}
		})
		const pricesObj = Object.assign({}, ...prices)
		res.status(200).json({
			success: true,
			prices: pricesObj,
		})
	} catch (err) {
		res.status(404).json({
			success: false,
			message: "not found",
		})
	}
}
