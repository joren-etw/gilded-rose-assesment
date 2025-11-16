const { ClientProxyFactory, Transport } = require('@nestjs/microservices');

async function main() {
  const raw = process.argv[2];

  if (!raw) {
    console.error('Usage: node client.js \'[{"name":"X","sellin":1,"quality":2}]\'');
    process.exit(1);
  }

  let items;
  try {
    items = JSON.parse(raw);
    if (!Array.isArray(items)) throw new Error();
  } catch {
    console.error('Error: expected a JSON array of items');
    process.exit(1);
  }

  const client = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 4001 },
  });

  const result = await client.send('update-items', items).toPromise();
  console.log('Updated items:', result);
}

main();
