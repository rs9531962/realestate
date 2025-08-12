import React, { useState, useEffect, useRef } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../components/Home/Banner';
import Search from '../../components/common/Search';
// import Menu from '../../components/common/Menu/indexMenu2';
import Menu1 from '../../components/common/Menu/Menu1';
import Menu2 from '../../components/common/Menu/Menu2';
import Menu3 from '../../components/common/Menu/Menu3';
import Menu4 from '../../components/common/Menu/Menu4';
import Menu5 from '../../components/common/Menu/Menu5';
import Menu6 from '../../components/common/Menu/Menu6';
import { menuItemsData } from '../../components/common/Menu/data';
import axios from 'axios'

const Home = () => {

  const [vegProduct, setVegProduct] = useState([])
  const [dairyProduct, setDairyProduct] = useState([])
  const [jsonArrayRN, setJsonArrayRN] = useState([]);
  const [jsonArraySEC123, setJsonArraySEC123] = useState([]);
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // getVEG();
    // getDPB();
    sector1_2_3_estate_tbl();
    rajnagar_estate_tbl();
  }, [setVegProduct,setDairyProduct,setJsonArrayRN,setJsonArraySEC123])

  async function getVEG() {
    try {
      const res = await axios.get(window.$urlpath2 + 'getVegProduct')
      setVegProduct(res.data.data)
      console.log(res.data.data)
      console.log("vegProduct : " + JSON.stringify(vegProduct))
    } catch (error) {
      console.log("error : " + error)
      console.log('Something is Wrong')
    }
  }

  // const url = "https://rs9531962.github.io/realestate";
  const url = "https://github.com/rs9531962/realestate/tree/master/public/productData/csv";
  async function getDPB() {
    try {
      const res = await axios.get(window.$urlpath2 + 'getDairyProduct')
      setDairyProduct(res.data.data)
      console.log(res.data.data)
      console.log("dairyProduct : " + JSON.stringify(dairyProduct))
    } catch (error) {
      console.log("error : " + error)
      console.log('Something is Wrong')
    }
  }

  async function sector1_2_3_estate_tbl() {
    try {

      fetch(url+'/dwksec1_2_3_estate_tbl.csv')
      .then(response => response.text())
      .then(csvText => {
        const json = csvToJson(csvText);
        setJsonArraySEC123(json);
      })
      .catch(error => console.error('Error loading CSV:', error));
      // const res = await axios.get(window.$urlpath2 + 'getDairyProduct')
      // const res = 
      // setDairyProduct(res.data.data)
      // console.log(res.data.data)
      console.log("jsonArraySEC123 : " +jsonArraySEC123)
    } catch (error) {
      console.log("error : " + error)
      console.log('Something is Wrong')
    }
  }

  async function rajnagar_estate_tbl() {
    try {

      fetch(url+'/rajnagar_estate_tbl.csv')
      .then(response => response.text())
      .then(csvText => {
        const json = csvToJson(csvText);
        setJsonArrayRN(json);
      })
      .catch(error => console.error('Error loading CSV:', error));
      // const res = await axios.get(window.$urlpath2 + 'getDairyProduct')
      // const res = 
      // setDairyProduct(res.data.data)
      // console.log(res.data.data)
      console.log("jsonArrayRN : " +jsonArrayRN)
    } catch (error) {
      console.log("error : " + error)
      console.log('Something is Wrong')
    }
  }

  const csvToJson = (csvString) => {
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());

    const json = lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });
      return obj;
    });
    console.log("json : "+JSON.stringify(json))
    return json;
  };

  //  if(!jsonArrayRN.length>0){
  //     alert();
  //  }

  //  if(!jsonArraySEC123.length>0){
  //     alert();
  //  }
  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
       {/* <Menu1 list={menuItemsData} ref={menuRef} />
       <Menu2 list={menuItemsData} ref={menuRef} /> 
       <Menu3 list={menuItemsData} ref={menuRef} /> 
       <Menu4 list={menuItemsData} ref={menuRef} /> */}

       {/* <Menu1 list={vegProduct} ref={menuRef} /> */}
       {/* <Menu3 list={dairyProduct} ref={menuRef} />  */}
       
       <Menu5  list={jsonArrayRN} ref={menuRef} />
       <Menu6  list={jsonArraySEC123} ref={menuRef} /> 
       {/* <Menu4 list={menuItemsData} ref={menuRef} />  */}
  
      <Footer />
      {/* <ButtonCartCount /> */}
    </div>
  );
};

export default Home;
