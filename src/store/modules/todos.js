// This is where we put our state, actions, getters, mutations, etc

import axios from "axios";

const state = {
	todos: []
};

const getters = {
	allTodos: state => state.todos
};

const actions = {
	async fetchTodos() {
		//{commit}
		const response = await axios.get(
			"https://my-json-server.typicode.com/eclayaz/demo/todos"
		);

		console.log(response.data);
	}
};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations
};
