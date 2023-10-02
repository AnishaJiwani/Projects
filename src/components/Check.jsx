import { Row, Checkbox, Typography} from 'antd';
const {Text} = Typography;

const Check = ({text}) => {
  return (
    <Row>
      <Checkbox><Text type='strong' style={{fontSize:'10px'}}>{text}</Text></Checkbox>      
    </Row>
  )
}

export default Check
