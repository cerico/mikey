# mikey
### Mikey is a React-Redux framework for generating React-Redux projects and React-Redux files.

Inspired by Rails generate; React and other JS frameworks could use more organization and structure so this was created in response. With organization and structure, applications can be built quicker with more efficiency.

To Read More: http://mikeysax.com/mikey-react-generator
___
#### <strong>To Install Mikey:</strong>

```$ npm install mikey -g```
___
#### <strong>To Generate a new project:</strong>

```$ mikey new projectName```

When you create a new project, Mikey will run ```npm install``` automatically in the created project directory. All you have to do is be patient, it is not frozen.

Once it is done, you can start the server with:

```npm start```

Mikey projects are compatible with React / Redux Dev Chrome Extensions and also have hot reloading enabled. Dependencies are kept as minimal as possible. Mikey also contains ES6, SCSS/CSS Loading, Testing Setup, Production/Dev Config, and are Source Mapped.
___
#### <strong>To generate a new react file:</strong>

```$ mikey g_action fileName```

```$ mikey g_component fileName```   

```$ mikey g_container fileName```  

```$ mikey g_reducer fileName```  

```$ mikey g_helper fileName```

#### <strong>Mikey classification and description of file type:</strong>

<strong>[Containers](http://redux.js.org/docs/basics/UsageWithReact.html)</strong> are components which hold logic such as mapping state to props, lifecycle methods, dispatching, and random methods. Containers act as further separation of logic and view.

<strong>[Components](http://redux.js.org/docs/basics/UsageWithReact.html)</strong> are primarily the view layer and rendered inside of Containers.

<strong>[Reducers](http://redux.js.org/docs/basics/Reducers.html)</strong> are responsible for updating the state of your application. Reducers are pure functions, meaning they do not mutate the state. Reducers take the current state and return a new state object.

<strong>[Actions](http://redux.js.org/docs/basics/Actions.html)</strong> are dispatched with a type and payload. Actions work with Reducers in updating the application store. Actions can contain Ajax requests or new information generated by a User.

<strong>Helpers</strong> are used for organizing random methods which can clutter your Containers and Components.

##### <strong>On File Creation Specifics:</strong>

Mikey will look through your working directory for actions/components/containers/reducers/helpers folders and create the corresponding file type. If none of these folders exist, Mikey will create them in the root of where you ran the command.

Mikey also creates ```.mikeyPath``` folder in your project and saves the path of the file type generated. This is to optimize the speed of creation afterwards so Mikey does not have to dynamically find the folder again after each generated file.

If your project directory changes at all, delete ```.mikeyPath``` folder to recache folder paths. ```.mikeyPath``` folder is added to ```.gitignore``` also.

You cannot create files that already exist.
___
#### <strong>To generate a new file and import one or multiple dependencies to top of file:</strong>

```$ mikey g container fileName -i depName```  

or to import multiple dependencies to top of file:

```$ mikey g component fileName -i depName -i depName -i depName```

If you import a dependency with curly brackets it will remove them like this:

```import {thisThing} from 'thisThing'```

If you import a dependency from something titled like this:

```import {connect} from 'react-redux';```

You can import it with a comma and it will split it correctly:

```$ mikey g action thisActionFile -i {connect},react-redux```
___
<strong>Mikey will remember</strong> the things you've imported and store them as defaults for each file type. This way, you will never have to import the same file over and over again for each file type. Also, stored imports are only stored once.

You can include defaults by typing ```-d Y``` (Yes) for using defaults, at the end of the generation command:

```$ mikey g component JimmyBob -i {gravy},train-attack -d Y```
___
#### <strong>To list defaults:</strong>

```$ mikey list actions``` | ```$ mikey -l components``` | ```$ mikey list containers``` | ```$ mikey -l helpers``` | ```$ mikey list reducers```

If you want to list all stored defaults:

```$ mikey list all```    |    ```$ mikey -l all```
___
#### <strong>To erase defaults:</strong>

```$ mikey erase actions``` | ```$ mikey -e components``` | ```$ mikey erase containers``` | ```$ mikey -e helpers``` | ```$ mikey erase reducers```

If you want to erase all stored defaults:

```$ mikey erase all```    |    ```$ mikey -e all```
___
#### <strong>For help and more commands:</strong>

```$ mikey -h```
___
<strong>If you would like to contribute, it would be greatly appreciated.</strong>

Looking to add much more to this such as :

More Templates, Auto dependency installation, and more?...

#### <strong>Version History:</strong>

<strong>Current 1.1.5</strong>: New CLI Commands which are direct and logical, testing integrated in Project Creation Template. README reflects all changes for New CLI Commands and movement towards Mikey as a Framework.

<strong>1.0.0</strong>: New Project Creation Template with More Concise Documentation.
