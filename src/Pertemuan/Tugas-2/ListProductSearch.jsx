import React, { useState } from 'react';

const ListProductSearch = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Cari produk..."
      />
      <button>Cari</button>
    </div>
  );
};

export default ListProductSearch;