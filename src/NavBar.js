export default function NavBar() {
    return (
        <div className="Top_bar">
            <div className="Top_bar_elements">
                <div className="Logo_Brand">
                    <div>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div className="Vertical_bar Ocult_element"></div>
                    </div>
                    <img alt="" src="/Images/logo.png" className="Ocult_element"/>
                </div>
                
                <input type="text" placeholder="Pesquisar" className="Ocult_element"/>
                
                <img className="Brand_Mobile" alt="" src="Images/logo.png"/>

                <div className="Top_bar_icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline" className="Ocult_element"></ion-icon>
                    <ion-icon name="heart-outline" className="Ocult_element"></ion-icon>
                    <ion-icon name="person-outline" className="Ocult_element"></ion-icon>
                </div>
            </div>
        </div>
    );
}