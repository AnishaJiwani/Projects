import React, { useEffect, useState } from 'react'
import { Button, Col, Dropdown, Input, Row, Select, Typography } from 'antd';
import DeleteQuestion from './DeleteQuestion';
import Question from './Question';
import MaxChoice from './MaxChoice';
import Choice from './Choice';
import Check from './Check';



const {Text} = Typography;

const Questions = () => {
 const [type, setType] = useState('')
    const items= [
        {
            key:1,
            label:'Paragraph',
            value:'Paragraph'
        },
        {
            key:2,
            label:'Multi Choice',
            value:'Multi Choice'
        },
        {
            key:3,
            label:'Dropdown',
            value:'Dropdown'
        },
        {
            key:4,
            label:'Yes/No',
            value:'Yes/No'
        },
       
    ]

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setType(value);
      };

     

      useEffect(()=>{
        console.log(type)
      },[type])
      
  return (
    
   <>
 
 <Col className='info-title'   >
                  Questions
                </Col>
           <Col className='questions-align'>
            <Text strong >Type</Text>
            <Col>
            <Select
                // placeholder="Choose Question Type"
                style={{
                width: '90%',
                textAlign:'left',
                marginTop:'20px',
                placeholder:'Choose'
                    }}
                onChange={handleChange}
                options={items}
                value={type}
            />
            
            </Col>   
            {/* Paragraph */}
            {type && type === 'Paragraph' && 
            <>       
            <Question/>
              <DeleteQuestion setType={setType}/> 
            </>
            }

            {/* Multi Choice */}
            {type && type === 'Multi Choice' &&
            <>
            <Question/>
            <Choice/>
            <Check text='Enable "Other" options'/>
            <MaxChoice/>
            <DeleteQuestion setType={setType}/> 
            </>
            }   

            {/* Dropdown */}
            {type && type === 'Dropdown' &&
            <>
            <Question/>
            <Choice/>
            <Check text='Enable "Other" options'/>
            <DeleteQuestion setType={setType}/> 
           
            </>
            } 

            {/* Yes/No */}
            {type && type === 'Yes/No' &&
            <>
            <Question/>
            <Col style={{marginTop:'15px'}}>
            <Check text='Disqualify candidate if the answer is no'/>
            </Col>
            <DeleteQuestion setType={setType}/>
            </>
            } 
           </Col>
   
    </> 
  )
}

export default Questions
