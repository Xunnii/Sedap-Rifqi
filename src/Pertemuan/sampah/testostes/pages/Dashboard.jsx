import { MdOutlineHistory } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsFillBoxFill, BsFillPersonFill } from "react-icons/bs";
// import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <PageHeader
                title="Dashboard"
                breadcrumb={[
                    { label: "Home", href: "#" },
                    { label: "Dashboard" },
                    { label: "DIMANA" }
                ]}
            />

            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Card label="Total User" value="40,689" icon={BsFillPersonFill} bgColor="bg-indigo-200" iconColor="text-indigo-600" />
                <Card label="Total Order" value="10,293" icon={BsFillBoxFill} bgColor="bg-yellow-200" iconColor="text-yellow-600" />
                <Card label="Total Sales" value="$89,000" icon={AiOutlineLineChart} bgColor="bg-green-200" iconColor="text-green-600" />
                <Card label="Total Pending" value="2,040" icon={MdOutlineHistory} bgColor="bg-red-200" iconColor="text-red-600" />
            </div>
        </div>
    );
}
