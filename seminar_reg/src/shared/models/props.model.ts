import { Dispatch, ReactNode, SetStateAction } from "react";

export type Attendees = {
  id: number,
  name: string
};
export type FormState = {
  attendants: {
    list: string | number | undefined;
    attendees: Attendees[];
  }; 
  info: {
    cmpName: string;
    display: boolean;
    specialAcmd: boolean;
  };
  confirm: {
    verify: boolean;
  }
};

// export class FormStateInit {}
export type FormContextState = {
  formState: FormState;
	setFromState: Dispatch<SetStateAction<FormState>>;
}
export type CardProps = {
  stepNumber: number;
  color: "green" | "blue" | "orange";
  children: ReactNode;
};
