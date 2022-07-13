const Form = ({text, setText, addTodo}) => {
    return (
        <div className="form">
            <input type="text" placeholder="Введите текст..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={addTodo}>Добавить</button>
     </div>
    );
};

export default Form;