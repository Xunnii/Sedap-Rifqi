import React, { useState } from 'react';
import products from '../data/produk.json';

export default function ProductChecker() {
    const [kode, setKode] = useState('');
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');

    const checkProduct = (e) => {
        e.preventDefault();

        if (!kode) {
            setMessage('❌ Kode produk tidak boleh kosong.');
            setColor('text-red-600');
            return;
        }

        if (kode.length < 4) {
            setMessage('❌ Kode produk minimal 4 karakter.');
            setColor('text-red-600');
            return;
        }

        const found = products.find(p => p.kode_produk.toLowerCase() === kode.toLowerCase());

        if (!found) {
            setMessage('❌ Kode produk tidak ditemukan.');
            setColor('text-red-600');
        } else if (found.stok > 0) {
            setMessage(`✅ Produk ${found.nama_produk} tersedia dengan harga Rp${found.harga}. Stok tersedia: ${found.stok}`);
            setColor('text-green-600');
        } else {
            setMessage(`⚠️ Produk ${found.nama_produk} saat ini sedang habis.`);
            setColor('text-yellow-600');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Cek Ketersediaan Produk 🛒</h2>
            <form onSubmit={checkProduct}>
                <input
                    type="text"
                    placeholder="Masukkan kode produk"
                    value={kode}
                    onChange={(e) => setKode(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                    Cek Produk
                </button>
            </form>
            {message && <p className={`mt-4 font-medium ${color}`}>{message}</p>}
        </div>
    );
}
