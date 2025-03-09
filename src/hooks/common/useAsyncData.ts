import { useCallback, useEffect, useReducer } from "react";
import { IResponse, IReducerParam, IReducer } from "../../types";

function reducer<T>(state: IReducerParam<T>, action: IReducerParam<T>) {
  const { type } = action;

  switch (action.type) {
    case "ISLOADING": {
      return {
        type,
        isloading: true,
      };
    }
    case "SUCCESS": {
      return {
        type,
        isloading: false,
        data: action.data,
      };
    }
    case "FAILURE": {
      return {
        type,
        error: action.error,
      };
    }
    default: {
      console.log(state);
      return {
        type,
      };
    }
  }
}

function useAsyncData<T>(
  api: (...args: any[]) => IResponse<T>,
  deps: any[] = []
) {
  const initialState: IReducerParam<T> = {
    type: "",
    isloading: false,
    error: "fullfilled",
  };

  const fetchData = useCallback(async (params?: any[]) => {
    dispatch({ type: "ISLOADING" });
    try {
      const response = params ? await api(params) : await api();
      if (!response.isError) {
        dispatch({ type: "SUCCESS", data: response.data });
      }
    } catch (e) {
      dispatch({ type: "FAILURE", error: "rejected" });
    }
  }, []);

  const [state, dispatch] = useReducer<IReducer<T>>(reducer, initialState);

  useEffect(() => {
    fetchData();
  }, [...deps]);

  return [state, fetchData] as const;
}

export default useAsyncData;
