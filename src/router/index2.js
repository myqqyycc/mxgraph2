import mx from 'mxgraph';
const mxgraph = mx({
  mxImageBasePath: './src/images',
  mxBasePath: './src'
});
// decode bug https://github.com/jgraph/mxgraph/issues/49
// window.mxConstants = mxgraph.mxConstants;
// window.mxGraph = mxgraph.mxGraph;
// window.mxGraphModel = mxgraph.mxGraphModel;
// window.mxEditor = mxgraph.mxEditor;
// window.mxGeometry = mxgraph.mxGeometry;
// window.mxDefaultKeyHandler = mxgraph.mxDefaultKeyHandler;
// window.mxDefaultPopupMenu = mxgraph.mxDefaultPopupMenu;
// window.mxStylesheet = mxgraph.mxStylesheet;
// window.mxDefaultToolbar = mxgraph.mxDefaultToolbar;
// window.mxText= mxgraph.mxText;
// window.mxTooltipHandler= mxgraph.mxTooltipHandler;
// window.mxGraphView= mxgraph.mxGraphView;
// window.mxClient= mxgraph.mxClient;
// window.mxSvgCanvas2D= mxgraph.mxSvgCanvas2D;
// window.mxShape= mxgraph.mxShape;
// window.mxUtils= mxgraph.mxUtils;
// window.mxRectangle= mxgraph.mxRectangle;

for(var name in mxgraph){
  window[name]=mxgraph[name]
}

window.urlParams = (function(url)
{
  var result = new Object();
  var idx = url.lastIndexOf('?');

  if (idx > 0)
  {
    var params = url.substring(idx + 1).split('&');

    for (var i = 0; i < params.length; i++)
    {
      idx = params[i].indexOf('=');

      if (idx > 0)
      {
        result[params[i].substring(0, idx)] = params[i].substring(idx + 1);
      }
    }
  }

  return result;
})(window.location.href);

window.mxPopupMenu.prototype.submenuImage="/static/images/submenu.gif"

export default mxgraph;
