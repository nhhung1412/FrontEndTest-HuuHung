import { Sidebar } from './components/Sidebar/Sidebar'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

import './App.css'

function App() {


  return (
    <div className="App">
      <Sidebar />
      <div>
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
