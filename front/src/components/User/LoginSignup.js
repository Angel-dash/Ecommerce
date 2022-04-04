import React, {Fragment, useRef, useState, useEffect} from "react";
import "./LoginSignup.css";
//import Loader form "../layout/Loader/Loader,js";
import {Link} from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import {LockOpen} from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const LoginSignup = () => {
	const loginTab = useRef(null);

	const registerTab = useRef(null);
	const switcherTab = useRef(null);

	const [logInEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	const {name, email, password} = user;

	const [avatar, setAvatar] = useState();
	const [avatarPreview, setAvatarPreview] = useState();
	const logInSubmit = () => {
		console.log("logi  Form submitted");
	};

	const registerSubmit = (e) => {
		e.preventDefault();
		const myform = new FormData();
		myform.set("name", name);
		myform.set("email", email);
		myform.set("password", password);
		myform.set("avatar", avatar);
		console.log("Sign Form Submitted");
	};
	const registerDataChange = (e) => {
		if (e.target.name === "avatar") {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatarPreview(reader.result);
					setAvatar(reader.result);
				}
			};
			reader.readAsDataURL(e.target.files[0]);
		} else {
			setUser({...user, [e.target]: e.target.value});
		}
	};
	const switchTabs = (e, tab) => {
		if (tab === "login") {
			switcherTab.current.classList.add("shiftToNeutral");
			switcherTab.current.classList.remove("shiftToRight");

			registerTab.current.classList.add("shiftToNeutralFrom");
			loginTab.current.classList.remove("shiftToLeft");
		}
		if (tab === "register") {
			switcherTab.current.classList.add("shiftToRight");
			switcherTab.current.classList.remove("shiftToNeutral");

			registerTab.current.classList.add("shiftToNeutralFrom");
			loginTab.current.classList.remove("shiftToLeft");
		}
	};

	return (
		<Fragment>
			<div className="LoginSignUpContainer">
				<div className="loginSignUpBox">
					<div>
						<div className="login_signUp_toggle">
							<p onClick={(e) => switchTabs(e, "login")}>Login</p>
							<p onClick={(e) => switchTabs(e, "register")}>Register</p>
						</div>
						<button ref={switcherTab}></button>
					</div>
					<form className="loginform" ref={loginTab} onSubmit={logInSubmit}>
						<div className="logInEmail">
							<MailIcon />
							<input
								type="email"
								placeholder="Email"
								value={logInEmail}
								onChange={(e) => setLoginEmail}
							/>
						</div>
						<div className="loginPassword">
							<LockIcon />
							<input
								type="password"
								placeholder="Password"
								required
								value={loginPassword}
								onChange={(e) => setLoginPassword(e.target.value)}
							/>
						</div>
						<Link to="password/forgot">Forgot Password?</Link>
						<input type="submit" value="Login" className="loginBtn" />
					</form>
					<form
						className="signUpForm"
						ref={registerTab}
						encType="multipart/form-data"
						onSubmit={registerSubmit}
					>
						<div className="signUpForm">
							<AccountBoxIcon />
							<input
								type="text"
								placeholder="Name"
								required
								name="name"
								value={name}
								onChange={registerDataChange}
							/>
							<div className="signUpEmail">
								<MailIcon />
								<input
									type="email"
									placeholder="Email"
									required
									value={email}
									onChange={registerDataChange}
								/>
							</div>
							<div className="signUpPassword">
								<LockOpen />
								<input
									type="password"
									placeholder="Password"
									required
									value={password}
									onChange={registerDataChange}
								/>
							</div>
							<div id="registerImage">
								<img src={avatarPreview} alt="Avatar Preview" />
								<input
									type="file"
									name="avatar"
									accept="image/"
									onChange={registerDataChange}
								/>
								<input type="submit" value="Register" className="signUpBtn" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default LoginSignup;
