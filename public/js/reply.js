document.querySelectorAll("#reply").forEach((element)=>{
    element.addEventListener("click",e=>{
        e.preventDefault()
        console.log(e.target.dataset.replyId)
        fetch(`api/blogs/${e.target.dataset.replyId}`,{
            method:"PUT",
        }).then(res=>{
            if(res.ok){
               location.reload()
            } else {
                alert("trumpet sound")
            }
        })
    })
    
})
