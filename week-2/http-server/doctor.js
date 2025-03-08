const express = require('express')
const app = express()
const port = 3004;
function sum(n){
    let ans = 0
    for(let i=1;i<=n;i++ ){
        ans+=i;
    }
    return ans
}

app.get('/',(req,res)=>{
    const n = req.query.n
    const ans = sum(n)
    res.send("Hi your ans is :" + ans)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
