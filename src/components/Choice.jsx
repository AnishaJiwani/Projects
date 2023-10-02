import {Col, Row, Input, Typography} from 'antd';
import {UnorderedListOutlined ,PlusOutlined } from '@ant-design/icons';
const {Text} = Typography;

const Choice = () => {
  return (
    <Col style={{marginTop:'15px'}}>
      <Text strong >Choice</Text>
      <Row >
        <UnorderedListOutlined />
        <Input size='large' placeholder='Type here'  style={{margin: '10px 15px', width:'75%'}}></Input>
        <PlusOutlined />
      </Row>
    </Col>
  )
}

export default Choice
