import blogData from "../data/blog"

function About(props){
    const img = "https://via.placeholder.com/215"
    return (<div>
        <aside>
            <img src={props.image || img} alt="blog logo" />
            <p>{props.about}</p>
        </aside>
    </div>)
}

export default About