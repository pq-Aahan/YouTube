import React from 'react'

const commentsData=[{
    name:"Aahan",
    text:"Lorem ipsumdolor sit amet",
    replies:[{
        name:"Aahan",
        text:"Lorem ipsumdolor sit amet",
        replies:[{
            name:"Aahan",
            text:"Lorem ipsumdolor sit amet",
            replies:[]
        
        },{
            name:"Aahan",
            text:"Lorem ipsumdolor sit amet",
            replies:[{
                name:"Aahan",
                text:"Lorem ipsumdolor sit amet",
                replies:[]
            
            },{
                name:"Aahan",
                text:"Lorem ipsumdolor sit amet",
                replies:[{
                    name:"Aahan",
                    text:"Lorem ipsumdolor sit amet",
                    replies:[]
                
                },{
                    name:"Aahan",
                    text:"Lorem ipsumdolor sit amet",
                    replies:[]
                
                }]
            
            }]
        
        }]
    
    },{
        name:"Aahan",
        text:"Lorem ipsumdolor sit amet",
        replies:[]
    
    }]
},{
    name:"Aahan",
    text:"Lorem ipsumdolor sit amet",
    replies:[]

},{
    name:"Aahan",
    text:"Lorem ipsumdolor sit amet",
    replies:[]

},{
    name:"Aahan",
    text:"Lorem ipsumdolor sit amet",
    replies:[]

},{
    name:"Aahan",
    text:"Lorem ipsumdolor sit amet",
    replies:[]

},]

const Comment=({data})=>{
const {name,text,replies}=data;
return <div className='flex py-2 shadow-sm bg-gray-100 rounded my-2'> 
    <img className='h-8' alt='user' src='https://t3.ftcdn.net/jpg/02/13/55/90/360_F_213559068_B3t1KuDASHhKh6FFQC0Ym6fOTuWuK3gM.jpg'/>
    <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>
</div>
}

const CommentsList=({comments})=>{
    return comments.map((comment,index)=>( 
    <div><Comment key={index} data={comment}/>
    <div className='pl-5 border border-l-black ml-5'>
    <Comment key={index} data={comment}/>
    <Comment key={index} data={comment}/>
    <Comment key={index} data={comment}/> 
    </div>
    </div>

    )
                 
        
        )
    
}


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold py-2'>Comments:</h1>
      <CommentsList comments ={commentsData}/>
    </div>
  )
}

export default CommentsContainer
