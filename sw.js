// Este código avisa ao celular que o site pode ser instalado como App
self.addEventListener('install', (e) => {
  console.log('[Service Worker] App Instalado');
});

self.addEventListener('fetch', (e) => {
  // Mantém a conexão ativa
});