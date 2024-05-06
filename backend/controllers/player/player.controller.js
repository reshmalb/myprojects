

const Player= require("../../models/player/player.model");

const InsertPlayerData=  async (req, res) => {
    try {
      console.log(req.body);
           
      const { name, team,basePrice,role,description } = req.body;
      console.log(req.body)
      const image = req.file ? req.file.path : null; // Multer stores file path in req.file.path
      console.log(image);
      const newPlayer = new Player({
      name,
      team,
      basePrice,
      role,
      description,
      image
      });
      console.log(newPlayer)
  
      await newPlayer.save();
      const data = {
        success: true,
        message: "Player added successfully!",
        
    };
      res.status(201).json(data);
    } catch (error) {
      console.error('Error adding new player:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  const GetPlayerData=  async (req, res) => {
    try {
      
  
     const playerData= await Player.find();
     console.log(playerData);
      const data = {
        success: true,
        message: "Player Data Fetched Successfully!",
        data:playerData
        
    };
      res.status(201).json(data);
    } catch (error) {
      console.error('Error accessing user data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  module.exports ={
           InsertPlayerData,
           GetPlayerData
  };