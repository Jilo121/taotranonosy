import { Button } from "bootstrap";
import { ReactDOM } from "react-dom";
import {BrowserRouter,Route, useRoutes} from "react-router-dom";

function sinscrire () {
    let Route = new Route
}

const Login = () => {
    return (
        <div className="login">
        <div className="header-group">
            <div><button className="btn-up btn" onClick={
                () =>{
                    Route.push("./page/signup")
                    }
                }>S'inscrire</button></div>
            <div className="logo">
                <div id="image"><img src="../logo.png"/></div>
                <div id="entreprise">Taotranon'ny Nosy</div> 
            </div>
        </div>
        
        <div className="form">
            <div className="titre">Se connecter</div>
            <div className="input">
                <div><legend>E-mail</legend></div>
                <div><input type="email" className="input-in text name_text" placeholder="exemple@exemple.com"/></div>
                <div><legend>Mot de passe</legend></div>
                <div><input type="password" className="input-in password psd" placeholder="********"/></div>
                <div><button class="btn-link">Mot de passe oubier?</button></div>
                <div><input type="submit" className="btn-submit btn" value="Se connecter"/></div>
            </div>
        </div>
    </div>
    )
}

export default Login