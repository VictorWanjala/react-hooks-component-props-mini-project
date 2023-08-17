function Article(props){
    const small = "January 1, 1970";
    return(<div>
        <article>
            <h3>{props.title}</h3>
            <small>{props.date || small}</small>
            <p>{props.preview}</p>
        </article>
    </div>)
}

export default Article