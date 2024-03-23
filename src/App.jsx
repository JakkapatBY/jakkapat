import moment from 'moment';
import {   useEffect, useState } from 'react';
import  axios  from 'axios';
import './App.css'
import Title from './components/Title';
import ImageProfile from './components/ImageProfile';
import Title1 from './components/Title1';

const enpoint = 'https://sheetdb.io/api/v1/rjnu11gpps65s';

const  App = () => {

  const [hide, setHide] = useState(false);
  const [data, setdata] = useState([]);

  const callAPi = async () =>{
    return axios.get(enpoint).then((response) => {
      const data = response.data
      setdata(data)
    })
  }
  console.log(data)

  useEffect( () =>{
    callAPi()
  }, [])
  
  return (
    <>
      <div className="main">
        <div className="leftPort">
          <ImageProfile images="src/assets/img.png" />

          <Title title="Jakkapat BangYai">
            <p>PECH</p>
          </Title>


          <Title title="Contract">
            <p>{moment("2002/07/30").format("DD/MM/YYYY")}</p>

            <p style={{ display: hide ? 'none' : 'block' }}>tel: 095-746-6767</p>
            <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
            <p>Email: jakkapatby2002@gmail.com</p>
          </Title>


          <Title title="eduction">
            <p>Suan Sunandha Rajabhat
UNNIVERSITY</p>

          </Title>
        </div>

      


        <div className="rightPort">

          <Title1 title="workExpreience">
           <ul>
            <li>MaxBeef : Customer service in restaurants</li>
            <li>Richmman shop : Admin answers to customers</li>
            <li>JD SPORTS : Cheering on selling products at the store</li>
            <li>MaxBeef : Customer service in restaurants</li>
           </ul>
          </Title1>
          <Title1 title="skill">
            <ul>
              <li>Ready to learn all the time</li>
              <li>Punctual</li>
              <li>Have leadership skills</li>
              <li>Pay attention to details and</li>
              <li>Able to work well with others</li>
            </ul>
          </Title1>


          <Title1 title="CAREER OBJECTIVES">
            <p>To bring knowledge, skills and experience
              that are used in working for the growth of one's own career, agency, and company</p>
          </Title1>


        </div>
      </div>

      <div className="tables">
        <h2>ข้อมูลคนในห้อง</h2>
          {data.map((record) => 
          <div key={record.code}>

               {record.code}
              {record.name}
           </div>
           )}
      </div>
    </>
  )
}


export default App