import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import AOS from "aos";
import "aos/dist/aos.css";


export default function GuestCards({ name, image }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <div className="col-md-3 my-2 align-items-center">
            <div className=" d-flex flex-column" data-aos="flip-right"  data-aos-duration="1500">
                {/* <Link className='text-decoration-none' to='/login'> */}
                <Card  border="primary"  bg="dark" text='light'>
                    <Card.Img className="object-fit-fill" height={220} variant="top" src={image} />
                    <Card.Body >
                        <Card.Title >{name}</Card.Title>
                    </Card.Body>
                </Card>
                {/* </Link> */}
            </div>
        </div>

    )
}
