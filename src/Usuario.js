import {useState} from 'react';

export default function Usuario() {
    let [username, setUsername] = useState('Usuário anônimo');
    let [userImg, setUserImg] = useState('Images/anonymous_user.png');

    return (
        <div class="User">
            <img src={userImg} onClick={() => setUserImg(prompt('Link da imagem:'))} alt='Imagem inválida'/>
            <div class="Username">
                <p>@{username.split(' ').join('_')}</p>
                <p>{username} <ion-icon onClick={() => setUsername(prompt('Nome de usuário:'))} name="pencil"></ion-icon></p>
            </div>
        </div>
    );
}