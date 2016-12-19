# PDP styling
## Instructions:
To run, please run `npm run serve`

# Dev Notes
### Folder structure
- components: anything as small as possible that needs to be coded. ie. a button is a component
- templates: 1-off page styles, usually used for alignment of components. Should exclude code that affects visual design.
- globals: variables, resets, icon scaffolding...

### Styling approach
I used a similar model to BEM, where I created components where I saw fit so that styles are coded in a atomic/reusable way. Personally, I'd work super closely with the designer to judge what contributes to a component and have feedbacks back and forth. I believe coding in CSS is much more than just "here's the mock, do  this" approach. To be maintainable, the developer has the responsibility to communicate with the designer to see what components should be made so that the overall CSS structure remains precise, and a lot of that decisions depend on design.

### A bit off from the design
My hands are pretty tied on this one since I don't have Photoshop nor a designer to bug. I'm not the best at CSS, so the styling is a bit off. I'm willing to learn to be quicker at this and style pixel perfect, but there are things here about the mock I would also like to ask for a designer's feedback. Also, images are in jpegs and not pngs so background colours are a bit off.

Bottom line is, however, I could style this template perfect but would require a bit more time, but I don't want to hold off from submitting this assignment and holding up the interview process.

### No templating language
I've included my knowledge in using/setting up a project structure with Handlebars in the MVC exercise, so I think it's duplicate effort to use that here. I could've used templating here but the assignment explicitly asks for HTML/CSS, so I decided to go with pure HTML.

### Tech stack
Webpack + SASS + PostCSS ♥️ _yesss_

### Icons
- would prefer SVG icons (though I'm less familiar with setup) over using fonts
