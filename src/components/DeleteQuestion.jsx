import {Col,Row, Typography, Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
const {Text} = Typography;
const DeleteQuestion = ({setType}) =>{

    const setClear = () =>{
        setType('');
      }
      return(
    <Row>
    <Col style={{marginTop:'15px'}}>
        <CloseOutlined onClick={() => setClear()} style={{color:'red', marginRight:'10px'}}/>
    <Text type='danger' strong >Delete question</Text>   
    </Col>
    <Col offset={10}><Button style={{background:'green', color:'white', marginTop:'10px'}}>Save</Button> </Col>
    </Row> 
      )
    
}

export default DeleteQuestion