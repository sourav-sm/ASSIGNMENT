const express=require('express');
const app=express();

const cors=require('cors');
const port=3000;

app.use(cors());

app.get('/sum',(req,res)=>{
    const a=parseFloat(req.query.a) || 0;
    const b=parseFloat(req.query.b) || 0;
     
    if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ error: 'Invalid input. Please provide valid numbers for principle, rate, and time.' });
        return;
    }

    const sum=calculatesum(a,b);

    res.json({sum});
});

function calculatesum(a,b){
    return (a+b);
}

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});