import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import LoadingStore from '../store/LoadingStore';

export default function useLoadingStore() {
  const loadingStore = container.resolve(LoadingStore);

  return useStore(loadingStore);
}
