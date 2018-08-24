import * as types from './actionTypes';

// AJAX status call actions

/**
 * Creates an action to indicate an async calls has began.
 */
export function beginAjaxCall() {
  return { type: types.BEGIN_AJAX_CALL };
}

/**
 * Creates an action to indicate an async calls has ended in error.
 */
export function ajaxCallError() {
  return { type: types.AJAX_CALL_ERROR };
}
