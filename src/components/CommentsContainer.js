import Comments from "./Comments";

const commentsList = [
    {
        name:"swapna",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
            {
                name:"swapna",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                name:"swapna",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                name:"swapna",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies:[
                    {
                        name:"swapna",
                        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },{
                        name:"swapna",
                        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },{
                        name:"swapna",
                        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        replies:[
                            {
                                name:"swapna",
                                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            },
                            {
                                name:"swapna",
                                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"hema",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies:[
            {
                name:"swapna",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                name:"swapna",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
        ]
    },
    {
        name:"john",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies:[
            {
                name:"swapna",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                name:"swapna",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
        ]
    },

];

const CommentRecursion = ({comments})=>{
    return comments.map((data) => 
    (   
        <div>
        <Comments content={data}/>
        {data.replies?.length > 0 && (
                <div className="ml-14 border border-l-2 border-l-black">
                    <CommentRecursion comments={data.replies} />
                </div>
            )}
        </div>
    )

);

}
const CommentsContainer = ()=>{
    return(
        <div className="m-14 w-8/12">
            <p className="text-2xl font-bold mb-5">comments:</p>
            <CommentRecursion comments={commentsList}/>
        </div>
    )
}

export default CommentsContainer;