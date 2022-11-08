import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState({});

	return (
		<AuthContext.Provider
			value={{
				username,
				setUsername,
				password,
				setPassword,
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
