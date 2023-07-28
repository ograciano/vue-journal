// export const myAction = async ({ commit }) => {}
export const loadEntries = async ({ commit }) => {
    const { data } = await this.$axios.get('/entries.json');
    console.log(data);
    if (!data) {
        commit('setEntries', []);
        return;
    }
    const entries = [];
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        });
    }
    commit('setEntries', entries);
}

export const updateEntry = async ({ commit }, entry) => {
    const { id, date, picture, text } = entry;
    const dataToSave = { date, picture, text };
    await this.$axios.put(`/entries/${id}.json`, dataToSave);
    commit('updateEntry', { ...entry });
}

export const createEntry = async ({ commit }, entry) => {
    const { date, picture, text } = entry;
    const dataToSave = { date, picture, text };
    const { data } = await this.$axios.post(`/entries.json`, dataToSave);
    entry.id = data.name;
    commit('addEntry', entry);
}