import React from 'react'
import Container from "../Container";
import Breadcrumb from "../../Shared/Breadcrumb";

const Test = () => {
    const breadcrumbItems = [
        {
            name: 'Գլխավոր էջ',
            link: '/'
        }, {
            name: 'Դաս',
            link: '/lesson'
        }, {
            name: 'Թեստ',
        }
    ]

    return <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems}/>
    </Container>
}

export default Test;