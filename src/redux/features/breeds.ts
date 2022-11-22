type BreedList = {
    [key: string]: string[],
};

type userDataType = {
    id: number,
    breed: string,
    subbreed: string,
    count: number,
};

type FetchAction = {
    type?: string,
    payload?: BreedList,
};

type ActionType = {
    payload?: {
        id: number,
        count: number,
        breed: string,
        subbreed: string,
    },
    type: string,

}

export const breedsReducer = (state: BreedList = {}, action: FetchAction) => {
    switch (action.type) {
        case "FetchData":
            return action.payload;
        default:
            return state;
    }
}

const initialUserDataState = [{
    id: 1,
    count: 1,
    breed: '',
    subbreed: '',
}];

export const userDataReducer = (userData: userDataType[] = initialUserDataState, action: ActionType) =>  {
    switch (action.type) {
        case 'addNewField':
            return [...userData, { id: userData.length + 1, breed: '', subbreed: '', count: 1 }];
        case 'updateCount':
            return userData.reduce((total: userDataType[], current: userDataType) => action.payload?.id === current.id
                ? [...total, { ...current, count: action.payload?.count }]
                : [...total, current], []);
        case 'updatedBreed':
            return userData.reduce((total: userDataType[], current: userDataType) => action.payload?.id === current.id
                ? [...total, { ...current, breed: action.payload?.breed, subbreed: '', count: 1 }]
                : [...total, current], []);
        case 'updateSubbreed':
            return userData.reduce((total: userDataType[], current: userDataType) => action.payload?.id === current.id
                ? [...total, { ...current, subbreed: action.payload?.subbreed, count: 1 }]
                : [...total, current], []);
        default:
            return userData;
    }
}
