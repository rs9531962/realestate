import React,{ useState } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {

  const saveProduct = (a) => {
    alert(a);
  }

  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch()
  const saveProduct2 = () => {
    // Your save logic here (e.g., API call)
    if(isSaved===true){
      setIsSaved(false);
    }else{
      // localStorage.setItem(isSaved, true);
      setIsSaved(true);
    }
    
    
    // Optional: revert back after a delay
    // setTimeout(() => setIsSaved(false), 3000);

  }

  return (
    // <div className='btnAddRemove'>
    //   {quantity !== 0 ? (
    //     <div className='btnAddRemove-positive'>
    //       <i
    //         class='fa fa-minus' aria-hidden='true' onClick={handleRemoveItem}
    //       ></i>
    //       <span> {quantity}</span>
    //       <i class='fa fa-plus' aria-hidden='true' onClick={handleAddItem}></i>
    //     </div>
    //   ) : (
    //     <div onClick={handleAddItem} className='btnAddRemove-negative'>
    //       <span>ADD</span>
    //       <i class='fa fa-plus' aria-hidden='true'></i>
    //     </div>
    //   )}
    // </div>

    <div className='btnAddRemove'>
      
        <div >
          <span 
          style={{
            backgroundColor: isSaved ? 'Red' : 'black',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={saveProduct2}>{isSaved ? 'Saved' : 'Save'}</span>
          {/* <i class='fa fa-plus' aria-hidden='true'></i> */}
        </div>
      
    </div>
  );
};

export default ButtonAddRemoveItem;
