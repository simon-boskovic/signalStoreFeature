import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { AppState } from '../app.state';

export function withDataFeature() {
  return signalStoreFeature(
    { state: type<AppState>() },
    withMethods((store) => ({
      addSection() {},
    }))
  );
}
