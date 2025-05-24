// components/Sidebar.jsx
import { FaHome, FaProjectDiagram, FaUsers, FaEnvelope, FaHeadset, FaClock, FaPhone } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div id="sidebar" className="w-64 bg-primary text-white p-5 flex flex-col justify-between rounded-r-3xl">
      <div id="sidebar-menu">
        <h1 className="text-2xl font-bold mb-8">Logo</h1>
        <ul className="space-y-4">
          <li className="bg-secondary p-2 rounded flex items-center gap-2"><FaHome /> Dashboard</li>
          <li className="flex items-center gap-2"><FaProjectDiagram /> Our Projects</li>
          <li className="flex items-center gap-2"><FaUsers /> Members</li>
          <li className="flex items-center gap-2"><FaEnvelope /> E-mails</li>
          <li className="flex items-center gap-2"><FaHeadset /> Chat Support</li>
          <li className="flex items-center gap-2"><FaClock /> Time Table</li>
          <li className="flex items-center gap-2"><FaPhone /> Contacts</li>
        </ul>
      </div>
      <div id="sidebar-status" className="text-sm bg-secondary p-3 rounded-xl mt-6">
        <p>Used Space:</p>
        <p className="text-xs">Admin Updated @ 9:00 AM<br />MAY, 13, 2022</p>
        <div className="mt-2 w-full bg-blue-600 h-2 rounded-full">
          <div className="w-4/5 h-full bg-white rounded-full"></div>
        </div>
        <p className="text-right text-xs mt-1">13.5GB / 15GB</p>
      </div>
    </div>
  );
}
