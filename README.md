# API Basejump: image-search-abstraction-layer

A NodeJS App that allows a user to pass a url as a parameter and the app will respond with a shortened version of the url.

You can view the live demo here: https://sleepy-tor-16365.herokuapp.com/

### The Web App Does the Following:
* I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
* I can paginate through the responses by adding a ?offset=2 parameter to the URL.
* I can get a list of the most recently submitted search strings.
 
### Example Usage:
https://sleepy-tor-16365.herokuapp.com/search?term=dog&offset=0

https://sleepy-tor-16365.herokuapp.com/latest
            
### Example output:
<code>
{"data":[{"id":"ISaIp","title":"My dog Zoe is camera shy","description":null,"datetime":1465864425,"cover":"OSul5p9","cover_width":720,"cover_height":540,"account_url":"Oioti","account_id":36894890,"privacy":"public","layout":"blog","views":76,"link":"http://imgur.com/a/ISaIp","ups":10,"downs":9,"points":1,"score":1,"is_album":true,"vote":null,"favorite":false,"nsfw":false,"section":"","comment_count":4,"topic":"Aww","topic_id":8,"images_count":1,"in_gallery":true},{"id":"kj1TS","title":"Shameless post of my dog","description":null,"datetime":1465863514,"cover":"A9uY6i8","cover_width":2448,"cover_height":3264,"account_url":"abernkl","account_id":2861272,"privacy":"public","layout":"blog","views":159,"link":"http://imgur.com/a/kj1TS","ups":12,"downs":3,"points":9,"score":9,"is_album":true,"vote":null,"favorite":false,"nsfw":false,"section":"","comment_count":2,"topic":"Aww","topic_id":8,"images_count":21,"in_gallery":true},{"id":"eGz2h","title":"ceiling dog!","description":null,"datetime":1465862321,"cover":"r6aB4VG","cover_width":470,"cover_height":313,"account_url":"theroyalcrumpet","account_id":33099580,"privacy":"public","layout":"blog","views":218,"link":"http://imgur.com/a/eGz2h","ups":11,"downs":5,"points":6,"score":6,"is_album":true,"vote":null,"favorite":false,"nsfw":false,"section":"","comment_count":4,"topic":"Funny","topic_id":2,"images_count":1,"in_gallery":true}
</code>

### Example latest output:
<code>
[{"_id":"575f53edf16e77750b8cbf8a","name":"monkey","date":"Tue Jun 14 2016 00:46:37 GMT+0000 (UTC)"},{"_id":"575f55db9acc260300a7ead4","name":"dog","date":"Tue Jun 14 2016 00:54:51 GMT+0000 (UTC)"}]
</code>