import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { detailModal } from '../../atom/filterAtom';
import { theme } from '../../styles';
import { DetailItemParams } from '../../utils/interfaces';

interface DetailModalProps {
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ onClose }) => {
  const [detailModalState, setDetailModalState] = useRecoilState<Partial<DetailItemParams>>(detailModal);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState({
    color: '',
    size: '',
    quantity: 0,
  });

  useEffect(() => {
    setSelectedItems({
      color: selectedColor || '',
      size: selectedSize || '',
      quantity: quantity || 0,
    });
  }, [selectedColor, selectedSize, quantity]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalContent>
          <ThumbnailImage src={detailModalState.thumbnail} alt={detailModalState.name} />
          <ModalInfo>
            <CloseBtnWrapper>
              <CloseButton onClick={onClose}>X</CloseButton>
            </CloseBtnWrapper>
            <ModalHeader>
              <ModalTitle>Name: {detailModalState.name}</ModalTitle>
              <CartQuantity>Cart {quantity}</CartQuantity>
            </ModalHeader>
            <TableDescription>
              <p>Description: {detailModalState.desc}</p>
              <Table>
                <tbody>
                  <TableRow>
                    <TableHeader>Price</TableHeader>
                    <TableData>
                      {detailModalState.currency}
                      {detailModalState.price}
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableHeader>Colors</TableHeader>
                    <TableData>
                      {detailModalState.attribute?.colors?.map((color) => (
                        <ColorButton
                          key={color}
                          onClick={() => handleColorClick(color)}
                          isSelected={selectedColor === color}
                        >
                          {color}
                        </ColorButton>
                      ))}
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableHeader>Sizes</TableHeader>
                    <TableData>
                      {detailModalState.attribute?.sizes?.map((size) => (
                        <SizeButton key={size} onClick={() => handleSizeClick(size)} isSelected={selectedSize === size}>
                          {size}
                        </SizeButton>
                      ))}
                    </TableData>
                  </TableRow>
                </tbody>
              </Table>
            </TableDescription>
            <ModalDescription>
              <ColorsContainer>
                {detailModalState.attribute?.colors?.map((color) => (
                  <ColorSpan key={color}>{color}</ColorSpan>
                ))}
              </ColorsContainer>
              <SizesContainer>
                {detailModalState.attribute?.sizes?.map((size) => (
                  <SizeSpan key={size}>{size}</SizeSpan>
                ))}
              </SizesContainer>
            </ModalDescription>
            <QuantityContainer>
              <QuantityLabel>Quantity:</QuantityLabel>
              <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
              <QuantityValue>{quantity}</QuantityValue>
              <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
            </QuantityContainer>
            <AddButtonContainer>
              <AddToButton>Add to cart</AddToButton>
            </AddButtonContainer>
          </ModalInfo>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

const ModalWrapper = styled.div`
  width: 1220px;
  height: 700px;
  background: ${theme.GREY_MEDIUM_X2};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const ThumbnailImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  margin-right: 1rem;
`;

const ModalInfo = styled.div`
  flex: 1;
  height: 100%;
  padding: 1.2rem;
  background: ${theme.GREY};
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
const CartQuantity = styled.span`
  font-size: 0.9rem;
  font-weight: 800;
  color: ${theme.GREY_DARK};
  margin-right: 0.5rem;
`;
const ModalTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
`;

const ModalDescription = styled.div`
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
  margin-bottom: 2rem;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const TableDescription = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  p {
    margin-bottom: 2rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 0.5rem;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${theme.GREY_LIGHT};
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  border: none;
  font-weight: bold;
  text-align: left;
`;

const TableData = styled.td`
  padding: 0.5rem;
  border: none;
`;

const ColorsContainer = styled.div`
  margin-bottom: 0.5rem;
`;

const ColorSpan = styled.button`
  margin-right: 0.5rem;
  background: ${theme.GREY_DARK};
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: default;
`;

const SizesContainer = styled.div``;

const SizeSpan = styled.button`
  margin-right: 0.5rem;
  cursor: default;
  background: ${theme.GREY_DARK};
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: ${theme.GREY_DARK};
`;

const ColorButton = styled.button<{ isSelected: boolean }>`
  margin-right: 0.5rem;
  background: ${(props) => (props.isSelected ? theme.GREY_DARK : theme.GREY_LIGHT)};
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

const SizeButton = styled.button<{ isSelected: boolean }>`
  margin-right: 0.5rem;
  background: ${(props) => (props.isSelected ? theme.GREY_DARK : theme.GREY_LIGHT)};
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const QuantityLabel = styled.span`
  margin-right: 0.5rem;
`;

const QuantityButton = styled.button`
  background: ${theme.GREY_DARK};
  color: #eee;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

const QuantityValue = styled.span`
  margin: 0 0.5rem;
`;
const AddToButton = styled.button`
  width: 100%;
  height: 40px;
  background: ${theme.GREY_DARK};
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background: #4c4747;
  }
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
`;
