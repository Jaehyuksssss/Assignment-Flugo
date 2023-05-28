import Banner from '../../components/Banner/Banner';
import { ListTemplateLayout, HomeBannerWrapper, ItemWrapper } from './HomeTemplate.styles';
import ItemList from './components/ItemList';

export default function HomeTemplate() {
  return (
    <ListTemplateLayout>
      <HomeBannerWrapper>
        <Banner />
        <ItemWrapper>
          <ItemList />
        </ItemWrapper>
      </HomeBannerWrapper>
    </ListTemplateLayout>
  );
}
