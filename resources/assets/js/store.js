export default {
	state: {
		WelcomeMessage: 'Welcome to my vue app'
	},
	getters: {
		welcome(state){
			return state.WelcomeMessage;
		}
	},
	mutations: {},
	actions: {}	
}