import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './index.css';


export const GifExpertApp = () => {

    // const categories = ["One Punch", "Samurai X", "Dragon Ball Z"];
    const [categories, setCategories] = useState(["One Punch"]);

    // const handleAdd = () => {
    //     setCategories ([...categories, "Naruto","SuperCampeones"]);
    // }


    return (
        <div>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories= {setCategories} />
            <hr />


            <ol>

                {
                    categories.map(category => 
                        <GifGrid
                        key={category}
                        category={category} />
                    )
                }

            </ol>
        </div>
    )
}
