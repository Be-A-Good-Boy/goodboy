A template that will never disappointed you in your web development is a...

# Good Boy!

> How does this work?

During development, instead of HTML, you'll write Pug, instead of Javascript, you'll write Lua, and instead of CSS, you'll write Stylus.

Pug reduces HTML boilerplates, and Stylus is much easier on the eyes and hands than CSS as it has little cryptic symbols involved as possible.

Pug and Stylus are heavily based on whitespaces, but they have little to no boilerplates. Their styles are pretty similar to each other, and they can be understood in little to no time.

Since Fengari operates on Javascript, you’ll be able to access the DOM and the most complex JS libraries at the comfort of your own non-semicolon Lua logic syntax.

> Which directories do I focus on in this template?

If you know nothing, ignore /serve/ and other bunch of folders crap BS.

[src](/src/) will be your best friend. It has the structure you need to get started. You can see examples of how each file works.

[dist](/dist/) or [release](/release/) are the outputs of your builds unless you changed the shell script for building it.

[shell](/shell/) is your toolbelt. I gave you the hammer. Now, you decide whatever you want to do with it. See [About Shell and Setup](#about-shell-and-setup) for details of each scripts.

[goodboy.config](/goodboy.config) really isn't anything special, but you can change directories and organize things a lot easier. Though, it'd become useful in serving.

Here's a bird's eye view of the stuff you're going to be working with
[src](/src/) - Write and modify
[dist](/dist/) - Test build (HTML file)
[release](/release/) - Release build
[shell](/shell/) - Execute (most builds)
[goodboy.config](/goodboy.config) - Configurate

> How to serve?

The really really good boy isn't unfortunately made to entertain everyone with dynamic pages, but... you can read [Serving Fr\*nt Guide](/serve/README.md).

> Dynamic, pleas.

Great question.

No.

## About Shell and Setup

If you have never set this up before and you don't want to, then run [setup](/shell/setup).

> To run any of the files in [shell](/shell/), you'll want to open a shell-based terminal in this folder and type in `./shell/setup` or `sh shell/build`.

Initiate the project by running [init](/shell/init). The script fetches a Fengari which pretty crucial for replacing Javascript with Lua, as well as Node.js dependencies that are used for optional serverside deployments.

If you're working with the client side (which you 90% likely are when it comes to static web development), then you can run [build](/shell/build) to compile all the files into browser-readable assets. `dist` or `release`, doesn't matter. It's just a matter of output. You're most likely not going to use this for serious business production quality anyways. Though, you can live preview on the `dist` build.

> If you're on Windows, I'd highly advise you to get [Git Bash](https://git-scm.com/downloads) or [MSYS2 MINGW64](https://github.com/msys2/msys2-installer) for shell-based terminals. Don't worry. No advanced setup with Git Bash. :)
