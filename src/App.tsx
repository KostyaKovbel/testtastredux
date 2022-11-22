import React, { Suspense, useEffect } from 'react';
import { Container } from '@mui/material';
import { Oval } from 'react-loader-spinner';

import './App.scss';
import Form from './components/form/form';
import { actionBreeds } from './redux/actions/breedsActions';
import { useAppDispatch } from './redux/features/hooks';
import { getBreeds } from './utils/api';

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    getBreeds('breeds/list/all').then((dataFromServer) => {
      dispatch(actionBreeds.loadBreeds(dataFromServer.message))
    });
  }, [dispatch])
  return (
    <Container>
      <Suspense 
        fallback={
          <Oval
            height={80}
            width={80}
            color="blue"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#00BFFF"
            strokeWidth={2}
            strokeWidthSecondary={2}

          />
        }
      >
        <Form />
      </Suspense>
    </Container>
  );
};

export default App;
