import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { coreActions } from '../../store/core/core.actions';
import { Pages } from '../../store/core/core.interface';
import { setIsAppLoading } from '../../store/core/core.reducer';
import { coreSelector } from '../../store/core/core.selectors';
import { usersActions } from '../../store/users/users.actions';
import { usersSelector } from '../../store/users/users.selectors';
import BrokenImg from "../../style/images/broken-image.svg";
import CarouselComp from "./components/CarouselComp/CarouselComp"
import LoginModal from "./components/LoginModal/LoginModal";
import "./LandingPage.scss";


const LandingPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const isUserConnected: boolean = useSelector(usersSelector.getIsUserConnected);
    const isAppLoading = useSelector(coreSelector.isAppLoadingSelector);
    const mainTxt: string = "Inside the body, deep down, lies the soul. No one has seen it yet, but everyone believe it exists";
    const secondTxt: string = "A personal app, of a person's life, a place to write personal notes, letters for the future, future tools and more";

    console.log(isUserConnected, 'isUserConnected');
    console.log(isAppLoading, 'isAppLoading');
    

    const handleImgFailure = (event: any) => {
        event.target.src = BrokenImg;
    };

    const onSignupClick = () => {
        dispatch(coreActions.setCurrentPage(Pages.Signup));
    };

    const onLoginClick = () => {
        setIsLoginPopupOpen(true);
    };

    const doLogin = (password: string, email: string) => {
        dispatch(setIsAppLoading(true))
        dispatch(usersActions.loginUserReq({ password, email }));
    };

    return (
        <>
            <div className='landing-page-container'>
                <div className="landing-page-container__main-txt-container">
                    <span className="main-txt">
                        {mainTxt}
                    </span>
                    <div className="sign-up-in-container">
                        <span role="presentation" onClick={onSignupClick} className="join-btn">Sign up</span>
                        <span role="presentation" onClick={onLoginClick} className="join-btn">Login</span>
                    </div>
                </div>
                <CarouselComp />
            </div>
            {isLoginPopupOpen
                && <LoginModal isOpen={isLoginPopupOpen} handleClose={() => setIsLoginPopupOpen(false)} onLogin={doLogin} />}
        </>
    )
}

export default LandingPage