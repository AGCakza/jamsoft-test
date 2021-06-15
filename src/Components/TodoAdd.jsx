import React from 'react'

const TodoAdd = ({
    useAddItem,
    resetDone,
    progress
}) => {
    const {Add, input} = useAddItem()
    return(
        <div className='todoAdd-wrapper'>
            <form onSubmit={Add} className='todoAdd'>
                <div className="input-field">
                    <input maxlength='90' placeholder="ToDo" id="todo" type="text" className="validate" {...input} />
                    <label htmlFor="todo">Add Todo</label>
                </div>
                <div className='todoAdd__btns'>
                    <button type='submit' className="waves-effect waves-light btn" disabled={input.value === '' ? true : false}>ADD</button>
                    <button onClick={e => {e.preventDefault(); resetDone()}} className="waves-effect waves-light btn" disabled={progress === 0 ? true : false} ><i className="material-icons">refresh</i></button>
                </div>
            </form>
            <p>{`${input.value.length}/90`}</p>
        </div>
    )
}

export default TodoAdd