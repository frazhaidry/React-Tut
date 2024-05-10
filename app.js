
// const heading = React.createElement("h1", {} ,"hello world from React");

// console.log(heading); // object
 
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // render just convert the object to h1 tag 

/* <div id="Parent">
     <div id="child">
        <h1>i am h1 tag</h1> 
     </div>

ReactElement(object) => HTML(Browser Understand)
react element is object firstly then it convert into html brower understandable

 </div> */

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "i am an h2 tag")
    )
);



console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);