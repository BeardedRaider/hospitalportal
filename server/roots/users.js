// eslint-disable-next-line no-undef
app.get('/api/users', async (req, res) => {
    try {
        // Get all users from the database
        const token = req.headers.authorization?.split(' ')[1];
// Check if the token is valid
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided'});
    }

    // Verify the token
    // eslint-disable-next-line no-undef
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
        if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
    
          // The decoded.userId should match the structure used in jwt.sign during login
        // eslint-disable-next-line no-undef
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

    // Return data only for the authenticated user
    // Inside the /api/users route
const formattedUser = {
    _id: user._id,
    firstname: user.firstname,
    surname: user.surname,
    email: user.email,
    guardian: user.guardian, 
    guardian_name: user.guardian_name,
    dob: user.dob,
    department: user.department,
    notes: user.notes,
    is_admin: user.is_admin, 
    };
  
    res.json(formattedUser);
  
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});