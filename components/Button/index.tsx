import './styles.css'
type Props ={
    action: string
}

const Button = ({action}: Props) => {
  return (
    <button type='submit' className='btn'>{action}</button>
  )
}

export default Button
