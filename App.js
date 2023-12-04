// const headingReact=React.createElement("h1",{id:"headingline"},"Welcome to the new Deevelopment");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingReact);


const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"headingline"},"Hello Parent Child")
,React.createElement("h2",{},"Let's do it")])
)

const root=ReactDOM.createRoot(document.getElementById("parentChild"));
root.render(parent);