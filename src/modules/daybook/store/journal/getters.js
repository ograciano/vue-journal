// export const myGetter = (state) => {}
export const getEntriesByTerm = (state) => {
    return state.entries;
}

export const getEntryById = (state) => (id) => {
    return state.entries.find(e => e.id === id);
}

export const getEntriesByTermFiltered = (state, getters) => (term = '') => {
    if (term.length === 0) {
        return getters.getEntriesByTerm;
    }
    return getters.getEntriesByTerm.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()));
}