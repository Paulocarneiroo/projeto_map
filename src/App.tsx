import './App.css'
import Header from '../components/Header'
import Login from '../components/Login'
import Button from '../components/Button'
function App() {

  return (
    <>
    <Header title='Faça seu login'/>
    <main>
        <Login/>
        <Button action='Logar'/>
    </main>
    </>
  )
}

export default App
