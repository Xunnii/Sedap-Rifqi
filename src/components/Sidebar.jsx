import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ menus }) {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive ?
      "text-hijau bg-green-200 font-extrabold" :
      "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div className="flex flex-col">
        <span className="font-poppins-ExtraBold text-[48px]">
          Sedap <b className="text-hijau">.</b>
        </span>
        <span className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div className="mt-10">
        <ul className="space-y-3">
          {menus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to} className={menuClass} end={menu.end}>
                <menu.icon className="mr-4 text-xl" />
                <span>{menu.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
          <div className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            src="https://avatar.iran.liara.run/public/28"
            className="w-20 rounded-full"
          />
        </div>
        <span className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
