#Boots of Khan
##Template for Bootstrapping KhanAcademy projects into independent web apps based on [this blog post](http://www.petercollingridge.co.uk/blog/running-khan-academy-programs-your-computer).

All you have to do is paste your KhanAcademy code into the code.js file at the designated line, and you're ready to run it!

###Please note:
Many browsers will not allow this web page to run out of local files without either disabling some browser security (not suggested) or running the containing folder as a web server.

There are many simple http server applications around, you can choose one on your platform of choice.  I personally use http-server, a global Node.js module.  Once that's set up, you just have to navigate to the correct folder and type:

	http-server
or if you want to pick a port

	http-server -p8031
to pick port 8031.

Now here's my pitch for why it's worth installing Node.js to get this simple http-server, besides how cool the server is:

If you're using Khan Academy, you're using Javascript, and if you're using Javascript, installing Node will give you a javascript interpreter in your command line, and you can run very efficient web interaction code with it, too.

Now I'll get off my soap box.  If you want to disallow chrome's security from your command line, type:

	chrome --allow-file-acess-from-files