type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'tarcisio', password: '12345678' };
const sentUser = { username: 'tarcisio', password: '12345678' };

const loggedIn = verifyUser(dbUser, sentUser);
console.log(loggedIn);
