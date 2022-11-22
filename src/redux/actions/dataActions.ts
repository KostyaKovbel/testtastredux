const addNewField = () => ({ type: 'addNewField' });
const updateCount = (value: number, id: number) => ({ type: 'updateCount', payload: { count: value, id } });
const updateBreed = (value: string, id: number) => ({ type: 'updatedBreed', payload: { breed: value, id } });
const updateSubbreed = (value: string, id: number) => ({ type: 'updateSubbreed', payload: { subbreed: value, id } });

export const userDataAction = { addNewField, updateCount, updateBreed, updateSubbreed }