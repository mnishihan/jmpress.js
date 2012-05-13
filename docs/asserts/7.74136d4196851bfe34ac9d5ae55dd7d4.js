webpackJsonp(7,{37:function(a,b,c){a.exports='<h1>Ajax</h1><p>This component enables you to load step via ajax. It handles the <code>data-src</code> and <code>href</code> attribute and offers the <code>afterStepLoaded</code> event.</p><p><strong>Load slides dynamically</strong> You can load a slide dynamically by setting the <em>data-src</em> or <em>href</em> attribute on the slide. The slide will only be loaded when an adjacent slide or the slide itself is selected.</p><pre class="language-html">&lt;div class=&quot;step&quot; data-src=&quot;slides/slide-1.html&quot; data-x=&quot;500&quot; data-y=&quot;300&quot;&gt;<br/>	Loading...<br/>&lt;/div&gt;</pre><h3><code>property</code> ajaxLoadedClass : <code>&#39;loaded&#39;</code></h3><p>Class name to set on each step that has started loading.</p><h3><code>callback</code> ajax:loadStep : <code>function( element, eventData )</code></h3><p>When a step has began loading via AJAX.</p><h3><code>callback</code> ajax:afterStepLoaded : <code>function( element, eventData )</code></h3><p>Called after the AJAX step has finished loading.</p>'}})