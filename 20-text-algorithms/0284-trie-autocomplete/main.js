class TrieNode {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) node.children.set(c, new TrieNode());
      node = node.children.get(c);
    }
    node.end = true;
  }

  autocomplete(prefix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node.children.has(c)) return [];
      node = node.children.get(c);
    }
    const out = [];
    const dfs = (n, path) => {
      if (n.end) out.push(path);
      for (const c of [...n.children.keys()].sort()) {
        dfs(n.children.get(c), path + c);
      }
    };
    dfs(node, prefix);
    return out;
  }
}

const trie = new Trie();
for (const w of ["car", "card", "dog"]) trie.insert(w);
console.log(trie.autocomplete("car").join(" "));
