import { useSearchParams } from "react-router-dom";
import { parse, stringify } from "query-string";

type SetMultipleParams = {
  [key: string]: string | number;
};

export const urlParams = () => {
  const [_, setSearchParams] = useSearchParams();

  const getParams = (key?: string) => {
    const parsedParams = parse(location.search);

    if (key) return parsedParams[key]

    return parsedParams;
  };

  const setParams = (key: string, value: string | number) => {
    const oldParams = (getParams() || {}) as any;
    oldParams[key] = value;

    if (!value) delete oldParams[key];

    setSearchParams(stringify(oldParams));
  };

  const setMultipleParams = (params: SetMultipleParams) => {
    setSearchParams(stringify(params));
  };

  return { getParams, setParams, setMultipleParams };
};
