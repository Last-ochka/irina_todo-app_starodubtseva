import React from "react";
import "./Pagination.css";
import * as myConstClass from "./constans.js";

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.renderSwitch = this.renderSwitch.bind(this);
  }
 
    range = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };

    renderSwitch(count) {
        let p = this.props.currentPage;
        switch (count) {
            case 2: return (
                <ul className="pagination">
                       <p>Page {this.props.currentPage}</p>
                    <li><button onClick={() => {
                        this.props.goToPage(1);
                    }} >1</button></li>
                    <li><button onClick={() => {
                        this.props.goToPage(2);
                    }} >2</button></li>


                </ul>
            )
            case 3: return (
                <ul className="pagination">
                       <p>Page {this.props.currentPage}</p>
                    <li><button onClick={() => {
                        this.props.goToPage(1);
                    }} >1</button></li>
                    <li><button onClick={() => {
                        this.props.goToPage(2);
                    }} >2</button></li>
                    <li><button onClick={() => {
                        this.props.goToPage(3);
                    }} >3</button></li>

                </ul>
            )
            case 1: return (<></>)
            case 0: return (<></>)
            default:
                
                switch (p) {
                    case 1:
                        return (
                            <ul className="pagination">
                                   <p>Page {this.props.currentPage}</p>
                                <li><button onClick={() => {
                                    this.props.goToPage(1);
                                }} >Start</button></li>

                                {[0, 1, 2].map((element) => {
                                    return (
                                        <li key={Math.random()}><button onClick={() => {
                                            this.props.goToPage(p + element);
                                        }} >{p + element}</button></li>
                                    )
                                })}
                                <li><button onClick={() => {
                                    this.props.goToPage(count);
                                }}>End</button></li>
                            </ul>)
                    case count:
                        return (
                            <ul className="pagination">
                                   <p>Page {this.props.currentPage}</p>
                                <li><button onClick={() => {
                                    this.props.goToPage(1);
                                }} >Start</button></li>

                                {[-2, -1, 0].map((element) => {
                                    return (
                                        <li key={Math.random()}><button onClick={() => {
                                            this.props.goToPage(p + element);
                                        }} >{p + element}</button></li>
                                    )
                                })}
                                <li><button onClick={() => {
                                    this.props.goToPage(count);
                                }}>End</button></li>
                            </ul>)


                    default:
                        return (
                            <ul className="pagination">
                                   <p>Page {this.props.currentPage}</p>
                                <li><button onClick={() => {
                                    this.props.goToPage(1);
                                }} >Start</button></li>

                                {[-1, 0, 1].map((element) => {
                                    return (
                                        <li key={Math.random()}><button onClick={() => {
                                            this.props.goToPage(p + element);
                                        }} >{p + element}</button></li>
                                    )
                                })}
                                <li><button onClick={() => {
                                    this.props.goToPage(count);
                                }}>End</button></li>
                            </ul>)
                }
        }
    }
    render() {
        return (
            <>
         
                {this.renderSwitch(this.props.totalPageCount)}
            </>

        )
    }
}
export default Pagination;
