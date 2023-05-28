import { StyledItemList, StyledItem, StyledImage } from './ItemList.styles';
import useGetItemList from '../../../hooks/useGetItemList';

export default function ItemList() {
  const { isLoading, itemList } = useGetItemList();

  if (isLoading && itemList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <StyledItemList>
      {itemList.map((item) => (
        <StyledItem key={item.id}>
          <StyledImage src={item.thumbnail} alt={item.desc} />
          <p>{item.desc}</p>
          <p>Price ($): {item.price}</p>
        </StyledItem>
      ))}
    </StyledItemList>
  );
}
