import { useState, type ChangeEvent, type FormEvent } from "react"
import { currencies } from "../data";
import { useCryptoStore } from "../store/store";
import type { CurrencyPair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearch() {
  const { cryptoCurrencies, getCrytoPrice } = useCryptoStore();
  const [error, setError] = useState<string | null>(null);
  const [pair, setPair] = useState<CurrencyPair>({
    currency: '',
    cryptoCurrency: ''
  });

  const handlerCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(pair).includes('')) return setError('Todos los campos son obligatorios');
    else setError(null);

    getCrytoPrice(pair);
  }

  return (
    <form className="form" onSubmit={ handleSubmit }>
      { error && <ErrorMessage>{ error }</ErrorMessage> }

      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          value={pair.currency}
          onChange={ handlerCurrencyChange }
        >
          <option value="">Seleccionar...</option>
          {currencies.map((currency) => (
            <option
              key={currency.code}
              value={currency.code}
            >{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptoCurrency">Cripto moneda:</label>
        <select
          name="cryptoCurrency"
          id="cryptoCurrency"
          onChange={ handlerCurrencyChange }
          value={pair.cryptoCurrency}
        >
          <option value="">Seleccionar...</option>
          {cryptoCurrencies.map((crypto) => (
            <option
              key={crypto.CoinInfo.Name}
              value={crypto.CoinInfo.Name}
            >{crypto.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar"/>
    </form>
  )
}
