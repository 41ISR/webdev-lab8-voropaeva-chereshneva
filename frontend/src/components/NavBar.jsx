import { Link } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore'

const NavBar = () => {
    const { session } = useUserStore()

    return (

        <div className="container">
            <header>
            <nav>
                <a href="/" class="logo">🛒 Маркетплейс</a>
                
                {/* <ul class="nav-links" id="auth-nav">
                    <li><Link to={"/"}>Товары</Link></li>
                    <li><Link to={"/my-bids"}>Мои ставки</Link></li>
                    <li><Link to={"/create-item"} class="btn-primary">Создать товар</Link></li>
                    <li class="user-info">
                        <span class="username">username</span>
                        <button class="btn-logout">Выйти</button>
                    </li>
                </ul> */}

                <ul class="nav-links" id="guest-nav">
                   <li>
                        <Link to={"/"}>Домой</Link>
                    </li>
                    {!session ? (
                        <li>
                            <Link to={"/login"}>Войти</Link>
                        </li>
                    ) : (
                        <>
                        <li>
                            <Link to={"/create-item"}>Создать товар</Link>
                        </li>
                        <li>
                            <Link to={"/logout"}>Выйти</Link>
                        </li>
                        </>
                    )}
                </ul> 
            </nav>
            </header>
        </div>




    )
}

export default NavBar