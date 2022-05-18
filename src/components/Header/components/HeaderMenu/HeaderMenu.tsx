import React from "react";
import "./HeaderMenu.scss";
import classNames from "classnames";
import { connect, useDispatch } from "react-redux";
import { RootStateInterface } from "../../../../store/root/rootState.interface";
import { coreSelector } from "../../../../store/core/core.selectors";
import { setIsHeaderMenuOpen } from "../../../../store/core/core.reducer";

interface IHeaderMenuProps {
  isMenuOpen: boolean
}

const HeaderMenu: React.FC<IHeaderMenuProps> = ({isMenuOpen}): JSX.Element => {
  const dispatch = useDispatch();
  
  const handleToggleOpenMenu = ():void => {
    dispatch(setIsHeaderMenuOpen(!isMenuOpen));
  };

  return (
    <div
      className={classNames("header-menu", isMenuOpen && "menu-open")}
      aria-label="open-Menu-btn"
      tabIndex={0}
      role="button"
      onClick={handleToggleOpenMenu}
      onKeyDown={handleToggleOpenMenu}
    >
      <span className="header-menu-line" />
    </div>
  );
};
  
const mapStateToProps = (state:RootStateInterface):IHeaderMenuProps => {
  return { isMenuOpen: coreSelector.isHeaderMenuOpenSelector(state) };
};
  
export default connect(mapStateToProps)(HeaderMenu);