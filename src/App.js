import { useState } from 'react';
import './App.css';
import Table from './component/Table/Table';
import {useQuery} from "@tanstack/react-query"; 
function App() {
  const [firstSortKey , setFirstSortkey ] = useState(''); 
  const [firstSortOrder, setFirstSortOrder] = useState(false); // true ==  ascending , false == descending 
  
  console.log(firstSortKey, firstSortOrder);

   const {data:firstTableData=[], isLoading } = useQuery({
    queryKey: ['firstTableData', firstSortKey, firstSortOrder], 
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/firstTableData?key=${firstSortKey}&order=${firstSortOrder}`); 
        const data = await res.json(); 
        return data; 

    }
   }); 
   
   if(isLoading){
    return <h1>Loading.....................</h1>
   }

  return (
    <div className='max-w-[960px] box-border px-5 mx-auto py-20 '>
      {/* call table component for showing  first table data */}
        <Table tableData={firstTableData} sortOrder={firstSortOrder} setSortOrder={setFirstSortOrder} setSortKey={setFirstSortkey}  nameSort  roleSort joinDateSort emailSort  citySort></Table>
    </div>
  );
}

export default App;





