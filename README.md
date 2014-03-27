<h1>AngularJS + Express Full Stack Generator + Ionic</h1>
E-commerce web application to buy sushis. By using <a href="https://cordova.apache.org/">Cordova</a>, the application can easily be deployed as a native application on mobiles.
<br/>
<h2>Demo</h2>
Heroku + Express. <a href="http://sushi-mobile.herokuapp.com/#/">Test</a> application from heroku server. (Designed for mobile devices!!)

<h2>Technologies</h2>

<h3>Application</h3>
<ul>
  <li>AngularJS: <a href="angularjs.org">angularjs.org</a></li>
  <li>Ionic: <a href="http://ionicframework.com">ionicframework.com</a></li>
</ul>

<h3>Workflow</h3>
<ul>
  <li>Grunt: <a href="gruntjs.com">gruntjs.com</a></li>
  <li>Yeoman: <a href="yeoman.io">yeoman.io</a></li>
  <li>Bower: <a href="bower.io">bower.io</a></li>
</ul>

<h3>Server</h3>
<ul>
  <li>NodeJS: <a href="nodejs.org">nodejs.org</a></li>
  <li>Express: <a href="expressjs.com">expressjs.com</a></li>
</ul>


<h2><a name="usage" class="anchor" href="#usage"><span class="octicon octicon-link"></span></a>Generate workflow</h2>
Yeoman generator: <a href="https://github.com/DaftMonk/generator-angular-fullstack">generator-angular-fullstack</a>. More usefull steps:

<p>Install <code>generator-angular-fullstack</code>:</p>
<div class="highlight highlight-bash"><pre>npm install -g generator-angular-fullstack
</pre></div>
<p>Make a new directory, and <code>cd</code> into it:</p>
<div class="highlight highlight-bash"><pre>mkdir my-new-project <span class="o">&amp;&amp;</span> <span class="nb">cd</span> <span class="nv">$_</span>
</pre></div>
<p>Run <code>yo angular-fullstack</code>, optionally passing an app name:</p>
<div class="highlight highlight-bash"><pre>yo angular-fullstack <span class="o">[</span>app-name<span class="o">]</span>
</pre></div>

<h2>
<a name="deployment" class="anchor" href="#deployment"><span class="octicon octicon-link"></span></a>Deployment</h2>
<p>To generate a dist folder that can easily be deployed use:</p>
<div class="highlight highlight-bash"><pre>grunt
</pre></div>
<p>This will run unit tests, jshint, concatenate and minify scripts/css, compress images, add css vendor prefixes, and finally copy all files to a tidy dist folder.</p>
<p>Alternatively to skip tests and jshint, use:</p>
<div class="highlight highlight-bash"><pre>grunt build
</pre></div>

<h3>
<a name="heroku-deployment" class="anchor" href="#heroku-deployment"><span class="octicon octicon-link"></span></a>Heroku Deployment</h3>
<p>We provide an extremely simplifed deployment process for heroku.</p>
<p><code>yo angular-fullstack:deploy heroku</code> generates a <code>dist</code> folder that is deployment ready  for <a href="http://heroku.com/">heroku.com</a>. </p>
<p><strong>Create and Deploy an app in 4 steps</strong></p>
<ol>
<li><p><code>mkdir foo &amp;&amp; cd foo</code></p></li>
<li><p><code>yo angular-fullstack</code></p></li>
<li><p><code>yo angular-fullstack:deploy heroku</code></p></li>
<li><p><code>cd dist &amp;&amp; git push heroku master</code></p></li>
<li><p>Optional (if using mongoDB) <code>heroku addons:add mongohq</code></p></li>
</ol>
<p>That's it! Your app should be live and shareable. Type <code>heroku open</code> to view it.  </p>
