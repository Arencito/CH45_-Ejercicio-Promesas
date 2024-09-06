const data = {"id":5, "title":"John Hardy Women´s Legends Naga Gold & Silver Dragon"}





function getData(){
    return new Promise ((resolve, reject)=>{
        if (data==null){
            reject(new Error("Data is null"));
        }
            //data==null
            let seconds = Math.ceil(Math.random() * 10000);
            setTimeout(() => resolve (data) ,seconds);
        
    });
}//getData

async function fetchingData(){
  try{
    const response= await getData();
    console.log("Promesa cumplida :3",response);
    let divData = document.getElementById=("divData");
   divData.innerHTML = response.title + "<br/>" + response.description;
} catch(err){
    console.log("Async Promesa rechazada :C", err)
}//catch

}//fetchingData

fetchingData();


// getData()
// .then((response)=>{
//     console.log("Promesa cumplida :3",response);
//     let divData = document.getElementById=("divData");
//     divData.innerHTML = response.title + "<br/>" + response.description;
// })


// .catch((err)=>console.log("Promesa rechazada :C", err));