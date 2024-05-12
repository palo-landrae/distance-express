const express = require('express');
const geolib = require('geolib');
  
const app = express();
const PORT = 5000;

app.use(express.json());
  
app.get('/', (_, res)=>{
    res.status(200);
    res.send("This is from root");
});

app.post('/distance', (req, res) => {
    const { lat1, lon1, lat2, lon2 } = req.body;

    const distance = geolib.getDistance({ latitude: lat1, longitude: lon1 }, { latitude: lat2, longitude: lon2 });

    res.status(200).send({data: distance, success: true});
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
