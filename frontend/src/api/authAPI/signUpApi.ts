export const signUpApi = async (data: any) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  try {
    await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return "Successful"
  } catch (error) {
    return "An Error Occured. Try again please"
  }
};
