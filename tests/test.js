const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf8');

if (html.includes('<h1>Hola Mundo</h1>')) {
    console.log("✅ Prueba exitosa: contiene el texto Hola Mundo");
    process.exit(0);
} else {
    console.error("❌ Prueba fallida: no contiene el texto Hola Mundo");
    process.exit(1);
}