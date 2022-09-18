export default function Sugestoes() {
    const suggestionsProps = [
        {suggestedProfileImg: 'Images/badvibesmemes 1.png', suggestedProfileName: 'bad.vibes.memes'},
        {suggestedProfileImg: 'Images/chibirdart 1.png', suggestedProfileName: 'chibirdart'},
        {suggestedProfileImg: 'Images/razoesparaacreditar 1.png', suggestedProfileName: 'razoesparaacreditar'},
        {suggestedProfileImg: 'Images/adorableanimals 1.png', suggestedProfileName: 'adorable_animals'},
        {suggestedProfileImg: 'Images/smallcutecats 1.png', suggestedProfileName: 'smallcutecats'},
    ];

    function suggestion(props) {
        return (
            <div class="Relationship_suggested">
                <div class="Image_Username">
                    <img src={props.suggestedProfileImg}/>
                    <div class="Username_Relationship">
                        <p>{props.suggestedProfileName}</p>
                        <p>Segue você</p>
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
                {suggestionsProps.map(item => suggestion(item))}
            </div>
        </>
    );
}