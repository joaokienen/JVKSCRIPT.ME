const expanZ = [
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ==',
    'VGV4dWdvIENvbnRlbnQgaGVyZQ=='
];

const expanYs = expanZ[Math.floor(Math.random() * expanZ.length)]; 
const expanY = Buffer.from(expanYs, 'base64').toString('utf8');

export { expanY }