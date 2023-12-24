const express=require('express');
const app=express();

const cors=require('cors');
const port=3000;

app.use(cors());

app.get('/interest',(req,res)=>{
    const principle=parseFloat(req.query.principle) || 0;
    const rate=parseFloat(req.query.rate) || 0;
    const time=parseFloat(req.query.time) || 0;
    
    if (isNaN(principle) || isNaN(rate) || isNaN(time)) {
        res.status(400).json({ error: 'Invalid input. Please provide valid numbers for principle, rate, and time.' });
        return;
    }

    const Interest=calculateInterest(principle,rate,time);
    const TotalAmount=calculateTotalAmount(principle,rate,time);

    res.json({Interest,TotalAmount});
    // res.json({TotalAmount});
});

function calculateInterest(principle,rate,time){
    return (principle*rate*time)/100;
}

function calculateTotalAmount(principle,rate,time){
    return(principle+ (principle*rate*time)/100);
}



app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});