import React from 'react';

export default function Posts() {
    const postProps = [
        {authorImg: '/Images/meowed 1.png', author: 'meowed', postImg: 'Images/gato-telefone 1.png', lastToLikeImg: '/Images/respondeai 1.png', lastToLike: 'respondeai', numberOfLikes: 101523},
        {authorImg: '/Images/barked 1.png', author: 'barked', postImg: 'Images/P_20191123_140701.jpg', lastToLikeImg: '/Images/adorableanimals 1.png', lastToLike: 'adorable_animals', numberOfLikes: 99159},
        {authorImg: '/Images/meowed 1.png', author: 'meowed', postImg: 'Images/gato-telefone 1.png', lastToLikeImg: '/Images/respondeai 1.png', lastToLike: 'respondeai', numberOfLikes: 101523}
    ];

    function addColor(element) {
        element.nextElementSibling.firstElementChild.style.color = 'red';
        element.nextElementSibling.firstElementChild.name = 'heart';
    }

    function toggleFill(element) {
        if (element.name === 'heart-outline') {
            element.style.color = 'red';
        } else {
            element.style.color = '';
        }

        if (element.name === element.name.split('-')[0]) {
            element.name += '-outline';
        } else {
            element.name = element.name.split('-')[0];
        }
    }

    function post(props) {
        return (
            <div class="Post">
                <div class="Author">
                    <img src={props.authorImg}/>
                    <p>{props.author}</p>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <div class="Horizontal_line">
                </div>
                <img class="Post_image" onClick={(e) => addColor(e.target)} src={props.postImg}/>
                <div class="Interactions">
                    <ion-icon onClick={(e) => toggleFill(e.target)} name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon onClick={(e) => toggleFill(e.target)} name='bookmark-outline'></ion-icon>
                </div>
                <div class="Likes">
                    <img src={props.lastToLikeImg}/>
                    <p>Curtido por <strong>{props.lastToLike}</strong> e <strong>outras {props.numberOfLikes} pessoas</strong></p>
                </div>
            </div>
        );
    }

    return (
        <>
            {postProps.map(item => post(item))}
        </>
    );
}