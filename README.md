# Instagram-url-to-database
A simple Chrome extension that can help transfer image and video URL to mongoDB Database. 

This project is built upon <a href="https://github.com/aashutoshrathi">Ashutosh Rathi</a> initial project <a href="https://github.com/aashutoshrathi/Insta-Downloader-Extension">Insta Downloader Extension</a>.

//What i did 
Here, i changed <a href="https://github.com/aashutoshrathi">Ashutosh Rathi</a> code
```
<a download href=${escapeHTML(video[0].content)}>
                    <button class="instanshu-unite instanshu-sm instanshu-success" style="left: 100px; top: 10px;"> Download Video</button>
 ```
To this
```
 <a href="javascript:myFunction();"><button class="instanshu-unite instanshu-sm instanshu-success" style="left: 100px; top: 10px;">Send to DB</button>
                  function myFunction() {
                      var text = (images[i].src);
                     axios.post('localhost:5000/api/post/instagram', {
                          text: text,
                        })
                        .then(function (response) {
                          console.log(response);
                        })
                        .catch(function (error) {
                          console.log(error);
                        });
                    }
```
So all i change is i removed the ```download``` from the ```<a>``` and replace them all with a javascript function that runs an 
Axios Js post request that send the image to my express Routes.
                   
                   
              
