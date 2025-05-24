import { BsListNested } from "react-icons/bs";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
// import { Search } from 'lucide-react';

export default function Header() {
    return (
        <div id="header-container" className="flex justify-between items-center p-4">
            {/* Search Bar */}

            <div className="relative w-1/2 flex items-center">
                <BsListNested className="mr-6 text-xl" />
                <input type="text" placeholder="Search" className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-2" />
                <FaSearch className="absolute left-13 top-2.5 text-gray-400" size={18} />
            </div>

            {/* Icons & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-4">

                {/* Profile Section */}
                <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/40" alt="admin" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-sm font-semibold">Muhammad Rifqi</p>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
