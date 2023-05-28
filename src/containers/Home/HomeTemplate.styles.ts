import styled from 'styled-components';

export const ListTemplateLayout = styled.div``;
export const HomeBannerWrapper = styled.div`
  padding: 0 32px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 32px 32px;
  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;
