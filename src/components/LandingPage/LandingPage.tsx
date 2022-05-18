import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { coreActions } from '../../store/core/core.actions';
import { Pages } from '../../store/core/core.interface';
import { usersActions } from '../../store/users/users.actions';
import { usersSelector } from '../../store/users/users.selectors';
import BrokenImg from "../../style/images/broken-image.svg";
import "./LandingPage.scss";


const LandingPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const isUserConnected: boolean = useSelector(usersSelector.getIsUserConnected);
    const mainTxt: string = "Inside the body, deep down, lies the soul. No one has seen it yet, but everyone believe it exists";
    const secondTxt: string = "A personal app, of a person's life, a place to write personal notes, letters for the future, future tools and more";

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
        dispatch(usersActions.loginUserReq({ password, email }));
    };

    return (
        <div>LandingPage</div>
    )
}

export default LandingPage