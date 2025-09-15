import type { FormEvent } from "react"

export default function CriptoSearch() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }


  return (
    <form className="form" onSubmit={ handleSubmit }>
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
        >
          <option value="">Seleccionar</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cripto-currency">Cripto moneda:</label>
        <select
          name="cripto-currency"
          id="cripto-currency"
        >
          <option value="">Seleccionar</option>
        </select>
      </div>

      <input type="submit" value="Cotizar"/>
    </form>
  )
}
