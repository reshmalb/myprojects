

const User = require("../../models/users/user.model")

const GetUserData=  async (req, res) => {
    try {
      
  
     const userData= await User.find();
     console.log(userData);
      const data = {
        success: true,
        message: "User Data Fetched Successfully!",
        data:userData
        
    };
      res.status(201).json(data);
    } catch (error) {
      console.error('Error accessing user data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  const ApproveUser = async(req,res)=>{
    try {
      const userId = req.params.userId;
      console.log(userId)
      // Find the user by userId and update their status to true
      const updatedUser = await User.findByIdAndUpdate(userId, { status: true }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      const data={
        success: true,
        message: "User Data updated Successfully!",
        data:updatedUser
      }
      res.status(200).json(data);
    } catch (error) {
      console.error('Error approving member:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


  module.exports ={
        GetUserData,
        ApproveUser
  };