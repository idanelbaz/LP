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
import { ReactComponent as SuccessIcon } from '../../style/images/success.svg';
import "./LandingPage.scss";


const LandingPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const isUserConnected: boolean = useSelector(usersSelector.getIsUserConnected);
    const isAppLoading = useSelector(coreSelector.isAppLoadingSelector);
    const mainTxt: string = "For Your Everyday Life Points";
    const secondTxt: string = "Site your big and small Life Points Pass a gift of Life Points to your loved ones Enjoy the creation of memorable Life Points";
    const moreDetailsTxt = [
        "Easily find your precious LifePoints",
        "Capture your family LifePoints for all members in one place",
        "Create, share and save LifePoint in a simple and fun way",
    ]


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
                    <span className="second-txt">
                        {secondTxt}
                    </span>
                </div>
                <div className="landing-page-container__sign-up-in-container">
                    {/* <span role="presentation" onClick={onSignupClick} className="join-btn">Sign up</span> */}
                    <span role="presentation" onClick={onLoginClick} className="join-btn">Login</span>
                </div>
                <CarouselComp />
                <div className="landing-page-container__more-details-container">
                    {moreDetailsTxt.map(detailsTxt => 
                        <div key={detailsTxt} className="more-details-item">
                            <SuccessIcon/>
                            <div className="more-details-item__txt">{detailsTxt}</div>
                        </div>
                    )}
                </div>
            </div>
            {isLoginPopupOpen
                && <LoginModal isOpen={isLoginPopupOpen} handleClose={() => setIsLoginPopupOpen(false)} onLogin={doLogin} />}
        </>
    )
}

export default LandingPage