/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const Products = ({PageTitle}) => {
  useEffect(() => {
    document.title = PageTitle;
  }, [PageTitle]);
  
  return(
    <>
      
    </>
  );
}

export default Products;