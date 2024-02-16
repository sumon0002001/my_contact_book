import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import React from "react";
import { getContacts } from "@/lib/data";
import { FiTrash, FiEdit } from "react-icons/fi";
import Link from "next/link";

const page = async () => {
  const contacts = await getContacts();

  return (
    <main>
      <Heading
        title="My Contact Book"
        description="All contacts are given below with details"
      />
      <Navbar />
      <div className="flex flex-col px-4 py-4">
        <div>
          <table className="table-auto w-full text-center whitespace-nowrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl">
                  First Name
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Last Name
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Email
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Contact
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.firstName}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.lastName}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.email}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.phone}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3 flex items-center gap-1">
                    <Link href={`contact/${contact.id}`>
                      <FiEdit />
                    </Link>
                    <Link href={"/delete"}>
                      <FiTrash />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default page;
