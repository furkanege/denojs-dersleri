import { listenAndServe } from 'https://deno.land/std/http/server.ts'

listenAndServe({ port: 80 }, async (req) => {
  if (req.method === 'GET' && req.url === '/') {
    req.respond({
      status: 200,
      headers: new Headers({
        'content-type': 'text/html',
      }),
      body: await Deno.open('./index.html'),
    })
  }
})

console.log('80 portunda, yani http://localhost üzcerinde çalışıyor.')