const TaskItem = ({ itemObject }) => {
    return (
        <>
            <li id={itemObject.id} >{itemObject.task}</li>
        </>
    )
}
export default TaskItem