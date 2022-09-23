const destinRouter = [  
    'hero', 'aurora', 'vilgax', 'fauno', 'texugo', 'atlas'
]; 
 
const destRouter = destinRouter[Math.floor(Math.random() * destinRouter.length)]; 

export { destRouter }