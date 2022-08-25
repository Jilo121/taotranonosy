import { Button } from "bootstrap"

const Login = () => {
    return (
        <div className="login">
            <div className="header-group">
                <button className="btn-signup btn">S'inscrire</button>
                <h1 className="header">TAOTRANON'NY NOSY</h1>
            </div>
            
            <div className="form">
                <div className="legend">
                    <h3>Se connecter</h3>
                </div>
                <div className="input">
                    <legend>E-mail</legend>
                    <input type="email" className="text name_text" placeholder="exemple@exemple.com"/>
                    <legend>Mot de passe</legend>
                    <input type="password" className="password psd"/>
                    <input type="submit" className="btn-login btn"/>
                </div>
            </div>
        </div>
    )
}

export default Login