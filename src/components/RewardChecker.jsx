import React, { useState } from 'react';
import rewardData from '../data/rewardData.json';

export default function RewardChecker() {
    const [no_hp, setno_hp] = useState('');
    const [pesan, setPesan] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!no_hp) return setPesan(' Nomor HP tidak boleh kosong');
        if (no_hp.length < 10)
            return setPesan('Nomor HP harus 10 digit');

        const customer = rewardData.find(c => c.nomor_hp === no_hp);

        if (customer) {
            setPesan(` ${customer.nama}, Anda punya ${customer.poin} poin.\nStatus: ${customer.status_member}`);
        } else {
            setPesan(' Nomor HP tidak ditemukan di sistem.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold text-center mb-4">Cek Poin Reward</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    placeholder="Masukkan Nomor HP"
                    value={no_hp}
                    onChange={e => setno_hp(e.target.value)}
                    className="w-full border p-2 rounded"
                />
                <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
                    Cek
                </button>
            </form>
            {pesan && <p className="mt-4 text-center text-red-500 whitespace-pre-line">{pesan}</p>}
        </div>
    );
}
