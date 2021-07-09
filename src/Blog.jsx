import React from 'react';
import Article from "./Article";
import * as FooBar from './component/FooBar';
import Hoge from './component/Hoge';

class Blog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPublished: false,
            count: 0
        }
    }

    componentDidMount(){
        //ボタンがクリックされたらいいねをカウントアップする
        document.getElementById('counter').addEventListener('click',　this.countUp)
    }

    componentDidUpdate(){
        console.log(this.state.count)
        if (this.state.count >= 10){
            this.setState({count: 0})
        }
    }

    conponentWillUnmouont(){
        document.getElementById('counter').removeEventListener('click', this.countUp)
    }

    //公開状態を反転させる関数
    togglePublished = () =>{
        this.setState({ 
            isPublished: !this.state.isPublished
        })
    };

    countUp = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const authorName = "Torahack"
        return  (
            <>
                {/*4回目
                     <Article 
                    title={"トラハック"}
                    order={3}
                    isPublished={true}
                    author={authorName}
                /> */}

                {/*4回目
                <Article title={"Reactの使い方"}/>
                <Article title={"JSXの使い方"}/>
                <Article title={"環境構築をしてみよう"}/> */}
                
                {/*5回目
                <Article title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()}/> */}

                <Article
                    title={"Reactの使い方"}
                    inPublished={this.state.isPublished}
                    toggle = {() => this.togglePublished()}
                    count = {this.state.count}                
                />
                <FooBar.Foo/>
                <FooBar.Bar/>
                <Hoge/>
            </>
        )
    }
}

export default Blog