import './styles.css'

const Login = () => {
  return (
    <>
    <div className='form'>
        <label htmlFor="cpf">CPF</label>
        <input id="cpf" type="text" />
    </div>
    <div className='form'>
        <label htmlFor="pass">SENHA</label>
        <input id="pass" type="password" />
    </div>
    </>
  )
}

export default Login
