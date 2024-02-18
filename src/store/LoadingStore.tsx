import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';

@singleton()
@Store()
class LoadingStore {
  loading:boolean = true;

  @Action()
  changeLoading(status: boolean) {
    this.loading = status;
  }
}

export default LoadingStore;
