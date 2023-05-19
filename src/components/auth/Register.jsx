import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import Loader from "../Loader";

const Register = () => {
  const { handleRgister, loading, error, setError, current } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните поля ");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRgister(formData);
      console.log(formData);
    }
  }
  console.log(error);
  if (loading) {
    return <Loader />;
  }
  // console.log(passwordConfirm);
  return (
    <div>
      <h1>register</h1>
      {error ? <h2>{error[0]}</h2> : null}
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="passwrod"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="password "
        placeholder="password confirm"
        onChange={(e) => {
          setPasswordConfirm(e.target.value);
        }}
      />
      <button onClick={handleSave}>register</button>
    </div>
  );
};

export default Register;
