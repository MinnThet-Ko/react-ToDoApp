

function TaskList(){
    let title = "Urgent tasks";
    const taskListStyle = {
        height: 300+"px",
        width: 600+"px",
        border: "1px solid black",
        borderRadius: "5%",
        boxShadow: "grey 10px 10px"
    }
    return (
        <div style={taskListStyle} className="taskListCard">
            <h1>{title}</h1>
        </div>
    );
}

export default TaskList;