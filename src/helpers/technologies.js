const technologies = [
    {
        img: `${process.env.PUBLIC_URL}/images/java.png`,
        name: "Java"
    },
    {
        img: `${process.env.PUBLIC_URL}/images/React.svg`,
        name: "React.JS"
    },
    {
        img: `${process.env.PUBLIC_URL}/images/Angular2.svg`,
        name: "Angular 2+"
    },
    {
        img: `${process.env.PUBLIC_URL}/images/react_native.png`,
        name: "React Native"
    },
    {
        img: `${process.env.PUBLIC_URL}/images/ionic.png`,
        name: "Ionic"
    },
    {
        img: `${process.env.PUBLIC_URL}/images/angularjs.png`,
        name: "Angular JS"
    },
    
]

export const getTechs = () => {
    return technologies;
}