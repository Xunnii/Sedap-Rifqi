export default function Card({ label, value, icon: Icon, bgColor, iconColor }) {
    return (

        <div id="count-orders" className="bg-white rounded-xl flex items-center justify-between px-6 py-4 max-w-xs w-full">
            <div>
                <p className="text-gray-500 text-sm mb-1 select-none">{label}</p>
                <p className="text-2xl font-extrabold text-gray-900 select-text font-nunito">{value}</p>
            </div>
            <div className={`p-3 rounded-lg flex items-center justify-center ${bgColor}`} style={{ width: 48, height: 48 }}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
        </div>
    );
}
