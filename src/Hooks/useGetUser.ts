const useGetUser = () => {
  const userString = window.localStorage.getItem("User");
  const User = userString ? JSON.parse(userString) : null;

  return { User };
};

export default useGetUser;
