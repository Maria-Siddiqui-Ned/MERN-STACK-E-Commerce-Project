import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

export default function BrandsPage() {
    
    const [brands, setbrands] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-brands')
            .then(json => setbrands(json.data.brand))
            .catch(err => alert(err.message))
    }, [])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 data-aos="zoom-in-up" data-aos-duration="3500">Top Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    brands.map((val, key) =>

                        <div className="col-md-2 my-3" key={key} data-aos="zoom-in-left"  data-aos-duration="2500">
                            {/* <Link className='text-decoration-none' to='/brands/:BrandName'>                            <Link className='text-decoration-none' to='/brands/:BrandName'> */}
                            <Link className='text-decoration-none' to={`/brands/${val.BrandName}`}>
                            <Card  border="primary" bg="warning" >
                                <Card.Img className="object-fit-" height={150} variant="top" src={val.BrandImage} />
                                <Card.Body >
                                    {/* <Card.Title >{val.title} - {val.price}$</Card.Title> */}
                                    <Card.Title className='text-truncate' >{val.BrandName}</Card.Title>
                                    <Card.Text  className='text-truncate'>{val.BrandCategory}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

