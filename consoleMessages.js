
export const showCurrentDirectory = () => {
    console.log(`You are currently in ${process.cwd()}`);
};

console.log(process.argv);
//const usernameIndex = process.argv.findIndex('--username');
//const username = process.argv[usernameIndex+1];
const username = "Sergey";

export const sayHello = () => {
    console.log(`Welcome to the File Manager, ${username}!`);
};

export const sayGoodbye = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}