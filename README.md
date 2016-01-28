# FluxKit

FluxKit is a boilerplate project for develop applications with React.JS and Flux.


> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Version
0.0.1

### Tech

FluxKit has some dependencies to work properly:

* [ReactJS] - A library for building user interfaces.
* [FLUX] - A design pattern developed by Facebook.
* [Events] - The EventEmitter library from node.js

### Installation

You need NPM installed

> Install [NODE.JS]. It will automatically install NPM for you.

Use these commands to get started with this project (IF YOU ALREADY HAVE NPM)
```sh
$ git clone [git-repo-url]
$ cd FluxKit
$ npm install
```

### Building

After installed, you can now build the project
```sh
$ npm run build
```

### Watching

If you want to use watchify for watch your files for change and automatically update your bundle use:

```sh
$ npm run watch
```

### Using FluxKit

FluxKit comes with some pre-built files like:

* Basic Dispatcher
* Store
* ActionCreator

Tips :

**Using ActionCreator**
>>You can extend ActionCreator for creating a class that will create actions for a store. Use _createAction from ActionCreator for that. Every payload is composed by "actionType" and "data"

**Using Basic Dispatcher**
>> You can modify the Basic Dispatcher for custom needs

**Using Store**
>>You can extend Store for creating a store. I will comes with important methods like : addActionListener, removeActionListener and emitChange

License
----

MIT

   [NODE.JS]: <http://nodejs.org>
   [ReactJS]: <https://facebook.github.io/react/>
   [Flux]: <https://facebook.github.io/flux/>
   [Events]: <https://nodejs.org/api/events.html>
