const vnode = {
  tag: 'DIV',
  attrs: {
    id: 'app'
  },
  children: [{
    tag: 'SPAN',
    children: [{
      tag: 'A',
      children: []
    }]
  },
  {
    tag: 'SPAN',
    children: [{
      tag: 'A',
      children: []
    },
    {
      tag: 'A',
      children: []
    }
    ]
  }
  ]
}

function render(vnode) {
  const element = document.createElement(vnode.tag.toLowerCase());
  const { attrs = {}, children = [] } = vnode;

  for (const attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }

  if (children.length) {
    for (const node of children) {
      element.appendChild(render(node));
    }
  }

  return element;
}

console.log(render(vnode));
