export const state = () => ({
    userId: null
})

export const mutations = {
    setUser(state, userId){
        state.userId = userId
    }
}

export const actions = {
    setUser(context, userId){
        context.commit('setUser', userId)
    }
}