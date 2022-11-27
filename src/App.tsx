import {useEffect} from "react";
import './App.css';
import {Nav} from "./components/Navbar/Nav";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Preloader} from "./components/common/preloader/preloader";
import {initializingApp} from "./redux/app-reducer";
import {useAppDispatch, useAppSelector} from "./redux/hooks/hooks";
import {RoutesBlock} from "./components/RoutesBlock/RoutesBlock";


function App() {
    const initialized = useAppSelector(state => state.appReducer.initialized)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initializingApp())
    }, [])

    return (
        <>{initialized ?
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <RoutesBlock/>
            </div>
            : <Preloader/>}

        </>


    );
}

export default App;


