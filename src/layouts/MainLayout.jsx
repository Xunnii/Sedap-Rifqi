import { Outlet } from "react-router-dom";

import Header from "../components/Header";

import Sidebar from "../components/Sidebar";
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiHome3Line } from "react-icons/ri";
import { MdOutlineNote } from "react-icons/md";
// import { MdOutlineMedicine } from "react-icons/md";

const menus = [
  {
    label: "Dashboard",
    to: "/admin/dashboard",
    icon: RiHome3Line,
    end: true,
  },
  {
    label: "Orders",
    to: "/admin/orders",
    icon: AiOutlineUnorderedList,
  },
  {
    label: "Customers",
    to: "/admin/customers",
    icon: MdOutlinePerson,
  },
  {
    label: "Home",
    to: "/",
    icon: MdOutlinePerson,
  },
  {
    label: "Products",
    to: "/admin/products",
    icon: MdOutlinePerson,
  },
  {
    label: "Note",
    to: "/admin/note",
    icon: MdOutlineNote,
  },
];

export default function MainLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar menus={menus} /> {/* <-- Tambahkan prop menus */}
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
