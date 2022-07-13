const Todos = ({todos, checkTodo, deleteTodo}) => {
    return (
        <div className="todos">
           
     {todos.map((el, index) => {

return (
  <div className={`todo ${el.completed && 'selected'}`}>
            <div className="favorite">
                <button onClick={() => {
                  checkTodo(index)
                }}>★</button>
            </div>
            <div className="todo-text">
                {el.text}
            </div>
            <div className="actions">
                <button onClick={() => {
                  deleteTodo(index)
                }}>✖</button>
            </div>
        </div>
)
})}
        </div>
    );
};

export default Todos;