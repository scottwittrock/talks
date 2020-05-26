# Step 1:
Initiate Stencil Project and build the initial template.   
`npm init stencil` - Call it Stencil library or something
`npm install`
`npm run start`

# Step 2:
Explore the code and go over what's in there.

# Step 3:
Create super cool fancy button

`npm run generate`

# Step 4: 
Build your library and publish it to npm.

Add this to your package.json
```
  "name": "@scottwittrock/fancybutton",
  "publishConfig": { "registry": "https://npm.pkg.github.com/" },
  "repository": "git://github.com/scottwittrock/talks.git",
```
Add this script 
```
    "publish": "npm run build && npm publish"
```

# Step 4: 
Create Angular application

[Add library to angular application](https://stenciljs.com/docs/angular)
* ``
* Add `schemas: [CUSTOM_ELEMENTS_SCHEMA],` to app.module.ts
* `import { defineCustomElements } from '@scottwittrock/fancybutton/loader'`;
* `defineCustomElements();`


# Step 5: 
Add library to react application 
* `npx create-react-app react-demo`
* `npm i @scottwittrock/fancybutton`
* In your index.js file add
* `import { applyPolyfills, defineCustomElements } from '@scottwittrock/fancybutton/loader';`

Create and publish react bindings
https://stenciljs.com/docs/react

* npm install @stencil/react-output-target --save-dev

``` 
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-react/src/components.ts',
    }),
    {
      type: 'dist',
    },
  ],
};
```



# Appendix

Click listener
```jsx
  @Event() clicked: EventEmitter;
  onButtonClick(){
    this.clicked.emit();
  }
```
Click listener
```html
  <script>
    const fancyButton = document.querySelector('fancy-button');
    fancyButton.addEventListener('userClicked', event => { 
      alert("The user clicked the button");
     });
  </script>
```

Fancy button html
```html
<div class="button" onClick={()=>this.onButtonClick()}>{this.text}</div>
```
Fancy button css 
``` css
.button {
    display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .15rem;
    transition: all .3s;
    -webkit-transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
}

.button:focus{
    outline: none;
}

.button:active{
    border: none;
    background-color: #0cf;
}

.button:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0cf;
    border-radius: 10rem;
    z-index: -2;
}

.button:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgb(0, 109, 136);
    transition: all .3s;
    border-radius: 10rem;
    z-index: -1;
}

.button:hover {
    color: #fff;
}
.button:hover:before {
    width: 100%;
}

/* optional reset for presentation */
* {
  font-family: Arial;
  text-decoration: none;
  font-size: 20px;
}
```