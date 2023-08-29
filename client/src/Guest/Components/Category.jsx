import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('/api/get-all-categories')
            .then(json => setCategory(json.data.category))

            .catch(err => alert(err.message))

    }, [])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="container my-5">
            <div className="text-center">
            <h2 className='text-primary'>Categories</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5" >
                {
                    category.map((val, key) => <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                }

            </div>
        </div>
    )
}