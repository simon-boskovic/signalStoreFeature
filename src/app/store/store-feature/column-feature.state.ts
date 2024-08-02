import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { AppState } from '../app.state';

export function withColumnFeature() {
  return signalStoreFeature(
    { state: type<AppState>() },
    withMethods((store) => ({
      addSection() {},
    }))
  );
}
