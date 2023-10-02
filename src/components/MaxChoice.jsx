import {Col, Typography, Input} from 'antd';
const {Text} = Typography;

const MaxChoice = () =>{
return(
    <Col style={{marginTop:'15px'}}>
        <Text strong >Max Choice allowed</Text>
        <Col>        
        <Input size='large' placeholder='Enter number of choice allowed here'  style={{marginTop:'10px', width:'90%'}}></Input>
        </Col> 
    </Col>
)
}

export default MaxChoice