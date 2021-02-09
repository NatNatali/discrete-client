import { createSelector } from 'reselect';
import createErrorSelector from './create.error.selector';
import { createChapterAction } from '../actions/chapters.actions';

export const chaptersState = (state) => state.chapters;

export const chaptersSelector = createSelector(chaptersState, chapters => chapters.chapters);
export const createChapterError = createErrorSelector(createChapterAction.actionName);
