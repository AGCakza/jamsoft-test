import React from 'react'

const TodoAdd = ({
    useAddItem,
    resetDone
}) => {
    const {Add, input} = useAddItem()
    return(
        <form onSubmit={Add} className='todoAdd'>
            <div className="input-field">
                <input placeholder="ToDo" id="todo" type="text" className="validate" {...input} />
                <label htmlFor="todo">Add Todo</label>
            </div>
            <div className='todoAdd__btns'>
                <input type='submit' className="waves-effect waves-light btn" value='ADD'/>
                <div onClick={resetDone} className="waves-effect waves-light btn"><i className="material-icons">refresh</i></div>
            </div>
        </form>
    )
}

export default TodoAdd