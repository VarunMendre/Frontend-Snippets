// gives all the child nodes of the body element, including text nodes and comment nodes
document.body.childNodes


// ELEMENT NODE -> 1
// ATTRIBUTE NODE -> 2
// TEXT NODE -> 3
// > CDATA SECTION NODE -> 4
// > ENTITY REFERENCE NODE -> 5
// > ENTITY NODE -> 6
// > PROCESSING INSTRUCTION NODE -> 7
// COMMENT NODE -> 8
// DOCUMENT NODE -> 9
// DOCUMENT TYPE NODE -> 10
// DOCUMENT FRAGMENT NODE -> 11
// NOTATION NODE -> 12

// gives all the child elements of the body element, excluding text nodes and comment nodes
document.body.children