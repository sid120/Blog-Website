import { useState } from "react"
import { Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = ()=>{
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }

    const [formDeatils, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus ] = useState({});

    const onFormUpdate = (category,value) =>{
        setFormDetails({
            ...formDeatils,
            [category]:value
        })
    }

    const handleSubmit = () =>{
        
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className= "align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt ="Contact Us "/>
                    </Col>
                    <Col md={6}>
                    <h2> Get In Touch</h2>
                    <form>
                        <Row>
                            <Col sm={6} className= "px-1" >
                            <input type="text" value={formDeatils.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate ("firstName", e.target.value )}/>
                            </Col>
                            <Col sm={6} className= "px-1" >
                            <input type="text" value={formDeatils.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate ("lastName", e.target.value )}/>
                            </Col>
                            <Col sm={6} className= "px-1" >
                            <input type="eamil" value={formDeatils.email} placeholder="Email Address" onChange={(e)=> onFormUpdate ("email", e.target.value )}/>
                            </Col>
                            <Col sm={6} className= "px-1" >
                            <input type="tel" value={formDeatils.phone} placeholder="Phone No" onChange={(e)=> onFormUpdate ("phone", e.target.value )}/>
                            </Col>
                            <Col>
                                <textarea row="6" value={formDeatils.message} placeholder="Message" onChange={(e)=> onFormUpdate ("message ", e.target.value )}/>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success" }>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}