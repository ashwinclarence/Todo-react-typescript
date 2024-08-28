export type TodoType = {
    id: string;
    content: string;
};
  
export type ReactSetState<T>=React.Dispatch<React.SetStateAction<T>>
  