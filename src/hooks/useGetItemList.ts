import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Item } from '../utils/interfaces';

function useGetItemList() {
  const [itemList, setItemList] = useState<Item[]>([]);

  const { isLoading } = useQuery('List', async () => {
    const response = await axios.get('/productData/product.json');
    const data = response?.data;
    setItemList(data.flugo);
    return response.data;
  });
  return { isLoading, itemList };
}

export default useGetItemList;
