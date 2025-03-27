type UserInformation = {
  email: string;
  password: string;
};

const validateUser = (values: UserInformation) => {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }

  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = '비밀번호는 8~20자 사이로 입력해주세요.';
  }

  return errors;
};

// 로그인 유효성 검사
const validateLogin = (values: UserInformation) => {
  return validateUser(values);
};

// 회원가입 유효성검사
const validateSignup = (
  values: UserInformation & {confirmPassword: string},
) => {
  const errors = validateUser(values);
  const signupErrors = {...errors, confirmPassword: ''};

  if (values.password !== values.confirmPassword) {
    signupErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
  }

  return signupErrors;
};

export {validateLogin, validateSignup};
