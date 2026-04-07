setTimeout(()=>
          {
  console.log("hii");
},0)

process.nextTick(()=>
                {
  console.log("bye");
})