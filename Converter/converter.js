function convertCurrency() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var xmlhttp = new XMLHttpRequest();
  var url =
    "http://data.fixer.io/api/latest?access_key=bf5f3b5c2a51759030f5b802221c7a96&format=1&symbols=" +
    from +
    "," +
    to;
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var result = xmlhttp.responseText;
      //   alert(result);
      var jsResult = JSON.parse(result);
      var oneUnit = jsResult.rates[to] / jsResult.rates[from];
      var amt = document.getElementById("fromAmount").value;
      document.getElementById("toAmount").value = (oneUnit * amt).toFixed(2);
    }
  };
}
