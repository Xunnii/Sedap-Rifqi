import React from 'react';

const ListProductTable = () => {
  const products = [
    { id: 1, name: 'Paracetamol', harga: 5000 },
    { id: 2, name: 'Ibuprofen', harga: 6000 },
    { id: 3, name: 'Aspirin', harga: 4000 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama Produk</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.harga}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListProductTable;