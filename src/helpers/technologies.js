const technologies = [
    {
        img: `${process.env.PUBLIC_URL}/images/React.svg`,
        name: "React.JS",
        slide:'Left'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/Angular2.svg`,
        name: "Angular 2+",
        slide:'Left'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/react_native.png`,
        name: "React Native",
        slide:'Up'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/ionic.png`,
        name: "Ionic",
        slide:'Up'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/angularjs.png`,
        name: "Angular JS",
        slide:'Right'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/java.png`,
        name: "Java",
        slide:'Right'
    },
    
]

export const getTechs = () => {
    return technologies;
}