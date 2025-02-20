const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://swapi.tech/api/',
			people: [],
			character: {}
		},
		actions: {
			getPeople: async () => {
				try {
					const resp = await fetch(getStore().url+'people');

					if(!resp.ok) throw new Error('Error get people');

					const data = await resp.json()
					setStore({people: data.results})

				} catch (error) {
					console.error(error);
				}
			},


			getOnePeople: async (uid) => {
				try {
					const resp = await fetch(getStore().url+'people/'+ uid);

					if(!resp.ok) throw new Error('Error get one people');

					const data = await resp.json()
					setStore({character: data.result})

				} catch (error) {
					console.error(error);
				}
			}

		}
	};
};

export default getState;
