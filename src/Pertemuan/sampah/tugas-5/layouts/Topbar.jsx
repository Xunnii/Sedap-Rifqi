// components/TopBar.jsx
export default function TopBar() {
    return (
        <div id="topbar" className="flex justify-between items-center mb-6">
            <div id="topbar-left" className="flex items-center gap-2">
                <button className="bg-light p-2 rounded-lg">Menu</button>
                <input type="text" placeholder="Search here..." className="px-4 py-2 rounded-full border border-blue-300" />
            </div>
            <div id="topbar-right" className="flex items-center gap-6">
                <span>Dashboard</span>
                <span>Member</span>
                <span>Report</span>
                <span>Help</span>
                <div className="bg-primary text-white p-2 rounded-full">A</div>
            </div>
        </div>
    );
}
