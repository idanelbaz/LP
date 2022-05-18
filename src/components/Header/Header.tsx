import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../store/users/users.selectors";
import { coreActions } from "../../store/core/core.actions";
import { coreSelector } from "../../store/core/core.selectors";
import StarSettings from "../../style/images/star-settings.svg";
import { Pages } from "../../store/core/core.interface";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import "./Header.scss";


const Header: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const currentPage: Pages = useSelector(coreSelector.currentPageSelector);
    const isUserConnected: boolean = useSelector(usersSelector.getIsUserConnected);

    const onLogoClick = () => {
        dispatch(coreActions.setCurrentPage(Pages.Homepage));
    };

    const onJoinClick = () => {
        dispatch(coreActions.setCurrentPage(Pages.Signup));
    };

    return (
        <div className="header">
            <div className="header-item-container header-menu-container">
                <HeaderMenu />
            </div>
            <div className="header-item-container">
                <span role="presentation" className="logo" onClick={onLogoClick}>LP</span>
            </div>
            {isUserConnected
                && (
                    <div className="header-item-container">
                        <img className="profile-img" src={StarSettings} alt="" />
                    </div>
                )}
        </div>
    );
};

export default Header;
