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
   // state for fourh table:
   const [fourthSortKey, setFourthSortKey] = useState("");
   const [fourthSortOrder, setFourthSortOrder] = useState(false);

   // first table api call :
   const { data: firstTableData = [], isLoading } = useQuery({
      queryKey: ["firstTableData", firstSortKey, firstSortOrder],
      queryFn: async () => {
         const res = await fetch(
            `http://localhost:5000/fourthTableData?key=${fourthSortKey}&order=${fourthSortOrder}`
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
   const { data: thirdTableData, isLoading: thirdTableDataLoading } = useQuery({
      queryKey: ["thirdTableData", thirdSortKey, thirdSortOrder],
      queryFn: async () => {
         const res = await fetch(
            `http://localhost:5000/thirdTableData?key=${thirdSortKey}&order=${thirdSortOrder}`
         );
         const data = res.json();
         return data;
      },
   });

   // fourth table api call :
   const { data: fourthTableData, isLoading: fourthTableDataLoading } =
      useQuery({
         queryKey: ["fourthTableData", fourthSortOrder, fourthSortKey],
         queryFn: async () => {
            const res = await fetch(
               `http://localhost:5000/fourthTableData?key=${fourthSortKey}&order=${fourthSortOrder}`
            );
            const data = await res.json();
            return data;
         },
      });
   if (
      isLoading ||
      secondTimeLoading ||
      thirdTableDataLoading ||
      fourthTableDataLoading
   ) {
      return <h1>Loading.....................</h1>;
   }

   return (
      <div className="max-w-[960px] box-border px-5 mx-auto py-20 ">
         {/* call table component for showing  first table data */}
         <div className="w-[920px] mx-auto">
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
         </div>

         {/* Second Table is started from here:  */}
         <div className="w-[570px] overflow-x-auto">
            <Table
               tableData={secondTableData}
               sortOrder={secondSortOrder}
               setSortOrder={setSecondSortOrder}
               setSortKey={setSecondSortkey}
               nameSort
            ></Table>
         </div>

         {/* third table start from here:  */}
         <div>
            <Table
               tableData={thirdTableData}
               sortOrder={thirdSortOrder}
               setSortOrder={setThirdSortOrder}
               setSortKey={setThirdSortKey}
               joinDateSort
               roleSort
            ></Table>
         </div>

         {/* Fouth table is start from here:  */}
         <div>
            <Table
               tableData={fourthTableData}
               sortOrder={fourthSortOrder}
               setSortOrder={setFourthSortOrder}
               setSortKey={setFourthSortKey}
               citySort
               roleSort
            ></Table>
         </div>
      </div>
   );
}

export default App;
