// import React, { useState } from 'react';
// import members from '../data/member.json';

// export default function MemberCek() {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [color, setColor] = useState('');

//     const checkMember = (e) => {
//         e.preventDefault();

//         if (!email) {
//             setMessage('❌ Email tidak boleh kosong.');
//             setColor('text-red-600');
//             return;
//         }

//         const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//         if (!valid) {
//             setMessage('❌ Format email tidak valid.');
//             setColor('text-red-600');
//             return;
//         }

//         const member = members.find(m => m.email === email);

//         if (member) {
//             let icon = '🧾';
//             if (member.tipe_member === 'gold') icon = '🥇';
//             if (member.tipe_member === 'platinum') icon = '💎';

//             setMessage(`${icon} Selamat datang, ${member.nama}! Anda adalah member ${member.tipe_member}.`);
//             setColor('text-green-700');
//         } else {
//             setMessage('❌ Email tidak terdaftar sebagai member.');
//             setColor('text-red-600');
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
//             <h2 className="text-xl font-bold mb-4">Cek Keanggotaan</h2>
//             <form onSubmit={checkMember}>
//                 <input
//                     type="email"
//                     placeholder="Masukkan email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full p-2 border rounded mb-2"
//                 />
//                 <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">
//                     Cek Member
//                 </button>
//             </form>
//             {message && <p className={`mt-4 font-medium ${color}`}>{message}</p>}
//         </div>
//     );
// }
