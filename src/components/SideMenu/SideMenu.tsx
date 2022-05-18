/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import React, { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import useClickOutsideListener from "../../hooks/useClickOutsideListener/useClickOutsideListener";
import { setIsHeaderMenuOpen } from "../../store/core/core.reducer";
import { coreSelector } from "../../store/core/core.selectors";
import { RootStateInterface } from "../../store/root/rootState.interface";
import "./SideMenu.scss";


interface ISideMenuProps {
  isMenuOpen?: boolean,
}

const SideMenu: React.FC<ISideMenuProps> = ({ isMenuOpen }): JSX.Element => {
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onClickOutside = () => {
    dispatch(setIsHeaderMenuOpen(false))
  }
  useClickOutsideListener({ onClickOutside, ref: wrapperRef })
  return (
    <div className={classNames("side-menu", isMenuOpen && "menu-open-right")} ref={wrapperRef}>

    </div>
  );
};

const mapStateToProps = (state: RootStateInterface, props: ISideMenuProps): ISideMenuProps => {
  return {
    ...props,
    isMenuOpen: coreSelector.isHeaderMenuOpenSelector(state),
  };
};

export default connect(mapStateToProps)(SideMenu);
