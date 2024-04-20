import { useState } from 'react'
import Header from './anatomy/Layout/Header/Header'
import Main from './anatomy/Layout/Main/Main'
import Footer from './anatomy/Layout/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content-grid all | font-poppins min-h-dvh font-NotoSans overflow-x-hidden '>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
