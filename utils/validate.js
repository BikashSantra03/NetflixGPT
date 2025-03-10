export const checkValidateDate = (email, password, name = null) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/.test(
      password
    );

  if (name === "") return "Name cannot be empty!";
  if (name && /[^a-zA-Z\s]/.test(name))
    return "Name cannot contain numbers or special characters!";

  if (!isEmailValid) return "Email Id not valid!";

  if (!isPasswordValid) return "Password Id not valid!";

  return null;
};
