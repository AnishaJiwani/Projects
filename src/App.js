import React, { useEffect, useState } from 'react';
import { Col, Row, Divider, Input, Upload, Button, Card, Checkbox, Switch, Typography } from 'antd';
import './index.css';
import {UploadOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import RowDetails from './components/RowDetails';
import Questions from './components/Questions';
// const { Meta } = Card;
const {Text} = Typography;
const App = () =>{
 const [clicked, setClicked] = useState(false) 
 const [previewOpen, setPreviewOpen] = useState(false);
 const [previewImage, setPreviewImage] = useState('');
 const [previewTitle, setPreviewTitle] = useState('');

 const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  const initialPersonalInfo = {
    fname:'',
    lname:'',
    email:'',
  };
  const initialProfile = [
    {
        id:1,
        name:'Education',
        value:'',
        checked:false,
        switch:false,
      },
      {
        id:2,
        name:'Experience',
        value:'',
        checked:true,
        switch:true
      },
      {
        id:3,
        name:'Resume',
        value:'',
        checked:false,
        switch:false
      
  }]
  const [fileList, setFileList] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo)
  const [profileFlag, setProfileFlag] = useState(initialProfile)

const handleChange = async (info) => {
    console.log("Info:", info)
    if (!info.file.url && !info.file.preview) {
        info.file.preview = await getBase64(info.file.originFileObj);
      }
    if (info.file.status === "done") {
        console.log("file uploaded successfully");
    } else if (info.file.status === "error") {
        console.log("file upload failed");
    }
    let fileList = [...info.fileList];
    fileList = fileList.slice(0);
    setFileList(fileList);
    setPreviewImage(info.file.preview)
    setPreviewOpen(true);
    setPreviewTitle(info.file.name || info.file.url.substring(info.file.url.lastIndexOf('/') + 1));
};
console.log("Filelist:", fileList)
  const handleCancel = () => setPreviewOpen(false);
const addQuestion = () =>{
    console.log("Button")
    setClicked(true);
}
useEffect(()=>{
    console.log(fileList)
 },[fileList])

 const uploadButton = (
    <Col className='upload'>
       <div >
    <UploadOutlined style={{ fontSize: '33px' }} />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload cover image
      </div>
    </div>
    <Col><Text type='secondary' style={{fontSize:'12px'}}>16:9 ratio is recommended. Max image size 1mb</Text></Col>
    </Col>
  );

  const handlePersonalInfo = () =>{
    console.log(personalInfo)
    console.log(flagState)
  }

  const initialFlagState = [
  {
    id:1,
    name:'Phone',
    value:'',
    checked:false,
    switch:false,
    inputHide:false
  },
  {
    id:2,
    name:'Nationality',
    value:'',
    checked:false,
    switch:false,
    inputHide:false
  },
  {
    id:3,
    name:'Residence',
    value:'',
    checked:false,
    switch:false,
    inputHide:false
  },
  {
    id:4,
    name:'IdNumber',
    value:0,
    checked:false,
    switch:false,
    inputHide:false
  },
  {
    id:5,
    name:'DOB',
    value:'',
    checked:false,
    switch:false,
    inputHide:false
  },
  {
    id:6,
    name:'Gender',
    value:'',
    checked:false,
    switch:false,
    inputHide:false
  }
]

  const [flagState, setFlagState] = useState(initialFlagState);

  const handleCheckbox = (name) =>{
    const newVal = flagState.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
            return {
                ...item,
            };
        }
    });
      setFlagState(newVal);
  }

  const handleCheckboxProfile = (name) =>{
    const newVal = profileFlag.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
            return {
                ...item,
            };
        }
    });
      setProfileFlag(newVal);
  }
  
    
  const handleSwitch = (name) =>{
    let newVal = flagState.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            switch: !item.switch,
          };
        } else {
          return {
            ...item,
          };
        }
      });

      setFlagState(newVal);  
      
  }

  const handleSwitchProfile = (name) =>{
    const newVal = profileFlag.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            switch: !item.switch,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      setProfileFlag(newVal);
  }
  
  const handleInput = (event, id) =>{
    const inputVal = flagState.map((item) =>{
        if (item.id === id) {
            return {
                ...item,
                value: event.target.value
            };
        } else {
            return {
                ...item
            }
        }
    })
    setFlagState(inputVal);
  }

  const handleInputProfile = (event, id) =>{
    const inputVal = profileFlag.map((item) =>{
        if (item.id === id) {
            return {
                ...item,
                value: event.target.value
            };
        } else {
            return {
                ...item
            }
        }
    })
    setProfileFlag(inputVal);
  }
 

