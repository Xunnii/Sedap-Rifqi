import { BiChat } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiHome3Line } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";


export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="w-64 min-h-screen bg-white p-4 shadow-md"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex justify-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-10">Dash<span className="text-black">Stack</span></h1>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt">
        <ul id="menu-list" className="space-y-3">
          <li>
            <div
              id="menu-1"
              className="hover:text-putih flex cursor-pointer items-center 
              rounded-xl p-4 font-medium text-gray-600 hover:bg-main 
              hover:font-extrabold"
            >
              <AiOutlineDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div
              id="menu-2"
              className="hover:text-putih flex cursor-pointer items-center 
              rounded-xl p-4 font-medium text-gray-600 hover:bg-main 
              hover:font-extrabold"
            >
              <AiOutlineUnorderedList className="mr-4 text-xl" />
              <span>Product </span>
            </div>
          </li>
          <li>
            <div
              id="menu-3"
              className="hover:text-putih flex cursor-pointer items-center 
              rounded-xl p-4 font-medium text-gray-600 hover:bg-main 
              hover:font-extrabold"
            ><MdOutlinePerson className="mr-4 text-xl" />
              <span>Customers</span>
            </div>
            <div
              id="menu-4"
              className="hover:text-putih flex cursor-pointer items-center 
              rounded-xl p-4 font-medium text-gray-600 hover:bg-main 
              hover:font-extrabold"
            >
              <BiChat className="mr-4 text-xl" />
              <span>Inbox</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
}
