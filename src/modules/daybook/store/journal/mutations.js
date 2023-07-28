// export const myMutation = (/* state */) => {}
export const setEntries = (state) => {
    state.isLoading = false;

}

export const updateEntry = (state, entry) => {
    const idx = state.entries.map(e => e.id).indexOf(entry.id);
    state.entries[idx] = entry;
}

export const addEntry = (state, entry) => {
    state.entries.unshift(entry);
}