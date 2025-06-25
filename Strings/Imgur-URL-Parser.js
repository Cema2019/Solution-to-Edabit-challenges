/*Imgur URL Parser

Create a function that takes an imgur link (as a string) and extracts the unique id and type. Return an object containing the unique id, and a string indicating what type of link it is.

The link could be pointing to:

An album (e.g. http://imgur.com/a/cjh4E)
A gallery (e.g. http://imgur.com/gallery/59npG)
An image (e.g. http://imgur.com/OzZUNMM)
An image (direct link) (e.g. http://i.imgur.com/altd8Ld.png)

Example
imgurUrlParser("http://imgur.com/a/cjh4E") ➞ { id: "cjh4E", type: "album" }
*/

const imgurUrlParser = url => {
  let parts = url.split('/')
  if (parts[parts.length - 1] === "zip") parts.pop();
  const id = parts.pop().split(/[^A-Za-z|\d]/).shift();

  let type;

  if (/\/a\//.test(url)) {
    type = "album";
  } else if (/\/gallery\//.test(url)) {
    type = "gallery";
  } else {
    type = "image";
  }

  return { id, type };
}
