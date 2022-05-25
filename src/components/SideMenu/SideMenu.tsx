import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import useClickOutsideListener from '../../hooks/useClickOutsideListener/useClickOutsideListener';
import { coreActions } from '../../store/core/core.actions';
import { Pages } from '../../store/core/core.interface';
import { setIsAppLoading, setIsHeaderMenuOpen } from '../../store/core/core.reducer';
import { coreSelector } from '../../store/core/core.selectors';
import { RootStateInterface } from '../../store/root/rootState.interface';
import { usersActions } from '../../store/users/users.actions';
import { User } from '../../store/users/users.interface';
import { usersSelector } from '../../store/users/users.selectors';
import LoginModal from '../LandingPage/components/LoginModal/LoginModal';
import './SideMenu.scss';


interface ISideMenuProps {
  isMenuOpen?: boolean,
  currentUser?: User,
}

const SideMenu: React.FC<ISideMenuProps> = ({ isMenuOpen, currentUser }): JSX.Element => {
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const onClickOutside = () => {
    dispatch(setIsHeaderMenuOpen(false))
  }

  const onJoinClick = () => {
    !currentUser && dispatch(coreActions.setCurrentPage(Pages.Signup));
};

  const onLogoClick = () => {
    dispatch(coreActions.setCurrentPage(Pages.Homepage));
  };

  const onLoginClick = () => {
    setIsLoginPopupOpen(true);
  };

  const doLogin = (password: string, email: string) => {
    dispatch(setIsAppLoading(true))
    dispatch(usersActions.loginUserReq({ password, email }));
};


  useClickOutsideListener({ onClickOutside, ref: wrapperRef })
  return (
    <div className={classNames("side-menu", isMenuOpen && "menu-open-right")} ref={wrapperRef}>
      <div className="side-menu-container">
        <div className="side-menu-container__user-type-wrapper">
          <span role="presentation" className="logo" onClick={onLogoClick}>LP</span>
          {!!currentUser ?
            <>
              <div>Family Tree</div>
              <div>Account settings</div>
              <div>Log out</div>
            </>
            :
            <>
              <div onClick={onJoinClick}>Join LP</div>
              <div onClick={onLoginClick}>Login</div>
            </>
          }
          <div>Privecy</div>
        </div>
        {!!currentUser &&
          <div className="side-menu-container__user-type-wrapper">
            <span>{currentUser.subscriptionType}</span>
          </div>
        }
      </div>
      {isLoginPopupOpen
                && <LoginModal isOpen={isLoginPopupOpen} handleClose={() => setIsLoginPopupOpen(false)} onLogin={doLogin} />}
    </div>
  );
};

const mapStateToProps = (state: RootStateInterface, props: ISideMenuProps): ISideMenuProps => {
  return {
    ...props,
    isMenuOpen: coreSelector.isHeaderMenuOpenSelector(state),
    currentUser: usersSelector.currentUserSelector(state),
  };
};

export default connect(mapStateToProps)(SideMenu);
