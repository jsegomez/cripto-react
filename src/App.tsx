import './index.css'

import CriptoSearch from './components/CriptoSearch'
import { useCryptoStore } from './store/store'
import { useEffect } from 'react';

function App() {  
  const { fetchCrypto } = useCryptoStore();

  useEffect(() => {
    fetchCrypto(10, 'USD')
  },[ fetchCrypto])

  return (

    <div className="container">
      <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>

      <div className="content">
        <CriptoSearch />
      </div>
    </div>
  )
}

export default App
