import "./styles.scss"

interface Props {
  categories: string[]
}

const Breadcrumb = (props: Props) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ul>
        {props.categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
