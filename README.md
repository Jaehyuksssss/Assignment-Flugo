# e-commerce site 만들기

- 원본 사이트 : [gonegani](https://gonegani.id/home)
- 개발 인원 : 1인 (임재혁)
- 빈페이지는 : '상품이 준비중입니다.' 로 처리 하였습니다.

> 구현 사항

      - Home(product list page)
      - Product Detail Page
      - Shopping List

> 사용 스택

      - React
      - React-Query
      - Recoil
      - Styled-components

## 실행 방법

```
      npm install
      npm start
```

## 구현사항

### HOME(상품 LIST 및 필터기능)

- 상품 리스트를 렌더링하고 각각 카테고리에 맞게 필터기능 구현

### PRODUCT DETAIL MODAL

- 가격, 색상, 사이즈 등을 선택하여 장바구니에 추가하는 모달입니다.

- 모달 창 내에서 상품의 다양한 옵션을 시각적으로 표시하고 페이지를 이동하지 않고 모달내에서 빠르게 옵션을 선택 할 수 있다고 판단을 하였습니다.

- 옵션들을 모두 체크 후에 Add to cart 버튼이 활성화 되고 장바구니에 담기면 cart페이지로 이동할 수 있는 모달이 나옵니다.

### SHOPPING LIST (장바구니)

- 장바구니에 담긴 항목들을 보고 삭제 할 수 있는 페이지

## 구조 및 내용 설명

      ├── public
            ├── images
            ├── productData
                ├── banner.json
                ├── product.json

         ├── src
            ├── atoms (for recoil)
            ├── componetns
            ├── containers
            ├── hooks
            ├── pages
            ├── styles
            ├── utils
            ├── banner.json
            ├── product.json

- public 폴더에서 json 형태로 서버 response를 받는것을 가정하여 mock데이터로 관리하였습니다.

- useGetItemList, useGetBanners등을 react query와 axios를 사용하여 데이터를 패칭하는 로직을 hooks로 관리 하였습니다.

- 크기가 작은 components를 containers에서 조합하여 사용하였습니다.
