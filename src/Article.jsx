import React from 'react';
import LikeButton from "./LikeButton";

const Article = (props) =>{
    let publishState = ""
    if (props.isPublished){
        publishState = "公開"
    }
    else{
        publishState = "非公開"
    }
    return(
        <div>
            {/*4回目
            <h2>{props.title}</h2>
            <h2>順番は{props.order}です。</h2>
            <h2>著者：{props.author}</h2>
            <p>{publishState}</p> */}
            {/* <h2>{props.title}</h2> */}

            {/* 5回目
            <h2>{props.title}</h2>
            <label htmlFor="check">公開状態</label>
            <input type="checkbox" checked={props.isPublished} id="check" onClick={()=> props.toggle()}/> */}

            <h2>{props.title}</h2>
            <label htmlFor="check">公開状態：</label>
            <input type="checkbox" checked={props.isPublished} id="check" onClick={()=>{props.toggle()}}/>
            <LikeButton count={props.count}/>
        </div>        
    )
};

export default Article