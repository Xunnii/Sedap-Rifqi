// components/SalesReport.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Day 1', sales: 50 },
    { name: 'Day 2', sales: 40 },
    { name: 'Day 3', sales: 35 },
    { name: 'Day 4', sales: 25 },
    { name: 'Day 5', sales: 15 },
    { name: 'Day 6', sales: 10 },
    { name: 'Day 7', sales: 20 },
    { name: 'Day 8', sales: 30 },
    { name: 'Day 9', sales: 45 },
    { name: 'Day 10', sales: 55 }
];

export default function SalesReport() {
    return (
        <div id="sales-report" className="col-span-2 bg-white rounded-xl p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Sales Report</h2>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#2563EB" radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            <div id="sales-summary" className="mt-4 grid grid-cols-3 gap-4">
                <div id="sales-total" className="bg-light p-3 rounded-xl text-center">
                    <p className="text-primary font-bold">15,280.00</p>
                    <p className="text-sm">TOTAL SALES</p>
                </div>
                <div id="sales-refund" className="bg-light p-3 rounded-xl text-center">
                    <p className="text-primary font-bold">12.00</p>
                    <p className="text-sm">TOTAL REFUNDS</p>
                </div>
                <div id="sales-income" className="bg-light p-3 rounded-xl text-center">
                    <p className="text-primary font-bold">$25,180.00</p>
                    <p className="text-sm">TOTAL INCOME</p>
                </div>
            </div>
        </div>
    );
}
