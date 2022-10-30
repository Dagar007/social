import { Link } from "react-router-dom"
import "./register.scss"

export const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Pakshya.</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis vel nunc et iaculis. Donec eu viverra odio. Praesent sodales, ex at fermentum rutrum, neque diam tempus magna, at malesuada ante dolor a risus. Aliquam viverra suscipit ligula, luctus.
                </p>
                <span>Do you have an account.</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/> 
                    <input type="text" placeholder="Name"/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}
