const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://swapi.tech/api/',
			data: [],
			planets: [],
			starships: [],
			favorites: [],
			selected: {}
		},
		actions: {
			addRemoveFav: async (fav) => {
				const store = getStore();
				const isFavourite = store.favorites.some(el => el.uid === fav.uid && el.type === fav.type)

				if(isFavourite){
					setStore({
						favorites: store.favorites.filter(el=> !(el.uid === fav.uid && el.type === fav.type))
					})
				}else {
					setStore({favorites: [...store.favorites, fav]})
				}
			},

			getData: async (type) => {
				try {
					const resp = await fetch(`${getStore().url}/${type}`);

					if(!resp.ok) throw new Error('Error get data');

					const data = await resp.json()
					setStore({[type]: data.results})

				} catch (error) {
					console.error(error);
				}
			},


			getOneData: async (type, uid) => {
				try {
					const resp = await fetch(`${getStore().url}/${type}/${uid}`);

					if(!resp.ok) throw new Error('Error get one data');

					const data = await resp.json()
					setStore({selected: data.result})

				} catch (error) {
					console.error(error);
				}
			},

		}
	};
};

export default getState;
