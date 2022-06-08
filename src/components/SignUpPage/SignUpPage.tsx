import React, { useState } from 'react';
import { LinearProgress } from '@mui/material';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { SignupSteps, signupStepsArray } from '../../store/core/core.interface';
import { usersActions } from '../../store/users/users.actions';
import { editedUserInit } from '../../store/users/users.initialState';
import { User } from '../../store/users/users.interface';
import { validateNickname } from '../../utils/utils';
import FamilyMembers from './components/FamilyMembers/FamilyMembers';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import './SignUpPage.scss';


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
    const isFirstStep: boolean = currentSignupStepIndex === 0;
    const isLastStep: boolean = currentSignupStepIndex === (signupStepsArray.length - 1);
    const isNicknameValid = validateNickname(editedUser.name);
    const isBirthdateValid = !!editedUser.birthdate;

    const isDisabledForward = () => {
        switch (currentSignupStep) {
            case SignupSteps.PersonalDetails:
                return !isNicknameValid || !isBirthdateValid;
            case SignupSteps.FamilyMembers:
                return false;
            default:
                return true;
        };
    };

    const onChange = (name: string, value: any) => {
        setEditedUser(prev => ({ ...prev, [name]: value }));
    };

    const moveForward = () => {
        if (signupStepsArray[currentSignupStepIndex + 1]) {
            setCurrentSignupStep(signupStepsArray[currentSignupStepIndex + 1])
        }
    };

    const moveBack = () => {
        if (currentSignupStepIndex - 1 >= 0) {
            setCurrentSignupStep(signupStepsArray[currentSignupStepIndex - 1]);
        }
    };

    const submitUser = () => {
        dispatch(usersActions.submitUserReq(editedUser));
    };

    const renderElement = () => {
        switch (currentSignupStep) {
            case SignupSteps.PersonalDetails:
                return (
                    <PersonalDetails
                        editedName={editedUser.name}
                        editredBirthday={editedUser.birthdate}
                        onChange={onChange}
                        editedAvatarUrl={editedUser.avatarUrl}
                    />
                );
            case SignupSteps.FamilyMembers:
                return (
                    <FamilyMembers
                        field="familyMembers"
                        onChange={onChange}
                        value={editedUser.familyMembers}
                    />
                )
        }
    }


    return (
        <div className='sign-up-page-container'>
            <div className="sign-up-page-inner-container">
                <div className="stepper-container">
                    <span className="sub-title">{getStepLocationNum + 1}/{stepsCount}</span>
                    <LinearProgress variant="determinate" value={stepperLocation} className="linear-stepper" />
                    <span className="title">{stepTitle}</span>
                </div>
                <div className="input-wrapper">
                    {renderElement()}
                </div>
            </div>
            <div className="actions-btns-container">
                {!isLastStep
                    && (
                        <div
                            style={{ marginLeft: !isFirstStep ? "0.5rem" : "0" }}
                            className={classNames("action-btn-continue", isDisabledForward() && "disabled")}
                            onClick={moveForward}
                            role="presentation"
                        >Continue
                        </div>
                    )}
                {isLastStep
                    && (
                        <div
                            style={{ marginLeft: "0.5rem" }}
                            className={classNames("action-btn-continue", isDisabledForward() && "disabled")}
                            role="presentation"
                            onClick={submitUser}
                        >Done
                        </div>
                    )}
                {!isFirstStep
                    && (
                        <div
                            onClick={moveBack}
                            className="action-btn-back"
                            role="presentation"
                        >Back
                        </div>
                    )}
            </div>
        </div>
    )
}

export default SignUpPage