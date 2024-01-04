import Task from "./Task";

function ToDoCard(){

    let taskList = [
        {
            id: Math.random(),
            description: "Pay electric bill",
            isDone: false
        },
        {
            id: Math.random(),
            description: "Go grocery shopping",
            isDone: false
        }

    ];

    let title = "Urgent tasks";
    const taskListStyle = {
        height: 300+"px",
        width: 600+"px",
        border: "1px solid black",
        borderRadius: "5%",
        
    }


    return (
        <div style={taskListStyle} className="taskListCard">
            <h1>{title}</h1>
            {
                taskList.map((task) => {
                    return <Task description={task.description} isDone={task.isDone} id={task.id} key={task.id}/>
                })
            }
        </div>
    );
}

export default ToDoCard;