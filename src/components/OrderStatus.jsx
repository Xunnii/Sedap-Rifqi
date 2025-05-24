import React, { useState } from 'react';
import orders from '../data/orderStatus.json';

export default function OrderStatus() {
    const [form, setForm] = useState({ email: '', orderId: '' });
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email || !form.orderId) return setMsg('❌ Email dan Order ID harus diisi');
        if (!/\S+@\S+\.\S+/.test(form.email)) return setMsg('❌ Email tidak valid');
        if (!/^\d+$/.test(form.orderId)) return setMsg('❌ Order ID harus angka');

        const order = orders.find(
            o => o.email === form.email && o.order_id === parseInt(form.orderId)
        );

        if (order) {
            setMsg(`✅ ${order.nama_pemesan}, status pesanan Anda: ${order.status}`);
        } else {
            setMsg('❌ Data pesanan tidak ditemukan');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold text-center mb-3">Cek Status Pesanan</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Order ID"
                    value={form.orderId}
                    onChange={e => setForm({ ...form, orderId: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
                    Cek
                </button>
            </form>
            {msg && <p className="mt-4 text-center">{msg}</p>}
        </div>
    );
}
