// This is the entrypoint to vuex
// This is where we combine all our modules

import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
	modules: {
		todos
	}
});
