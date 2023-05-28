import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';
import { BucketParams } from '../utils/interfaces';

const { persistAtom } = recoilPersist();

export const userBucket = atom<BucketParams>({
  key: 'userBucket',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
