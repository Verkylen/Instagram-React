import {useState} from 'react';

export default function Usuario(props) {
    let [username, setUsername] = useState('Usuário anônimo');
    let [userImg, setUserImg] = useState('Images/anonymous_user.png');

    function change(input, setFunction) {
        if ( (input !== null) && (input !== '') ) {
            setFunction(input);
        }
    }

    function User(props) {
        return(
            <div class="User">
                <img src={props.img} onClick={() => {const imgInput = prompt('URL da imagem:'); change(imgInput, setUserImg)}} alt='URL inválido'/>
                <div class="Username">
                    <p>@{props.name.split(' ').join('_')}</p>
                    <p>{props.name} <ion-icon onClick={() => {const nameInput = prompt('Nome de usário:'); change(nameInput, setUsername)}} name="pencil"></ion-icon></p>
                </div>
            </div>
        );
    }

    return <User img={userImg} name={username}/>;
}