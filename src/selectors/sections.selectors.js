import { createSelector } from 'reselect';
import createErrorSelector from './create.error.selector';
import { createSectionAction } from '../actions/sections.actions';

export const chaptersState = (state) => state.sections;

export const sectionsSelector = createSelector(chaptersState, sections => sections.sections);
export const createSectionError = createErrorSelector(createSectionAction.actionName);