return(
    <div >
    <Row className='container'>
        <Col span={5}>Program Details</Col><Divider type='vertical' style={{height:"40px", backgroundColor:'#C4C4C4'}}/>
        <Col span={5}>Application Form</Col><Divider type='vertical' style={{height:"40px", backgroundColor:'#C4C4C4'}}/>
        <Col span={5}>Workflow</Col><Divider type='vertical' style={{height:"40px", backgroundColor:'#C4C4C4'}}/>
        <Col span={5}>Preview </Col>
    </Row>
    <Col style={{marginTop:'50px'}}>
    <Col className='info-title' offset={3} span={8}   >
                    Upload cover image
                </Col>
            <Col className='cover-image' span={8} offset={3}>
            {/* <Col className='upload'>
            <Col><UploadOutlined style={{ fontSize: '33px' }} /></Col>
            <Col><Text strong>Upload cover image</Text></Col>
            <Col><Text type='secondary'>16:9 ratio is recommended. Max image size 1mb</Text></Col>
            </Col> */}
             <>
             {}
      <Upload
        //action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        //listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
      >
        {fileList.length === 0 &&  uploadButton}
      </Upload>
     {fileList.length >=1 && <Card
            style={{
            width: '100%',
                    }}
            cover={<img alt="example" src={previewImage} />}
  >
  </Card> }
    </>
            </Col>
    </Col>
    {/* Personal Info */}
    <Col className='info-title' span={8} offset={3}    >
                    Personal Information
                </Col>
            <Col className='personal-info-container' span={8} offset={3}>
                <Input placeholder='First Name' value={personalInfo.fname} onChange={(e) => setPersonalInfo({...personalInfo, fname:e.target.value})}></Input>
                <Divider/>
                <Input placeholder='Last Name' value={personalInfo.lname} onChange={(e) => setPersonalInfo({...personalInfo, lname:e.target.value})}></Input>
                <Divider/>
                <Input placeholder='Email' value={personalInfo.email} onChange={(e) => setPersonalInfo({...personalInfo, email:e.target.value})}  ></Input>
                <Divider/>
                {flagState.map((item)=>{
                    return(
                        <Row className='personal-info-row'>
                        <Col span={12}> 
                        <Input placeholder={item.name} id={item.id} value={item.value} disabled={item.inputHide} onChange={(e) => handleInput(e, item.id)} ></Input>
                        </Col>
                   <Col span={5} offset={2}>
                   <Checkbox checked={item.checked} name={item.name} onChange={()=>handleCheckbox(item.name)}>Internal</Checkbox>
                    </Col>
                    <Col ><Switch checked={item.switch} onChange={()=>handleSwitch(item.name)} /><Text>Hide</Text></Col> 
                      </Row>
                )
                       
                })}
                <Button onClick={()=>handlePersonalInfo()} style={{background:'green', color:'white', marginTop:'10px'}}>Save</Button>
                {/* <Row style={{padding:'10px'}}>
                <Button onClick={addQuestion} type="dashed" icon={<PlusOutlined />} style={{marginRight:'5px'}}  />
                <Col>Add a question</Col>
            </Row>     */}
            </Col>
      
       {/* Profile */}
       <Row>
    <Col span={8} offset={3}>
    <Col className='info-title'   >
                    Profile
                </Col>
            <Col className='personal-info-container' >  
            {profileFlag.map((item)=>{
                    return(
                        <Row className='personal-info-row'>
                        <Col span={12}> 
                        <Input placeholder={item.name} id={item.id} value={item.value} onChange={(e) => handleInputProfile(e, item.id)} ></Input>
                        </Col>
                   <Col span={5} offset={2}>
                   <Checkbox checked={item.checked} name={item.name} onChange={()=>handleCheckboxProfile(item.name)}>Mandatory</Checkbox>
                    </Col>
                    <Col ><Switch checked={item.switch} onChange={()=>handleSwitchProfile(item.name)} /><Text>Hide</Text></Col> 
                      </Row>
                )
                       
                })}
                <Row style={{padding:'10px'}}>
                <Button onClick={addQuestion} type="dashed" icon={<PlusOutlined />} style={{marginRight:'5px'}}  />
                <Col>Add a question</Col>
            </Row>    
            </Col>
            </Col>
          
            <Col span={8} offset={3}>
            {clicked ? <Questions/> : <></>} 
            </Col>
           
            </Row>
   
  </div>
)
}

export default App;

