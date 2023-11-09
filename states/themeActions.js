import { useStore } from "./useStore";

export const setTheme = (props) => {
    useStore.setState((state) => ({ ...state, theme: props }));
};
