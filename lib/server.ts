import app from "./app";

const port = process.env.PORT || 5000;

interface User { 
   firstName:string, 
   lastName:string, 
   ID: Number,
   sayHi: ()=>string 
}



app.listen(port, ()=> {
  console.log('Express server listening on port ' + port);
})
