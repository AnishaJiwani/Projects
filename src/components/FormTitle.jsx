import React from 'react';
import { Col } from 'antd';
import '../index.css';

const FormTitle = ({title}) =>{
    return(
    <>
        <Col className='personal-info-title'   >
                    {title}
                </Col>
    </>
    )   
}

export default FormTitle;
