import {useState} from 'react';

export default function Usuario(props) {
    let [userImg, setUserImg] = useState('Images/anonymous_user.png');
    let [username, setUsername] = useState('Usuário anônimo');

    function change(input, setInput) {
        if ( (input !== null) && (input !== '') ) {
            setInput(input);
        }
    }

    function User(props) {
        return(
            <div class="User">
                <img src={props.img} onClick={() => change(prompt('URL da imagem:'), setUserImg)} alt='URL inválido'/>
                <div class="Username">
                    <p>@{props.name.split(' ').join('_')}</p>
                    <p>{props.name} <ion-icon onClick={() => change(prompt('Nome de usário:'), setUsername)} name="pencil"></ion-icon></p>
                </div>
            </div>
        );
    }

    return <User img={userImg} name={username}/>;
}