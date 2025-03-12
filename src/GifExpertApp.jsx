import React, { useState } from 'react'
import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cars', 'Minecraft'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* Al enviar setCategories, tambien se esta enviando categories */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />
                {categories.map(category =>
                (
                    <GifGrid 
                        key={ category } 
                        category={ category }/>
                )
                )}
        </>
    )
}