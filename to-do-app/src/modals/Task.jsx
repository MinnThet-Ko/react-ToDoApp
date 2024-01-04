function Task(props){
    const id=props.id;
    let description = props.description;
    let isDone = props.isDone;

    const handleChange = () => {
        console.log("The checkbox is toggled.")
    };

    return (
        <div>
            <input type="checkbox" value={isDone} title={description} onChange={handleChange} /> <p>{description}</p>
        </div>
    )
}

export default Task;