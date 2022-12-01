import React, { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import TableRow from "../TableRow";
const Table = ({ tableData, nameSort,citySort, emailSort, joinDateSort, roleSort,  setSortKey, setSortOrder, sortOrder }) => {
  const tableHeader = tableData[0]; 
  console.log(tableHeader); 
   return (
      <div>
         <table className=" border  border-1 border-black w-full">
            <thead className="font-bold capitalize ">
            <tr  className="border border-1 border-black ">
                  {
                    tableHeader.person  && <th className="border border-1 border-black ">Name {nameSort && <TbArrowsSort onClick={()=>{setSortKey("name");  setSortOrder(!sortOrder)}}></TbArrowsSort>} </th>
                  }
                 {
                    tableHeader.city && <th className="border border-1 border-black ">City {citySort && <TbArrowsSort onClick={()=>{setSortKey("city");  setSortOrder(!sortOrder)}}></TbArrowsSort>}</th>
                 }
                 {
                    tableHeader.email && <th className="font-bold capitalize">
                    email Address : {emailSort && <TbArrowsSort onClick={()=>{setSortKey("email");  setSortOrder(!sortOrder)}}></TbArrowsSort>}
                 </th>   
                    
                 }
                 {
                    tableHeader.joiningDate &&  <th className="border border-1 border-black ">
                    joining date {joinDateSort && <TbArrowsSort onClick={()=>{setSortKey("joiningDate");  setSortOrder(!sortOrder)}}></TbArrowsSort>}
                 </th>
                 }
                 {
                    tableHeader.role &&  <th className="border border-1 border-black " onClick={()=>{setSortKey("role");  setSortOrder(!sortOrder)}} >Role {roleSort && <TbArrowsSort></TbArrowsSort>}</th>
                 }
                 
                
              </tr>
            </thead>
            <tbody>
                 {
                  tableData.map(tableRow => <tr className="font-bold  capitalize">
                  {tableRow?.person?.name && (
                     <td className="border border-1 border-black  px-2">
                        <div>
                           <img src={tableRow?.person?.avatar} alt={tableRow?.person?.name} />
                           <p>{tableRow?.person?.name}</p>
                        </div>
                     </td>
                  )}
                  {tableRow?.city && (
                     <td className="border border-1 border-black  px-2">{tableRow?.city} </td>
                  )}
                  {tableRow?.email && (
                     <td className="border border-1 border-black  px-2">{tableRow?.email} </td>
                  )}
                  {tableRow?.joiningDate && (
                     <td className="border border-1 border-black  px-2">
                        {tableRow.joiningDate}
                     </td>
                  )}
                  {tableRow?.role && (
                     <td className="border border-1 border-black  px-2">{tableRow?.role} </td>     
                  )}
               </tr>)
                 } 
            </tbody>
         </table>
      </div>
   );
};

export default Table;
