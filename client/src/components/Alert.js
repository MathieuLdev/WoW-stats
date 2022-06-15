import { useAppContext } from "../context/appContext";

const Alert = () => {
	const { alertText } = useAppContext();
	return <p className={"alert"}>{alertText}</p>;
};

export default Alert;
