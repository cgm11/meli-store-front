interface Props {
  name: string
  onClick: any
}

const Button = (props: Props) => {
  const { name, onClick } = props
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
