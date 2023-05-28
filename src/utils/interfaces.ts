export interface BannerProps {
  banners: {
    [key: string]: string;
    hijab: string;
    dress: string;
    bottom: string;
  };
}

export interface BannerContainerProps {
  bannerImage?: string;
}

export interface BannerProps {
  banners: {
    [key: string]: string;
    hijab: string;
    dress: string;
    bottom: string;
  };
}
type tagType = 'HOME' | 'NEW ARRIVALS' | 'CATEGORIES' | 'DEFECT SALE' | 'ALL PRODUCT' | 'HOW TO ORDER';

export interface ListParams {
  title: string;
  link: string;
}

export interface NavItemsParams {
  id: number;
  tag: tagType;
  title: string;
  path: string;
  isDropDown: boolean;
  downList?: ListParams[];
}

export interface INavMenuProps {
  data: NavItemsParams;
}

export interface INavProps {
  data?: ListParams[];
}
