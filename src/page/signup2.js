const signup2 = () => {
    return (
        <div className="singUp">
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
                <div><legend>Mot de passe</legend></div>
                <div><input type="password" className="input-in password psd" placeholder="********"/></div>
                <div><legend>Confirmer le mot de passe</legend></div>
                <div><input type="password" className="input-in password psd" placeholder="********"/></div>
                <div><legend>Nom du domaine</legend></div>
                <div><input type="text" className="domaine"/></div>
                <div><input type="checkbox" className="check"/> J'ai lu et approuvé les conditions d'utilisation </div>
                <div><input type="submit" className="btn-submit btn" value="Suivant"/></div>
            </div>
        </div>
    </div>
    )
}