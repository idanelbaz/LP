import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../../store/users/users.interface';
import { editedUserInit } from '../../store/users/users.initialState';
import { SignupSteps, signupStepsArray } from '../../store/core/core.interface';
import { LinearProgress } from '@mui/material';
import "./SignUpPage.scss";

const stepLocation = (currentStep: SignupSteps): number => {
    const stepIdx = Object.keys(SignupSteps).findIndex((step) => currentStep === step);
    if (stepIdx) {
        return stepIdx;
    }
    return 0;
};

const stepTitles = {
    [SignupSteps.CredentialsInfo]: "Credentials Info",
    [SignupSteps.FamilyMembers]: "Family members",
    [SignupSteps.PersonalDetails]: "Personal Details",
  };


const SignUpPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const [editedUser, setEditedUser] = useState<User>({ ...editedUserInit });
    const [currentSignupStep, setCurrentSignupStep] = useState<SignupSteps>(SignupSteps.PersonalDetails);
    const currentSignupStepIndex = signupStepsArray.findIndex((step) => step === currentSignupStep)
    const getStepLocationNum: number = stepLocation(currentSignupStep);
    const stepsCount = Object.keys(SignupSteps).length;
    const stepperLocation: number = (100 * (getStepLocationNum + 1)) / stepsCount;
    const stepTitle: string = stepTitles[currentSignupStep];


    return (
        <div className='sign-up-page-container'>
            <div className="sign-up-page-inner-container">
                <div className="stepper-container">
                    <span className="sub-title">{getStepLocationNum + 1}/{stepsCount}</span>
                    <LinearProgress variant="determinate" value={stepperLocation} className="linear-stepper" />
                    <span className="title">{stepTitle}</span>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage