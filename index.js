import { processImages } from './src/images'
try {
    const processor = processImages({ detectWebp: true })
    fly.http.respondWith(processor)
} catch(e) {
    // Output a helpful error message
    fly.http.respondWith(async function (req) {
        let response = new Response(e.stack, { status: 500 })
        return response  
    })
}

