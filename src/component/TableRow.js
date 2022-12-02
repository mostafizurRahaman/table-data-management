import React from "react";

const TableRow = ({tableRow, idx}) => {
   const { person, city, email, joiningDate, role } = tableRow;
   const newDate = new Date(joiningDate); 

   const date = newDate.toLocaleDateString(); 
   return (
      <tr className={`font-normal text-sm  capitalize ${idx%2 === 0  ? ' bg-gray-200' : 'bg-white'}`}>
         {person && (
            <td className="p-2  border  border-black  px-2 ">
               <div className="flex items-center justify-start gap-2">
                  <img src={person?.avatar} className="w-25 h-25 rounded-full " alt={person?.name} />
                  <p>{person?.name}</p>
               </div>
            </td>
         )}
         {city && (
            <td className="p-2  border  border-black  px-2">{city} </td>
         )}
         {email && (
            <td className="p-2  border  border-black  px-2">{email} </td>
         )}
         {joiningDate && (
            <td className="p-2  border  border-black  px-2">
               {date}
            </td>
         )}
         {role && (
            <td className="p-2  border  border-black  px-2">{role} </td>
         )}
      </tr>
   );
};

export default TableRow;
