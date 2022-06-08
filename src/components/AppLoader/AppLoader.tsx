import { CircularProgress } from "@mui/material";
import React from "react";
import "./AppLoader.scss";


const AppLoader: React.FC = (): JSX.Element => {
    return (
        <div className="app-loading-wrapper">
            <div className="app-loading-background" />
            <CircularProgress
                size={100}
                sx={{
                    color: 'green',
                    position: 'absolute',
                    top: '45%',
                    left: '34%',
                }}
            />
        </div>
    );
};

export default AppLoader;
