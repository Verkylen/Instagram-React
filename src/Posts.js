import React from 'react';

export default function Posts() {
    let postProps = [
        {authorImg: '/Images/meowed 1.png', author: 'meowed', postImg: 'Images/gato-telefone 1.png', lastToLikeImg: '/Images/respondeai 1.png', lastToLike: 'respondeai', numberOfLikes: 101523},
        {authorImg: '/Images/barked 1.png', author: 'barked', postImg: 'Images/P_20191123_140701.jpg', lastToLikeImg: '/Images/adorableanimals 1.png', lastToLike: 'adorable_animals', numberOfLikes: 99159},
        {authorImg: '/Images/barked 1.png', author: 'barked', postImg: 'Images/dog 1.png', lastToLikeImg: '/Images/respondeai 1.png', lastToLike: 'respondeai', numberOfLikes: 98345}
    ];

    function Post(props) {
        let [heartFill, setHeartFill] = React.useState('heart-outline');
        let [bookmarkFill, setBookmarkFill] = React.useState('bookmark-outline');
        let [color, setColor] = React.useState('');
        let [numberOfLikesVariable, setNumberOfLikesVariable] = React.useState(props.numberOfLikes);

        function toggleFill(variable, setVariable) {
            if (variable === 'heart-outline') {
                setColor('red');
                setNumberOfLikesVariable(props.numberOfLikes + 1);
            }

            if (variable === 'heart') {
                setColor('');
                setNumberOfLikesVariable(props.numberOfLikes);
            }
    
            if (variable.includes('-')) {
                setVariable(variable.split('-')[0]);
            } else {
                setVariable(variable + '-outline');
            }
        }

        return (
            <div className="Post">
                <div className="Author">
                    <img alt="" src={props.authorImg}/>
                    <p>{props.author}</p>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <div className="Horizontal_line">
                </div>
                <img className="Post_image" onClick={() => toggleFill('heart-outline', setHeartFill)} alt="" src={props.postImg}/>
                <div className="Interactions">
                    <ion-icon onClick={() => toggleFill(heartFill, setHeartFill)} style={{color: color}} name={heartFill}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon onClick={() => toggleFill(bookmarkFill, setBookmarkFill)} name={bookmarkFill}></ion-icon>
                </div>
                <div className="Likes">
                    <img alt="" src={props.lastToLikeImg}/>
                    <p>Curtido por <strong>{props.lastToLike}</strong> e <strong>outras {numberOfLikesVariable} pessoas</strong></p>
                </div>
            </div>
        );
    }

    return (
        <>
            {postProps.map(Post)}
        </>
    );
}