export interface IReactRouter {
  match: {
    params: object;
    isExact: boolean;
    path: string;
    url: string;
  };
  location: {
    key: string;
    pathname: string;
    search: string;
    hash: string;
    state: object;
  };
  history: {
    length: string;
    action: string;
    location: {
      pathname: string;
      search: string;
      hash: string;
      state: object;
    };
    push: (path: string, state?: object) => void;
    replace: (path: string, state?: object) => void;
    goBack: () => void;
    goForward: () => void;
  };
}
