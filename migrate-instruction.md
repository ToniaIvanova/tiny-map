# Migrate

There is migrate-mongo for migrations. There are some comands to deal with migrate.

**Don't forget!** Before working with migrations, delete *"type": "module"* from server\package.json, cause migrate-mongo don't work with ES6 for now.

### Create new migrate

Firstly, create new file:
```cmd
cd server
npm run migrate:create -- <name-of-file-kebab-case>
``` 
In folder server\migrations new file will created with name like '20211101132995-name-of-file-kebab-case.js'. Inside the file will be the following code:
```js
module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
```

### Execute migrations

After implementing functions back to console and execute them with command:
```cmd
npm run migrate:up
```

### Status

To look through all migrations run:
```cmd
npm run migrate:status
```

**Don't forget!** After working with migrations, return *"type": "module"* to server\package.json.




