import { useRecoilValue } from 'recoil';
import { userBucket } from '../../atom/bucketAtom';
import { BucketParams, BucketItemParamas } from '../../utils/interfaces';
import {
  ListTemplateLayout,
  CartContainer,
  ContentWrapper,
  CartTitle,
  UserBucket,
  UserName,
  ItemsContainer,
  ItemWrapper,
  PurchaseWrapper,
  PurchaseButton,
} from './CartTemplate.styles';

export default function CartTemplate() {
  const userBucketState = useRecoilValue<BucketParams>(userBucket);

  return (
    <ListTemplateLayout>
      <CartContainer>
        <ContentWrapper>
          <CartTitle>Shopping Cart</CartTitle>
          {Object.entries(userBucketState).map(([userName, items]) => (
            <UserBucket key={userName}>
              <UserName>{userName}'s Shopping list</UserName>
              <ItemsContainer>
                {items.map((item: Readonly<BucketItemParamas>) => (
                  <ItemWrapper key={item.name}>
                    <p>Name: {item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                  </ItemWrapper>
                ))}
              </ItemsContainer>
            </UserBucket>
          ))}
          <PurchaseWrapper>
            <PurchaseButton>구매하기</PurchaseButton>
          </PurchaseWrapper>
        </ContentWrapper>
      </CartContainer>
    </ListTemplateLayout>
  );
}
