import './index.css'

import CriptoSearch from './components/CriptoSearch'

function App() {  
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
