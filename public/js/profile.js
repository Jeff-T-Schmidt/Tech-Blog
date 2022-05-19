console.log("hello")
document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault()
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})
document.querySelectorAll("#delete").forEach((element)=>{
    element.addEventListener("click",e=>{
        e.preventDefault()
        console.log(e.target.dataset.blogid)
        // const delBlog = {
        //     title:document.querySelector("#title").value,
        //     body:document.querySelector("#body").value,
        // }
    
        fetch(`api/blogs/${e.target.dataset.blogid}`,{
            method:"DELETE",
            // body:JSON.stringify(delBlog),
            // headers:{
            //     "Content-Type":"application/json"
            // }
        }).then(res=>{
            if(res.ok){
               location.reload()
            } else {
                alert("trumpet sound")
            }
        })
    })
    
})



