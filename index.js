const h2 = React.createElement('h1', { style :{
    fontSize: '60px', 
    color: 'Blue'
},
}, 'LEARN WEB DEVELOPMENT');

const firstPara = React.createElement("firstPara", { style :{
    fontSize: '24px'
}}, 'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.');
const firstDiv = React.createElement("div", {}, [h2, firstPara]);

const firstText = React.createElement('firstText',{ style :{
    fontSize: '24px'
}},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ');

const secontText = React.createElement('secondText', { style :{
    fontSize: '24px'
}}, ', and other intermediate to advanced resources that assume a lot of previous knowledge.');

const anchor = React.createElement('a', { style :{
    fontSize: '24px', color : 'Blue', textDecoration: 'underline'
}, href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"}, "the rest of MDN");

const secondPara = React.createElement("p", {}, [firstText, anchor, secontText]);

const secondDiv = React.createElement("div", {}, secondPara);

const thirdPara = React.createElement("p",{ style :{
    fontSize: '24px'
}},"If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.")

const thirdDiv = React.createElement("div",{},thirdPara);

const div = React.createElement("div",{},[firstDiv,secondDiv,thirdDiv]);


ReactDOM.render(div, document.getElementById('root'));