import logo from "../../assets/logo.png"
import Input from "../Share/Input"
import "./styles.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <img className="logo" src={logo} alt="Logo Mercado Libre" />
        <Input />
      </div>
    </div>
  )
}

export default Header
