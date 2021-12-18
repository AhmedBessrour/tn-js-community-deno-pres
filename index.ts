import * as Drash from "https://deno.land/x/drash@v2.2.0/mod.ts";

class HomeResource extends Drash.Resource {
  public paths = ["/"];

  public GET(request: Drash.Request, response: Drash.Response): void {
    return response.json({
      hello: "Hello Tunisian JS Community",
    });
  }
}

const server = new Drash.Server({
  hostname: "0.0.0.0",
  port: 8000,
  protocol: "http",
  resources: [HomeResource],
});

server.run();

console.log(`Server running at ${server.address}.`);