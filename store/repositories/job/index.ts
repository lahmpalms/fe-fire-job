// import actions from './actions.ts'
import mutations from "./mutations";

const state = () => ({
  itemTest: [],
});

export default {
  namespaced: true,
  state,
  mutations,
};
