import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        // Hace que los espacios en blanco o inputs de 1 caracter no accionen nada
        if( inputValue.trim().length <= 1) return;

        // categories viaja atraves de las props junto con setCategories
        onNewCategory( inputValue.trim() )
        setInputValue('')
        
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
