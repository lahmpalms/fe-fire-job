export const SET_ITEM = 'SET_ITEM'

export default {
  SET_ITEM: (state: any, payload: any[]) => {
    state.itemTest = payload
  }
}