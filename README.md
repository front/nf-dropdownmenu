#nf-dropdownmenu

A generic menu component. Can be used to hide the content when the menu is open on small devices *à la* bbc.co.uk.

**Example html:**

```
<nav id="nf-menu-top" class="nf-menu nf-white nf-small">
  <section class="nf-brand"><a href="/">Newsfront</a></section>
  <section class="nf-toggle-sub" data-toggle=".nf-section-sub"><a href="#">Meny</a></section>
  <section class="nf-toggle-main" data-toggle=".nf-section-main"><a href="#">Seksjoner</a></section>
  <section class="nf-section-keep">
    <ul>
      <li class=""><a href="/abonner/" class="">Abonnér</a></li>
      <li class="divider"></li>
      <li class=""><a href="/s/" class="">Søk</a></li>
      <li class="divider"></li>
    </ul>
  </section>
  <section class="nf-section-main">
    <ul>
      <li><a href="/meninger/">Meninger</a></li>
      <li class="divider"></li>
      <li><a href="/kultur/">Kultur</a></li>
      <li class="divider"></li>
    </ul>
  </section>
  <section class="nf-section-sub">
    <ul>
      <li><a href="#">Forside</a></li>
      <li><a href="#">Nyheter</a></li>
      <li class="divider"></li>
      <li><a href="#">TV guide</a></li>
      <li><a href="#">Spill</a></li>
      <li><a href="#">Eiendom</a></li>
      <li><a href="#">Jobbmarked</a></li>
      <li><a href="#">Bildeserier</a></li>
      <li class="divider"></li>
      <li><a href="#">Reise</a></li>
      <li><a href="#">Om oss</a></li>
      <li><a href="#">A-Å</a></li>
    </ul>
  </section>
</nav>
```
The menu is divided into **6 sections** (all optional).

 * `nf-brand` - the title and the main link on the menu.
 * `nf-toggle-main` - main list toggle button. Show/hides items on the `nf-section-main` section. It's only shown when the main list is collapsed.
 * `nf-toggle-sub` - secondary list toggle button (allways visible). Shows/hides the `nf-section-sub` section.
 
 * `nf-section-main` - main list of items on the menu. This section is collapse depending on the viewport width and declared size on the menu (view below).
 * `nf-section-keep` - list of items that are always visible on screen.
 * `nf-section-sub` - secondary list of items. This section is allways collapsed.


### menuToggle

```
$('#nf-menu-top').menuToggle(content);
```

 * `content` - optional, content to be hidden when the mnu is open.
 
### Options
 
#### Declared Size

Determines when the main menu list (`nf-section-main`) is collapsed.
 
 * `nf-small` - small number of items. Collapses the main list at 480px.
 * `nf-medium` - medium number of items. Collapses the main list at 768px.
 * `nf-alrge` - large number of items. Collapses the main list at 960px.
 

#### Styling

Basic theming for the menu.

 * `nf-white` - a white based theme.
 * `nf-red` - a red based theme.
 * `nf-blue` - a blue based theme.

Styles can also be edited using the Sass file.

## Demo

[http://front.github.io/nf-dropdownmenu/](http://front.github.io/nf-dropdownmenu/)

## License

[MIT](https://github.com/front/nf-dropdownmenu/blob/master/LICENSE)
