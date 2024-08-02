import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { AppState } from '../app.state';

export function withCommonFeature() {
  return signalStoreFeature(
    { state: type<AppState>() },
    withMethods((store) => ({
      addSection() {},
    }))
  );
}
