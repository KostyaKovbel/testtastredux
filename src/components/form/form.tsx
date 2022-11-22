import { Button } from '@mui/material';
import React, { lazy, useState } from 'react';
import { useAppSelector } from '../../redux/features/hooks';
import { RootState } from '../../redux/store';
import './styles.scss';

const Item = lazy(() => import('../form-item/item'));
const ImageModal = lazy(() => import('../modal/modal'));

type BreedList = {
    [key: string]: string[],
};

type UserDataType = {
    id: number,
    breed: string,
    subbreed: string,
    count: number,
};

type DogDataType = {
    breeds?: BreedList,
    userData: UserDataType[],
}

const Form: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const breedList: DogDataType = useAppSelector<RootState>(state => state);
    console.log()
    return (
        <div className="form">
            {breedList.userData.map((el: UserDataType) =>
                <Item 
                    key={el.id} 
                    breeds={breedList.breeds as BreedList} 
                    data={el} 
                    isLast={el.id !== breedList.userData.length} 
                />
            )}
            <Button 
                className="form__button" 
                variant="outlined" 
                disabled={breedList.userData.some((el) => !el.breed)} 
                onClick={() => setIsOpen(true)}
                >
                    Generate images
                </Button>
            <ImageModal isOpen={isOpen} handleClose={setIsOpen} />
        </div>
    )
}


export default React.memo(Form);