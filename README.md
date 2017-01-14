# ifttt-kala
A ifttt clone with kala as backend

The backend: https://github.com/ajvb/kala

# Installing and running
- after installing kala:
  - `kala run -p 2222`
- `cd path/to/ifttt-kala && npm install`
- `npm start`

surf to `http://localhost:8080`

# Creating if's and then's
open your favourite text editor and edit the file `src/kala/jobs.js`
add to the array a json which specifyes the command and a unique name for the job in kala and a uniuqe name for the dropdown menu

```
{
  "text": <text shown in drop menu>,
  "command": <command for kala to run (e.g. /usr/bin/python path/to/my/cool/python/script.py)>,
  "name": <job name for kala>
}
```

# A preview

![Alt text](screenshot.jpg?raw=true "Browser screenshot")
