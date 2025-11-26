import Input from "../components/Input"


const Login = () => {
    return (
        <div className="container">

        <div class="auth-container">

            <div class="auth-header">
                <div class="auth-icon">🔐</div>
                <h1 class="auth-title">Вход</h1>
                <p class="auth-subtitle">Войдите в свой аккаунт</p>
            </div>

            <div class="alert alert-error" id="error-alert">
                Неверное имя пользователя или пароль
            </div>

            <form id="login-form">
                <div class="form-group">
                    <label class="form-label">Имя пользователя</label>
                    <Input 
                        type="text" 
                        class="form-input" 
                        name="username"
                        placeholder="Введите имя пользователя"
                        required
                        autocomplete="username"
                    />
                    <div class="form-error">Введите имя пользователя</div>
                </div>

                <div class="form-group">
                    <label class="form-label">Пароль</label>
                    <Input 
                        type="password" 
                        class="form-input" 
                        name="password"
                        placeholder="Введите пароль"
                        required
                        autocomplete="current-password"
                    />
                    <div class="form-error">Введите пароль</div>
                </div>

                <button type="submit" class="btn-submit">Войти</button>
            </form>

        <div class="auth-divider">или</div>

        <div class="auth-link">
            Нет аккаунта? <a href="/register">Зарегистрироваться</a>
        </div>
    </div>
    
    </div>
    ) 
}
 
export default Login