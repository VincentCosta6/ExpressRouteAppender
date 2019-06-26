# ExpressRouteAppender
This module adds routes from a directory onto your express app

# Example
```javascript
let express = require("express"),
    appender = require("./appender.js");
    
let app = express();

appender(app, { path: "./Routes" });
```

You're done! All of the routes in your /Routes folder(relative to where appender is) are loaded into express

# Route Example

```javascript
module.exports = [
  { root: "/first" },
  {
    type: "GET",
    path: "/hello",
    middleware: [ middleFunc1, middleFunc2 ],
    fn: function(req, res) {
      // Your route here
      
      return res.json({ msg: "Hello!!" });
    }
  }
]
```

The first object in the array is the settings for that file. In this case the root path for the rest of the routes is /first. If you want to add middleware just for that route put it in the array like so.

So if we access /first/hello from the server we should get back: 
```json
{ "msg": "Hello!!" }
```

# Future Changes
1) More settings for the route file
2) More settings for the appender class
3) Seperate main function from middleware
