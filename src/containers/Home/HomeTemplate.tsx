import Banner from '../../components/Banner/Banner';
import { ListTemplateLayout, HomeBannerWrapper } from './HomeTemplate.styles';

export default function HomeTemplate() {
  return (
    <ListTemplateLayout>
      <HomeBannerWrapper>
        <Banner />
      </HomeBannerWrapper>
    </ListTemplateLayout>
  );
}
