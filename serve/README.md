Good Boy isn't made to be ran on the server, but rather as a way for Roblox developers to conveniently have their hands on web development without the unnecessary involved.

If you have experience with web development and you really want to run this on a server, then this can be a useful guide.

# Serving Front

dlaflj;kfsljfkl;jdsjdkfjksjkjfkja;sdgladfhjbbnvdjvf. fjiowepofjiowefJEOW.

If you want to serve a front (literally), you don't need to run a build. Though, you'd need to run [setup](../shell/setup) if you've never done this before and [init](../shell/init) to get the project started.

To serve, open the root directory of the project in the terminal, and run `npm run start`. If you want a real-time preview of the website as you make changes, then run `npm run debug`. It's highly advised that you do not use `debug` for production since it would negatively affect the user experience.

The project, by default, serves from the [src](../src/) directory. Though, you can configure this by modifying [goodboy.config](../goodboy.config). If you want low-level control, you can modify [app.js](../serve/app.js), but you likely won't know how to, since you might've came here to replace Javascript with Lua for web development.

# Common Problems

> "My site is not applying any style!"

- Do the classic trick. Inspect element and open the console. See the problem underneath.

```
Refused to apply style from 'http://localhost:3000/styles/styles.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
```

- Compile via Stylus before you serve. That's the solution. The explanation: if you look into the network tab, and you check on the headers of {stylename}.css, you'll see that it returns `404 Not Found`. That's because {}.css doesn't exist in the first place. Don't forget that browsers usually only take .css, and you'll need to compile .stylus over to .css for users.

```
Error: Failed to lookup view "{}" in views directory "{/}"
```

Make sure the `{/}` and `{}` exists. Check `GB_SERVER_ROOT` variable in [goodboy.config](/goodboy.config) and remove the slash at the beginning of the directory:

WRONG

```sh
GB_SERVER_ROOT="/src"
```

yes

```sh
GB_SERVER_ROOT="src"
```
