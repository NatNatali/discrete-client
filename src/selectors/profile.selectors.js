import { createSelector } from 'reselect';

export const ProfileState = (state) => state.profile;

export const isAdmin = createSelector(ProfileState, profile => profile.type === 'admin');
