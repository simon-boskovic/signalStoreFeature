import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { DeepSignal, signalStore, withState } from '@ngrx/signals';
import {
  withBlockFeature,
  withColumnFeature,
  withCommonFeature,
  withDataFeature,
  withSectionFeature,
} from './store-feature';

export type TColumnIDs = string[];
export type TBlockIDs = string[];
export type TMarginPadding = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

export interface AppState {
  data: {};
}

export const initialState: AppState = {
  data: {},
};

export type TAppStore = InstanceType<typeof AppStore>;

export type SignalState<State extends object> = DeepSignal<State>;

export const AppStore = signalStore(
  { providedIn: 'root', protectedState: false },
  withState(initialState),
  withDevtools('layout-editor'),
  withCommonFeature(),
  withSectionFeature(),
  withColumnFeature(),
  withDataFeature(),
  withBlockFeature()
);
