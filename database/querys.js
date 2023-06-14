const { connectionFactory } = require("./connectionFactory")

function selectAll() {
  return new Promise((resolve, reject) => {
    executeQuery('SELECT * FROM user', function (results) {
      resolve(results)
    })
  })
}


function executeQuery(sql, callback) {
  
  const con = connectionFactory();
  con.query(sql, function (err, results, fields) {
    con.end()
    if (err) throw err;

    callback(results)
  })

}

module.exports = { selectAll }