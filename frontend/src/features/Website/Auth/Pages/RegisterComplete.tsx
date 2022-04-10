import { createOrUpdateUser } from "../../../../api/auth";
// import { auth } from "../../../../firebase/firebase.config";
import { getAuth, signInWithEmailLink, updatePassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../AuthSlide";

const RegisterComplete = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [email, setEmail] = useState("");
    const user = useSelector((state) => state.user.userInfo);

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistraion"));
        if (user && user.token) navigate("/");
    }, [user, navigate]);

    const onSubmit = async (data: any) => {
        try {
            // const result = await firebase.auth().signInWithEmailLink(email, window.location.href);
            console.log("RegisterCompleate for email: ", email)
            const result = await createUserWithEmailAndPassword(auth, email, data.password);
            console.log("USER CREATED: ", result)
            if (result.user) {
                console.log("REMOVE EMAIL TO LOCALSTorage: ", data.email)
                window.localStorage.removeItem("emailForRegistraion");
                let user = result.user;
                console.log("GET CURRENT USER: ", user)
                await updatePassword(user, data.password);

                const { token } = await user.getIdTokenResult();
                createOrUpdateUser(token)
                    .then(({ data: { name, email, role, _id } }) => {
                        dispatch(signUp({
                            name,
                            token,
                            email,
                            role,
                            _id,
                        }));
                    })
                    .catch((error) => console.log(error));
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    const completeRegistrationForm = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" value={email} disabled />
            <input type="password" {...register("password")} autoFocus placeholder="password" />
            <button>Sign Up</button>
        </form>
    );
    return (
        <div>
            <h1>Register</h1>
            <ToastContainer />
            {completeRegistrationForm()}
        </div>
    );
};

export default RegisterComplete;
