import React from 'react'
import ReactDOM from 'react-dom/client' 

export default function ProductList() {
  return (
    
    <div>
     <h1> hi   </h1>

        <form>
            <label> name: <input type='text' id='fname'></input> </label>
            <label> lastname <input type='text' id='lname'></input></label>
            <label> surname <input type='text' id='sname'></input></label>
        </form>

        
    
   

    </div>
  )


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ProductList/>)
}
