import { useState } from 'react';
import './App.css';
import Table from './component/Table/Table';
import {useQuery} from "@tanstack/react-query"; 
function App() {
  const [firstSortKey , setFirstSortkey ] = useState(''); 
  const [firstSortOrder, setFirstSortOrder] = useState(false); // true ==  ascending , false == descending 
  

   const {data:firstTableData=[], isLoading } = useQuery({
    queryKey: ['firstTableData'], 
    queryFn: async() =>{
        const res = await fetch('http://localhost:5000/firstTableData'); 
        const data = await res.json(); 
        return data; 

    }
   }); 
   
   if(isLoading){
    return <h1>Loading.....................</h1>
   }

  return (
    <div className='max-w-[960px] box-border px-5 mx-auto py-20 '>
        <Table tableData={firstTableData} sortOrder={firstSortOrder} setSortOrder={setFirstSortOrder}></Table>
    </div>
  );
}

export default App;





