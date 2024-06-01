export const generateToken = (user, message, statusCode, res) => {
  // this generateJsonWebToken method comes from user schema
  const token = user.generateJsonWebToken();
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  res
    .status(statusCode)

    // here key = cookiName and value = token 

    .cookie(cookieName, token, {
      // here date = 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

