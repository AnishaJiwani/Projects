import React, { useEffect, useState } from 'react';
import { Checkbox, Col, Row, Switch, Typography, Input } from 'antd';
import '../index.css';

const {Text} = Typography;
const RowDetails = ({placeholder, name, checked, setCheckedBox, checkedBox}) =>{
  console.log(checked);

    return(
        <Row className='personal-info-row'>
        <Col span={12}> 
        <Input placeholder={placeholder} ></Input>
        </Col>
   <Col span={6} offset={1}>
   <Checkbox name={placeholder} >Mandatory</Checkbox>
    </Col>
    <Col ><Switch /><Text>Hide</Text></Col> 
      </Row>  
    )   
}

export default RowDetails;
