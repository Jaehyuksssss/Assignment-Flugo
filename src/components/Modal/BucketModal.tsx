import { Link } from 'react-router-dom';
import {
  ModalActions,
  ContinueShoppingButton,
  GoToCartButton,
  ModalOverlay,
  ModalWrapper,
  ModalContent,
  ModalTitle,
} from './BucketModal.style';
import { useRecoilState } from 'recoil';
import { bucketModal } from '../../atom/bucketAtom';

const AddedToCartModal = () => {
  const [bucketModalState, setBucketModalState] = useRecoilState(bucketModal);
  const closeBucketModal = () => {
    setBucketModalState({
      ...bucketModalState,
      isVisible: false,
    });
  };
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalContent>
          <ModalTitle>Item Added to Cart</ModalTitle>
          <p>Your item has been successfully added to the shopping cart.</p>
        </ModalContent>
        <ModalActions>
          <ContinueShoppingButton onClick={closeBucketModal}>Continue Shopping</ContinueShoppingButton>
          <Link to="/cartdetail">
            <GoToCartButton>Go to Cart</GoToCartButton>
          </Link>
        </ModalActions>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default AddedToCartModal;
