import './styles.css'

interface Props{
    title: string
}

const Header = ({title}: Props) => {
  return (
    <header>
        <img className='icon' src="uepb.png" alt="uepb" />
        <h1 className='title'>{title}</h1>
    </header>
  )
}

export default Header
