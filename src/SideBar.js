import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function SideBar() {
    return (
        <div class="Sidebar">
            <Usuario/>
            <Sugestoes/>

            <div>
                <p class="Links"><strong>Sobre</strong> • <strong>Ajuda</strong> • <strong>Imprensa</strong> • <strong>API</strong> • <strong>Carreiras</strong> • <strong>Privacidade</strong> • <strong>Termos</strong> • <strong>Localizações</strong> • <strong>Contas mais relevantes</strong> • <strong>Hashtags</strong> • <strong>Idioma</strong></p>
                <p class="Trademark">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}