import { createStore } from 'vuex';

export default createStore({
    state: {
        // Define your initial state properties
    },
    mutations: {
        setBearerToken(state, token) {
            state.bearerToken = token;
        },
    },
    actions: {
        // Define action functions to perform asynchronous operations
    },
    modules: {
        // Define nested modules for organized state management
    },
});
