const Signup = () => {
    return (
    <div className="signUp">
        <div className="header-group">
            <div><button className="btn-up btn">Se connecter</button></div>
            <div className="logo">
                <div id="image"><img src="../logo.png"/></div>
                <div id="entreprise">Taotranon'ny Nosy</div> 
            </div>
        </div>
        
        <div className="form">
            <div className="titre">S'inscrire</div>
            <div className="input">
                <div><legend>Nom</legend></div>
                <div><input type="text" className="input-in text name_text"/></div>
                <div><legend>Prénom</legend></div>
                <div><input type="text" className="input-in text name_text"/></div>
                <div><legend>E-mail</legend></div>
                <div><input type="email" className="input-in text name_text" placeholder="exemple@exemple.com"/></div>
                <div></div>
                <div><input type="submit" className="btn-submit btn" value="Suivant"/></div>
            </div>
        </div>
    </div>
    )
}

export default Signup