import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Header } from './components/Header'
import Layout from './pages/Layout'
import Main from './pages/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Layout>
        <Main />
      </Layout>
      {/* footer */}
    </>
  )
}

export default App
