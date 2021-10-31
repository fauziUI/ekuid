const rates = {
    "AUD": 1.3272,
    "BGN": 1.6795,
    "BRL": 5.6417,
    "CAD": 1.2351,
    "CHF": 0.91121,
    "CNY": 6.3966,
    "CZK": 22.067,
    "DKK": 6.3881,
    "EUR": 0.85874,
    "GBP": 0.72555,
    "HKD": 7.777,
    "HRK": 6.4637,
    "HUF": 309.15,
    "IDR": 14217,
    "ILS": 3.149,
    "INR": 74.865,
    "ISK": 128.64,
    "JPY": 113.89,
    "KRW": 1170.39,
    "MXN": 20.442,
    "MYR": 4.141,
    "NOK": 8.3723,
    "NZD": 1.3959,
    "PHP": 50.368,
    "PLN": 3.9687,
    "RON": 4.2502,
    "RUB": 70.7,
    "SEK": 8.5331,
    "SGD": 1.3462,
    "THB": 33.25,
    "TRY": 9.5657,
    "ZAR": 15.238
}

//input here exp => [{"amount": 15000, "currency": "KRW"},{ "amount": 3.1, "currency": "EUR" }] //
let input = [{"amount": 15000, "currency": "KRW"},{ "amount": 3.1, "currency": "EUR" }]
let hasil = []

function soalNo2(feed) {
  for (let i = 0; i < feed.length; i++) {
    let amount = feed[i].amount
    let query;
    switch (feed[i].currency) {
      case 'AUD':
      query = rates.AUD
      break;
      case 'BGN':
      query = rates.BGN
      break;
      case 'BRL':
      query = rates.BRL
      break;
      case 'CAD':
      query = rates.CAD
      break;
      case 'CHF':
      query = rates.CHF
      break;
      case 'CNY':
      query = rates.CNY
      break;
      case 'CZK':
      query = rates.CZK
      break;
      case 'DKK':
      query = rates.DKK
      break;
      case 'EUR':
      query = rates.EUR
      break;
      case 'GBP':
      query = rates.GBP
      break;
      case 'HKD':
      query = rates.HKD
      break;
      case 'HRK':
      query = rates.HRK
      break;
      case 'HUF':
      query = rates.HUF
      break;
      case 'IDR':
      query = rates.IDR
      break;
      case 'ILS':
      query = rates.ILS
      break;
      case 'INR':
      query = rates.INR
      break;
      case 'ISK':
      query = rates.ISK
      break;
      case 'JPY':
      query = rates.JPY
      break;
      case 'KRW':
      query = rates.KRW
      break;
      case 'MXN':
      query = rates.MXN
      break;
      case 'MYR':
      query = rates.MYR
      break;
      case 'NOK':
      query = rates.NOK
      break;
      case 'NZD':
      query = rates.NZD
      break;
      case 'PHP':
      query = rates.PHP
      break;
      case 'PLN':
      query = rates.PLN
      break;
      case 'RON':
      query = rates.RON
      break;
      case 'RUB':
      query = rates.RUB
      break;
      case 'SEK':
      query = rates.SEK
      break;
      case 'SGD':
      query = rates.SGD
      break;
      case 'THB':
      query = rates.THB
      break;
      case 'TRY':
      query = rates.TRY
      break;
      case 'ZAR':
      query = rates.ZAR
      break;
    }
    hasil.push(amount/query)
  }
  console.log(hasil)
}

soalNo2(input)


