export default function Sugestoes() {
    const suggestionsProps = [
        {suggestedProfileImg: 'Images/badvibesmemes 1.png', suggestedProfileName: 'bad.vibes.memes', followingStatus: 'Segue você'},
        {suggestedProfileImg: 'Images/chibirdart 1.png', suggestedProfileName: 'chibirdart', followingStatus: 'Segue você'},
        {suggestedProfileImg: 'Images/razoesparaacreditar 1.png', suggestedProfileName: 'razoesparaacreditar', followingStatus: 'Novo no Instagram'},
        {suggestedProfileImg: 'Images/adorableanimals 1.png', suggestedProfileName: 'adorable_animals', followingStatus: 'Segue você'},
        {suggestedProfileImg: 'Images/smallcutecats 1.png', suggestedProfileName: 'smallcutecats', followingStatus: 'Segue você'}
    ];

    function Sugestao(props) {
        return (
            <div class="Relationship_suggested">
                <div class="Image_Username">
                    <img src={props.suggestedProfileImg}/>
                    <div class="Username_Relationship">
                        <p>{props.suggestedProfileName}</p>
                        <p>{props.followingStatus}</p>
                    </div>
                </div>
                <p class="Follow">Seguir</p>
            </div>
        );
    }

    return (
        <>
            <div class="Suggestion_text">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            <div class="Suggestions">
                {suggestionsProps.map(item => Sugestao(item))}
            </div>
        </>
    );
}