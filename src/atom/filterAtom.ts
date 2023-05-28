import { atom } from 'recoil';
import { FilterModalParams, DetailItemParams } from '../utils/interfaces';

export const filterTitle = atom<string[]>({
  key: 'filterTagState',
  default: [],
});

export const filterModal = atom<FilterModalParams>({
  key: 'filterModalHandler',
  default: {
    isVisible: false,
    filterKeys: ['cost', 'size', 'popular'],
  },
});

export const detailModal = atom<Partial<DetailItemParams>>({
  key: 'detailModalHandler',
  default: {
    isVisible: false,
  },
});
