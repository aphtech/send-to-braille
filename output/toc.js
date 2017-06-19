// updated 110816
// added check for mx level, base 1 - 111004
// adjust indent for relative and first item newline 140411
var gFirstItem = "True";
var gIndex = 0;
var tocFrag = document.createDocumentFragment();
function buildTOC(smx)
{
    var strURL = window.location;
    var mx = 6;
     // skip TOC if # id navigation found
    if (strURL.toString().indexOf("#", 0) != -1)
       return;
    if (smx === undefined)
      mx = 6;
    else
      mx = parseInt(smx, 10);
    // create TOC heading
    var titleNode = document.createElement('h1');
    titleText = document.createTextNode('Table of Contents');
    titleNode.appendChild(titleText);
    tocFrag.appendChild(titleNode);
    traverse(document.body, mx);
    // assume ID of TOC anchor
    tocDiv = document.getElementById('MyTOC');
    tocDiv.appendChild(tocFrag);
}

// private - recursively look for headings
function traverse(treeNode, mx) {
    if (treeNode.hasChildNodes())
    {
      findHeading(treeNode, mx);
      // test if child node is only text
      if ((treeNode.childNodes.length === 1) &&
        (treeNode.childNodes.item(0).nodeType === 3))
      {
          // skip text only node search
      }
      else		// node has element, text child nodes
      {
        for(var i=0; i<treeNode.childNodes.length; i++)
        traverse(treeNode.childNodes.item(i), mx);
      }
    } // skip "no child" nodes - img, br, comments, etc.
} // end traverse()

function findHeading(currNode, mx)
{
    var level = -1;
    var sID = "";

    if (currNode.tagName != undefined)
    {
      switch (currNode.tagName.toLowerCase())
      {
        case "h1":
          level = 0;
          break;
        case "h2":
          level = 1;
          break;
        case "h3":
          level = 2;
          break;
        case "h4":
          level = 3;
          break;
	  case "h5":
            level = 4;
            break;
          case "h6":
            level = 5;
            break;
          default:
            level = -1;
            break;
    }
    if (level > mx)  
      level = -1;
    if (level > -1)
    {
	  gIndex += 2;
	  // set heading ID, or use existing
	  if (currNode.id != undefined)
		sID = currNode.id;
	  if (sID === "")
	  {
	    sID = gIndex.toString();
	    currNode.id = sID;
	  }
	  setLink(currNode, level, sID);
	}
  }
}

function setLink(el, level, id) {
    var sp = ' ';
    var frag = document.createDocumentFragment();
    var brNode = document.createElement('br');
    anchorNode = document.createElement('a');
    anchorNode.href = '#' + id.toString();
    var s = getInnerText(el);
    var txtaNode = document.createTextNode(s);
    anchorNode.appendChild(txtaNode);
    anchorNode.style.cssText = 'margin-left: ' + (level * 2.45).toString() + 'em';
    // add nodes to this toc fragment
    if (gFirstItem === "False")
        frag.appendChild(brNode);
    else
        gFirstItem = "False";
    frag.appendChild(anchorNode);
    tocFrag.appendChild(frag);
}

function getInnerText(currNode) {
    var sText = "";
    var objNode = null;
  
    if (currNode.hasChildNodes())
    {
      for (var n=0; n<currNode.childNodes.length; ++n)
      {
        objNode = currNode.childNodes.item(n);
        if (objNode.nodeType === 3)
          sText += objNode.data;
        else
          sText += getInnerText(objNode);
      }
    }
    return sText;
}
