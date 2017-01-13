const baseURL = "http://127.0.0.1:2222/api/v1/"

function newJob(name, command, body) {
  var init = { method: 'POST',
               headers: {
                "Accept": "application/json"
               },
               body: body
             };
  var request = new Request(baseURL + "job/", init)

  return fetch(request)
  .then(function(response) {
    return response.json()
    .then(function(json) {
      return json.id
    });
  })
  .catch(function(error) {
    console.log(error)
  });
}

export function newParentJob(name, command) {
  var delayed = new Date();
  delayed.setSeconds(delayed.getSeconds() + 10);
  var delayedISOString = delayed.toISOString();
  return newJob(name, command, JSON.stringify({
    'name': name,
    'command': command,
    'schedule': "R2/" + delayedISOString + "/PT10S",
    'epsilon': 'PT5S'
  }))
}

export function newChildJob(name, command, parentJobId) {
  console.log(parentJobId)
  return newJob(name, command, JSON.stringify({
    'name': name,
    'command': command,
    'parent_jobs': [parentJobId],
    'epsilon': 'PT5S'
  }))
}
