import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";


export default function UserCards({ name, image, url, description, price }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="col-md-3 my-2 align-items-center">
            <div className=" d-flex flex-column">
                {/* <Link className='text-decoration-none' to={`/products/${val._id}`}> */}
                <Link className='text-decoration-none' to={url}>
                    <div data-aos="flip-right"  data-aos-duration="1500">
                        <Card border="primary" bg="dark" text='light'>
                            <Card.Img className="object-fit-fill" height={220} variant="top" src={image} />
                            <Card.Body >
                                <Card.Title className='text-truncate' >{name}</Card.Title>
                                <Card.Text text='primary' className='text-truncate'>Rs. {price}</Card.Text>
                                <Card.Text text='primary' className='text-truncate'>{description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Link>
            </div>
        </div>

    )
}
