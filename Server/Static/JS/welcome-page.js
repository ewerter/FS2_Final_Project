
// >>> CALCULATOR <<< //
var amountYouHave = document.getElementById("amount");
var priceDisplay = document.getElementById("eth-quote");
var btnRefresh = document.getElementById("refresh")
var exchange = document.getElementById("quote-calc")
var amount=0

var etherscanKey = "CK4PVXCF7G4E165XBE576895JUTAHJXK5V"
var getEtherLastPrice = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${etherscanKey}`;

// >>>> Query API for TABLE <<<<< //

let apiKey = "&api_key=9bae89b5b3cfbe0716114e6adaa8425a308f30df3608b151104e391db372d371";
let urlApi = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USD&tsyms=CAD,BTC,ETH,LTC,BCH&extraParams=your_app_name";
let cryptoId = "CAD,ETH,LTC,BCH"; // quotation BTC to currencies
let intervals =   "1h"; //Enum:"1h" "1d" "7d" "30d" "365d" "ytd"
let queryApi = urlApi+apiKey;

fetch(queryApi)
  .then(response => response.json())
  .then(data => {
      let CADprice = 1
      let USDprice = 1 / (data.RAW.USD.CAD.PRICE)
      let BTCprice = (data.RAW.USD.CAD.PRICE) / (data.RAW.USD.BTC.PRICE)
      BTCprice = BTCprice.toFixed(2);
      BTCprice = Number(BTCprice)
      BTC = BTCprice.toLocaleString(undefined, { minimumFractionDigits: 2 });
      let ETHprice = (data.RAW.USD.CAD.PRICE) / (data.RAW.USD.ETH.PRICE)
      ETHprice = ETHprice.toFixed(2);
      ETHprice = Number(ETHprice)
      ETH = ETHprice.toLocaleString(undefined, { minimumFractionDigits: 2 });
      let BCHprice = (data.RAW.USD.CAD.PRICE) / (data.RAW.USD.BCH.PRICE)
      BCHprice = BCHprice.toFixed(2);
      BCHprice = Number(BCHprice)
      BCH = BCHprice.toLocaleString(undefined, { minimumFractionDigits: 2 });
      let LTCprice = (data.RAW.USD.CAD.PRICE) / (data.RAW.USD.LTC.PRICE)
      LTCprice = LTCprice.toFixed(2);
      LTCprice = Number(LTCprice)
      LTC = LTCprice.toLocaleString(undefined, { minimumFractionDigits: 2 });

      // append prices to the TABLE //
      document.getElementById('btc').innerHTML = BTC;
      document.getElementById('eth').innerHTML = ETH;
      document.getElementById('bch').innerHTML = BCH;
      document.getElementById('ltc').innerHTML = LTC;
  });
