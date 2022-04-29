import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GrifGridItem } from './GrifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
   const {data:images, loading} = useFetchGifs(category);

  

    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages); 
    // }, [category]);

   


    return (
        <div> 
            <h3 className='animate__animated animate__fadeInDown'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>loading</p>}

            {/* {loading ? "Cargando..." : "Data cargada"}; */}

        <div className="card-grid">

            
                <li>
                    {
                        images.map( img => (
                            <GrifGridItem 
                            key={img.id}
                            {...img}
                            />
                        ))
                    }
                    
                </li>
            

        </div>
        </div>
    )
}
