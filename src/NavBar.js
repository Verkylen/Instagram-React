export default function NavBar() {
    return (
        <div class="Top_bar">
            <div class="Top_bar_elements">
                <div class="Logo_Brand">
                    <div>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="Vertical_bar Ocult_element"></div>
                    </div>
                    <img src="/Images/logo.png" class="Ocult_element"/>
                </div>
                
                <input type="text" placeholder="Pesquisar" class="Ocult_element"/>
                
                <img class="Brand_Mobile" src="Images/logo.png"/>

                <div class="Top_bar_icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline" class="Ocult_element"></ion-icon>
                    <ion-icon name="heart-outline" class="Ocult_element"></ion-icon>
                    <ion-icon name="person-outline" class="Ocult_element"></ion-icon>
                </div>
            </div>
        </div>
    );
}