export const App = () =>{
    const news = [
        {nick:"cool-news-1",name:"news 1",description:"Description news 1"},
        {nick:"cool-news-2",name:"news 2",description:"Description news 2"},
        {nick:"cool-news-3",name:"news 3",description:"Description news 3"},
        {nick:"cool-news-4",name:"news 4",description:"Description news 4"},
        {nick:"cool-news-5",name:"news 5",description:"Description news 5"},
    ]
    return ( 
    <div>
       <h1>Pioner News</h1>
       {news.map((newItem)=>{
        return(
             <div key={newItem.nick}>
        <h2>
            {newItem.name}
        </h2>
        <p>
            {newItem.description}
        </p>
       </div>
        );
       })}
       
      
    </div>  
    )
}