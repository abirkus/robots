import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

export const payloadFromError = (e, extra = {}) => {
  if (!(e instanceof Error)) {
    throw new Error('payloadFromError must be called with an instanceof Error')
  }
  /* all errors have an associated message: */
  const payload = {
    ...extra,
    message: e.message,
    toString: JSON.stringify(e),
  }
  /* axios errors will have response data if there
     were no fatal server errors, otherwise a response
     may not be returned: */
  if (e.response) {
    payload.responseStatus = e.response.status
    payload.responseData = e.response.data
  }
  return payload
}

/* returns an action creator object with common action variations
   for consistency. success and error states don't need to be used for every
   action and doing so is discouraged - typically only async actions need them */
export function createAction(name) {
  const type = name.toUpperCase()
  const successType = `${type}_SUCCESS`
  const errorType = `${type}_ERROR`
  return {
    type,
    successType,
    errorType,
    init: (payload, meta = {}) => ({ type, payload, ...meta }),
    success: (payload, meta = {}) => ({ type: successType, payload, ...meta }),
    error: (e, extra = {}, meta = {}) => ({
      type: errorType,
      payload: payloadFromError(e, extra),
      /* for errorReporter middleware: */
      error: e,
      ...meta,
    }),
  }
}

/* wrapper for bindActionCreators that takes an action creator obj created by one
   of the above functions and only binds the default action. this makes binding
   standard actions to the component cleaner and more consistent. meta can be used
   for common redundant info like reducerName: */
export function bindInitActionCreators(nestedCreators, dispatch, meta = {}) {
  const flatCreators = Object.entries(nestedCreators).reduce((acc, [name, creatorObj]) => ({
    ...acc,
    [name]: payload => creatorObj.init(payload, meta),
  }), {})

  return bindActionCreators(flatCreators, dispatch)
}

export const nestedActionCreatorType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  successType: PropTypes.string.isRequired,
  errorType: PropTypes.string.isRequired,
  init: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
})
