import React from "react";
import DateAdapter from "@mui/lab/AdapterMoment";
import { DateTimePicker, MobileDatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

interface DateInputProps {
  value: Date,
  field: string,
  onChange: (key: string, value:Date | null)=> void,
  label: string,
  isTime: boolean
}

const DateInput: React.FC<DateInputProps> = ({ value, field, onChange, label, isTime }): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      {isTime 
        ? (
          <DateTimePicker
            label={label}
            value={value}
            onChange={(dateValue : Date | null) => onChange(field, dateValue)}
            renderInput={(params : any) => <TextField {...params} />}
          />
        )
        : (
          <MobileDatePicker
            label={label}
            inputFormat="DD/MM/yyyy"
            value={value}
            onChange={(dateValue: Date | null) => onChange(field, dateValue)}
            renderInput={(params: any) => <TextField {...params} />}
          />
        )}
    </LocalizationProvider>
  );
};

export default DateInput;
