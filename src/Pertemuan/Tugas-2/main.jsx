import React from 'react';
import ListProductHeader from './ListProductHeader';
import ListProductSearch from './ListProductSearch';
import ListProductTable from './ListProductTable';
import ListProductFooter from './ListProductFooter';


const ListProductApotek = () => {
  return (
    <div>
      <ListProductHeader />
      <ListProductSearch />
      <ListProductTable />
      <ListProductFooter />
    </div>
  );
};

export default ListProductApotek;