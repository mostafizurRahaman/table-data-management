import { useState } from "react";
import "./App.css";
import Table from "./component/Table/Table";
import { useQuery } from "@tanstack/react-query";
function App() {
   //  state for first table :
   const [firstSortKey, setFirstSortkey] = useState("");
   const [firstSortOrder, setFirstSortOrder] = useState(false);
   // true ==  ascending , false == descending
   // state for second table:
   const [secondSortkey, setSecondSortkey] = useState("");
   const [secondSortOrder, setSecondSortOrder] = useState(false);
   console.log(secondSortOrder, secondSortkey);
   // state for third table :
   const [thirdSortKey, setThirdSortKey] = useState("");
   const [thirdSortOrder, setThirdSortOrder] = useState(false);

  // first table api call : 
   const { data: firstTableData = [], isLoading } = useQuery({
      queryKey: ["firstTableData", firstSortKey, firstSortOrder],
      queryFn: async () => {
         const res = await fetch(
            `http://localhost:5000/firstTableData?key=${firstSortKey}&order=${firstSortOrder}`
         );
         const data = await res.json();
         return data;
      },
   });

   //second table api call : 
   const { data: secondTableData = [], isLoading: secondTimeLoading } =
      useQuery({
         queryKey: ["secondTableData", secondSortkey, secondSortOrder],
         queryFn: async () => {
            const res = await fetch(
               `http://localhost:5000/secondTableData?key=${secondSortkey}&order=${secondSortOrder}`
            );
            const data = await res.json();
            return data;
         },
      });

  //third table api call :
const {data:thirdTableData, isLoading:thirdTableDataLoading} = useQuery({
  queryKey: ['thirdTableData', thirdSortKey, thirdSortOrder], 
  queryFn: async()=> {
    const res = await fetch(`http://localhost:5000/thirdTableData?key=${thirdSortKey}&order=${thirdSortOrder}`); 
    const data = res.json(); 
    return data; 
  }

})
   if (isLoading || secondTimeLoading || thirdTableDataLoading) {
      return <h1>Loading.....................</h1>;
   }

   return (
      <div className="max-w-[960px] box-border px-5 mx-auto py-20  flex items-start gap-12 flex-col">
         {/* call table component for showing  first table data */}
         <Table
            tableData={firstTableData}
            sortOrder={firstSortOrder}
            setSortOrder={setFirstSortOrder}
            setSortKey={setFirstSortkey}
            nameSort
            roleSort
            joinDateSort
            emailSort
            citySort
         ></Table>

         {/* Second Table is started from here:  */}
         <Table
            tableData={secondTableData}
            sortOrder={secondSortOrder}
            setSortOrder={setSecondSortOrder}
            setSortKey={setSecondSortkey}
            nameSort
         ></Table>

         {/* third table start from here:  */}
         <Table
            tableData={thirdTableData}
            sortOrder={thirdSortOrder}
            setSortOrder={setThirdSortOrder}
            setSortKey={setThirdSortKey}
            joinDateSort
             roleSort
         ></Table>
      </div>
   );
}

export default App;
