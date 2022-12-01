import React from "react";

const TableRow = ({tableRow}) => {
   const { person, city, email, joiningDate, role } = tableRow;
   return (
      <tr className="font-normal   capitalize">
         {person && (
            <td className="p-2  border  border-black  px-2">
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
               {joiningDate}
            </td>
         )}
         {role && (
            <td className="p-2  border  border-black  px-2">{role} </td>
         )}
      </tr>
   );
};

export default TableRow;
