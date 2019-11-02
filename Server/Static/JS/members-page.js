
// >>> CALCULATOR <<< //
var amountYouHave = document.getElementById("amount");
var priceDisplay = document.getElementById("eth-quote");
var btnRefresh = document.getElementById("refresh")
var exchange = document.getElementById("quote-calc")
var amount = 0

//  Refresh button listener
btnRefresh.addEventListener("click", quoteQuery)

// load page with ETH price
window.onload = refreshQuote;
 
// function to format number at Amount element to dollar style
amountYouHave.addEventListener("blur", function () {
  window.amount = amountYouHave.value
  amount = Number(amount)
  amountYouHave.value = amount.toLocaleString(
    undefined, // leave undefined to use the browser's locale,
    // or use a string like 'en-US' to override it.
    { minimumFractionDigits: 2 }
  );
  ExchangeCalc()
})

// function updade crytos price and refresh date
function refreshQuote(e) {
  e.preventDefault();
  quoteQuery();
  loadbalance();

};

//  >>>>>Exchange quote function <<<<<<< //
function ExchangeCalc() {
    myMoney = window.amount;
    console.log(myMoney);
    var etherquote = window.localStorage.getItem('ether');
    console.log(etherquote);
    etherquote = Number(etherquote);
    calc = myMoney / etherquote;
    calc = calc.toFixed(2)
    calc = Number(calc);
    calc1 = calc.toLocaleString(undefined, { minimumFractionDigits: 2 });
    console.log(calc1)
  if (calc.toString() != "NaN") {
    exchange.innerHTML = calc1;
    } else 
    exchange.innerHTML = 0;   
}

function loadbalance(){
  var txtfname = document.getElementById("fname");
  var mycurrency = document.getElementById("balance");
  
  txtfname.innerHTML = window.localStorage.getItem('firstname');
  mycurrency.innerHTML = window.localStorage.getItem('coins');
  console.log(txtfname);
  

}

function logout(){
  window.localStorage.clear();
  window.location.href = "/"

}
// >>>> Query API for TABLE <<<<< //

let apiKey = "&api_key=9bae89b5b3cfbe0716114e6adaa8425a308f30df3608b151104e391db372d371";
let urlApi = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USD&tsyms=CAD,BTC,ETH,LTC,BCH&extraParams=your_app_name";
let cryptoId = "CAD,ETH,LTC,BCH"; // quotation BTC to currencies
let intervals = "1h"; //Enum:"1h" "1d" "7d" "30d" "365d" "ytd"
let queryApi = urlApi + apiKey;

function quoteQuery(e) {

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
      window.localStorage.setItem('ether', ETHprice);
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
      // append ETH price to exchance func //
      priceDisplay.innerHTML = ETH;
    })
    .then(function updateTime() {
      var currentTime = new Date()
      var hours = currentTime.getHours()
      var minutes = currentTime.getMinutes()
      if (minutes < 10) {
        minutes = "0" + minutes
      }
      var t_str = hours + ":" + minutes + " ";
      if (hours > 11) {
        t_str += "PM";
      } else {
        t_str += "AM";
      }
      console.log(t_str)
      document.getElementById('lastUpdate').innerHTML = t_str;
    });
}
