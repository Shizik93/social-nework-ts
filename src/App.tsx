import { useEffect } from 'react';

import './App.css';
import { Preloader } from './components/common/preloader/preloader';
import { Header } from './components/Header/Header';
import { Nav } from './components/Navbar/Nav';
import { RoutesBlock } from './components/RoutesBlock/RoutesBlock';
import { initializingAppTC } from './redux/app-reducer';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  const initialized = useAppSelector(state => state.appReducer.initialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializingAppTC());
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {initialized ? (
        <div className="app-wrapper">
          <Header />
          <Nav />
          <RoutesBlock />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
