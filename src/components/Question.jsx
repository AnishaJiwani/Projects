import {Col, Typography, Input} from 'antd'
const {Text} = Typography
const Question = () =>{
return(
    <Col style={{marginTop:'15px'}}>
            <Text strong >Question</Text>
            <Col>        
            <Input size='large' placeholder='Type here'  style={{marginTop:'10px', width:'90%'}}></Input>
            </Col> 
            </Col>
)
}

export default Question