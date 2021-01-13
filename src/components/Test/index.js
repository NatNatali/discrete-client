import React from 'react'
import Container from "../Container";
import Breadcrumb from "../../Shared/Breadcrumb";

const Test = () => {
    const breadcrumbItems = [
        {
            name: 'Home',
            link: '/'
        }, {
            name: 'Lessons',
            link: '/lesson'
        }, {
            name: 'Test',
        }
    ]

    return <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems}/>
    </Container>
}

export default Test;