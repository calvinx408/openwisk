function main() {
    let html = "<html><body>Hello World!</body></html>"
    return { headers: { "Content-Type": "text/html" },
        statusCode: 200,
        body: html };
}