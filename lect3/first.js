// const element = React.createElement("h1", {id:"first", className:"Pratap", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}}, "hello world");
// const rect_root = ReactDOM.createRoot(document.getElementById("root"));
// rect_root.render(element);
// const element2 = React.createElement("h1", {id:"second", className:"pratap", style:{backgroundColor:"black", color:"orange", fontSize:"30px"}}, "hello world 2");
// rect_root.render(element2);

// ############ we cannot render more then one element in the root by the above method##########

const element1 = React.createElement("h1", {id:"first", className:"Pratap", style:{color:"white", backgroundColor:"black", fontSize:"30px"}}, "hello world");
const element2 = React.createElement("h1", {id:"second", className:"pratap", style:{backgroundColor:"green", color:"orange", fontSize:"30px"}}, "hello world 2");

const div1 = React.createElement("div", {}, [element1, element2]);
const rect_root = ReactDOM.createRoot(document.getElementById("root"));
rect_root.render(div1);

//############### this is how we render more than two elements in the root############ 