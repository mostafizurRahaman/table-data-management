import React, { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import TableRow from "../TableRow";
const Table = ({
   tableData,
   nameSort,
   citySort,
   emailSort,
   joinDateSort,
   roleSort,
   setSortKey,
   setSortOrder,
   sortOrder,
}) => {
   const tableHeader = tableData[0];

   return (
      <div className="overflow-x-auto">
         <table className=" border  border-1 border-black md:w-full  overflow-x-auto">
            <thead className="font-semibold text-sm capitalize ">
               <tr className="border border-1 border-black ">
                  {tableHeader.person && (
                     <th className=" p-2  border   border-black">
                        <div className="flex items-center justify-start gap-2">
                           Name
                           {nameSort && (
                              <TbArrowsSort
                                 onClick={() => {
                                    setSortKey("name");
                                    setSortOrder(!sortOrder);
                                 }}
                              ></TbArrowsSort>
                           )}
                        </div>
                     </th>
                  )}
                  {tableHeader.city && (
                     <th className=" p-2   border   border-black ">
                        <div className="flex items-center justify-start gap-2">
                           City
                           {citySort && (
                              <TbArrowsSort
                                 onClick={() => {
                                    setSortKey("city");
                                    setSortOrder(!sortOrder);
                                 }}
                              ></TbArrowsSort>
                           )}
                        </div>
                     </th>
                  )}
                  {tableHeader.email && (
                      <th className=" p-2   border   border-black">
                        <div className="flex items-center justify-start gap-2">
                          email Address  { emailSort && ( 
                           <TbArrowsSort
                              onClick={() => {
                                 setSortKey("email");
                                 setSortOrder(!sortOrder);
                              }}
                           ></TbArrowsSort>
                           )}
                        </div>
                     </th>
                  )}
                  {tableHeader.joiningDate && (
                      <th className=" p-2   border   border-black ">
                        <div className="flex items-center justify-start gap-2">
                           joining date
                           {joinDateSort && (
                              <TbArrowsSort
                                 onClick={() => {
                                    setSortKey("joiningDate");
                                    setSortOrder(!sortOrder);
                                 }}
                              ></TbArrowsSort>
                           )}
                        </div>
                     </th>
                  )}
                  {tableHeader.role && (
                      <th className=" p-2 ">
                        <div className='flex items-center justify-start gap-2'>
                           Role
                           {roleSort && (
                              <TbArrowsSort
                                 onClick={() => {
                                    setSortKey("role");
                                    setSortOrder(!sortOrder);
                                 }}
                              ></TbArrowsSort>
                           )}
                        </div>
                     </th>
                  )}
               </tr>
            </thead>
            <tbody>
               {tableData.map((tableRow, idx) => (
                  <TableRow key={tableRow._id} idx={idx} tableRow={tableRow}></TableRow>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
