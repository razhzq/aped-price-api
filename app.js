const express = require("express")
const bodyParser = require("body-parser")
//controllers
const { getExchangeRateOfCrypto, getExchangeRateOfCryptoByName } = require("./controller/crypto")
const { getSpecificCryptoOHCL, getSpecificStocksOHCL, getSpecificForexOHCL } = require("./controller/ohcl")
const { getExchangeRatesOfForex, getExchangeRateOfForexByName } = require("./controller/forex")
const { getSpecificStockPrice, getAllStocksPrice } = require("./controller/stocks")

// config dotenv
require("dotenv").config()

//app
const app = express()
//middleware
app.use(bodyParser.json())
//set PORT
const port = process.env.EA_PORT || 8080

//ROUTES
//crypto
app.get("/cryptos", getExchangeRateOfCrypto)
app.get("/crypto/:name", getExchangeRateOfCryptoByName)

//forex
app.get("/forex", getExchangeRatesOfForex)
app.get("/forex/:name", getExchangeRateOfForexByName)

//stocks
app.get("/stocks", getAllStocksPrice)
app.get("/stock/:symbol", getSpecificStockPrice)

//ohcl
app.get("/ohcl/crypto/:symbol/:interval", getSpecificCryptoOHCL)
app.get("/ohcl/stocks/:symbol/:interval", getSpecificStocksOHCL)
app.get("/ohcl/forex/:symbol/:interval", getSpecificForexOHCL)

// start server
app.listen(port, () => console.log(`Listening on port ${port}!`))
