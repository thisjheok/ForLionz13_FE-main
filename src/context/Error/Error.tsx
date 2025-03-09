import { ReactNode, createContext, useContext, useState } from "react";

type Dispatch = (message: string) => void;

const ErrorStateContext = createContext<string | undefined>(undefined);

const ErrorDispatchContext = createContext<Dispatch | undefined>(undefined);

function ErrorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useState<string>("");

  return (
    <ErrorDispatchContext.Provider value={dispatch}>
      <ErrorStateContext.Provider value={state}>
        {children}
      </ErrorStateContext.Provider>
    </ErrorDispatchContext.Provider>
  );
}

function useErrorState() {
  const context = useContext(ErrorStateContext);
  if (context === undefined) {
    throw new Error("Error state context error");
  }
  return context;
}

function useErrorDispatch() {
  const context = useContext(ErrorDispatchContext);
  if (context === undefined) {
    throw new Error("Error dispatch context error");
  }
  return context;
}

export { ErrorProvider, useErrorState, useErrorDispatch };
