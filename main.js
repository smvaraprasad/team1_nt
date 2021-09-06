async function submit_by_id(){
    let url ='http://127.0.0.1:5500';
    let data= document.getElementById(subject)
    const options={
        method:'post',
        body:JSON.stringify(data)
    };
    fetch(url,options).then(response =>{
        console.log(response);
    });
}
