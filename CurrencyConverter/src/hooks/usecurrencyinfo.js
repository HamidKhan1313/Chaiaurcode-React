import { useEffect, useState } from "react";

function useCurrencyinfo(currency){
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json`)
    .then((res) => res.json())
    .then(res => setData(res[currency]))
    console.log(data);
    
  } , [currency])   // contain (1)call back (2) dependency
  return data
}

