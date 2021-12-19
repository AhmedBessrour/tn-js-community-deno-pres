const decoder = new TextDecoder('utf-8')
const data = Deno.readFileSync("data.json");
console.log(decoder.decode(data))
