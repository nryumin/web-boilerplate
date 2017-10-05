print("Start script");


conn = new Mongo();

/*db = conn.getDB("admin");
db.createUser(
  {
    user: "admin",
    pwd: "admin123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);*/

db = conn.getDB("pitchme");
db.createCollection("users");
db.users.insert({
    username: "test1",
    password: "123"
});

db = conn.getDB("pitchme");
db.createCollection("users");
db.users.insert({
    username: "test1",
    password: "123"
});

print("end script");