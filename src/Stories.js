export default function Stories() {
    const storyProps = [
        {storyAuthor: '9gag', authorImg: '/Images/9gag 1.png'},
        {storyAuthor: 'meowed', authorImg: '/Images/meowed 1.png'},
        {storyAuthor: 'barked', authorImg: '/Images/barked 1.png'},
        {storyAuthor: 'nathanwpyle...', authorImg: '/Images/nathanwpylestrangeplanet 1.png'},
        {storyAuthor: 'wawawiwac', authorImg: '/Images/wawawiwacomicsa 1.png'},
        {storyAuthor: 'respondeai', authorImg: '/Images/respondeai 1.png'},
        {storyAuthor: 'filomoderna', authorImg: '/Images/filomoderna 1.png'},
        {storyAuthor: 'memeriago.', authorImg: '/Images/memeriagourmet 1.png'}
    ];

    function Story(props) {
        return (
            <div>
                <img class="Stories_background" src="/Images/stories_background.png"/>
                <p>{props.storyAuthor}</p>
                <img class="Stories_Picture" src={props.authorImg}/>
            </div>
        );
    }

    return (
        <div class="Stories_box">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            <div class="Stories">
                {storyProps.map(Story)}
            </div>
        </div>
    );
}