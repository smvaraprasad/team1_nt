function submit_by_id(){
    const options={
        method:'post',
        Headers:{'content-Type','application/json'},
        body:JSON:stringify(data)
    };
    fetch('/api',options).then(response =>{
        console.log(response);
    });
    
}