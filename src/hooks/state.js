import React from 'react'

const useState = () => {
    const [state, setState] = React.useState([])
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('state'))
        if(data) {
            const unEdit = data.map(el => ({...el, isEditing: false}))
            setState(unEdit)
        }
    }, [])
    React.useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
        const x = state.reduce((acc, item, index) => item.done ? acc + 1 : acc, 0)
        setProgress(Math.round((x/state.length) * 100))
    }, [state])

    const handleChange = e => {
        setState(prev => (prev.map(obj => obj.id === Number(e.target.name) ? {...obj, done: !obj.done} : obj)))
    }

    const deleteItem = e => {
        const arr = [...state]
        const index = arr.findIndex(el => el.id === Number(e.target.id) ? true : false)
        arr.splice(index, 1)
        setState(arr)
    }

    const resetDone = () => setState(prev => prev.map(el => ({...el, done: false})))

    const useAddItem = e => {
        const [value, setValue] = React.useState('')

        const Add = e => {
            e.preventDefault()
            if(value !== ''){
                setState(prev => ([...prev, {id: Date.now(), text: value, done: false, isEditing: false}]))
                setValue('')
            }
        }
        const onChange = e => setValue(e.target.value)
        return {
            input: {
                value,
                onChange
            },
            Add
        }
    }

    const useEditItem = () => {

        const Edit = e => setState(prev => (prev.map(obj => obj.id === Number(e.target.id) ? {...obj, isEditing: !obj.isEditing} : obj)))

        const onChange = e => setState(prev => (prev.map(obj => obj.id === Number(e.target.id) ? {...obj, text: e.target.value} : obj)))

        return {
            onChange,
            Edit
        }
    }

    const changeOrder = (result) => {
        const {destination, source} = result
        console.log(result)
        console.log(state)
        const newState = [...state]
        newState.splice(source.index, 1)
        newState.splice(destination.index, 0, state[source.index])
        setState(prev => newState)

    }

    return {
        progress,
        state,
        handleChange,
        deleteItem,
        useAddItem,
        useEditItem,
        changeOrder,
        resetDone
    }

}

export default useState