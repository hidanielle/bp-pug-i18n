# bp-pug-i18n
Pug boilerplate with localization currently using Gulp

## Clone the template

1. Login to the Github website and create a new repo (i.e. **new-project-repo**). Leave the "Initialize this repository with a README" checkbox unchecked.

2. Create a new directory on your local machine (i.e. **new-project-dir**).

3. Navigate to the new directory's parent directory via command line.

4. Clone the **boilerplate** repo into your new directory:

        git clone https://github.com/hidanielle/bp-pug-i18n.git new-project-dir

5. Navigate into your new directory:

        cd new-project-dir

6. Disconnect the cloned repo from the remote repo (leaving it pointing at nothing):

        git remote rm origin

7. Connect the cloned repo to the new repo you created in step 1 (copy and paste the repo path from github):

        git remote add origin https://github.com/hidanielle/new-project-repo.git

8. Push your local files to the remote repo:

        git push -u origin master 
        
        
## Project set up

1. Navigate to the project in the command line and run `npm install` to load the dependancies
2. `gulp watch` will run the dev tasks and spin up BrowserSync to watch your pug, scss and js files
3. All gulp tasks can be found within the `gulp/`directory

### Templates (pug/html)
[Pug](https://github.com/pugjs/pug) is a templating engine, formerly known as Jade. From the documentation:

> Pug is a clean, whitespace sensitive syntax for writing html. Here is a simple example:

```
doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) bar(1 + 5)
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
      p.
        Pug is a terse and simple templating language with a
        strong focus on performance and powerful features.
```

### Localization
This project is using the Pug Gulp i18n package. Content can be found within the `locales/` directory. Each `.yml|.json` file represents a new locale that will be built into the distribution folder. Currently, this project uses `.yml` but this can be changed to `.json` based on preference. 

Resource strings are namespaced with `$t` - this is configurable within the templates gulp task
`#{$t.hello}`

