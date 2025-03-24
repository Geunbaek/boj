class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class q:
    def __init__(self):
        self.root = None

    def empty(self):
        if not self.root:
            return True
        return False

    def insert(self, data):
        if self.empty():
            self.root = Node(data)
        else:
            parent = self.root
            node = self.root
            new = Node(data)
            while node:
                if node.data > data:
                    parent = node
                    node = node.left
                else:
                    parent = node
                    node = node.right
            if parent.data > data:
                parent.left = new
            else:
                parent.right = new

    def delete(self, state):
        if self.empty():
            return
        else:
            if state == "1":
                parent = self.root
                node = self.root
                while node.right:
                    parent = node
                    node = node.right
                if parent == node:
                    if self.root.left:
                        self.root = self.root.left
                    else:
                        self.root = None
                else:
                    parent.right = None
                    
            elif state == "-1":
                parent = self.root
                node = self.root
                while node.left:
                    parent = node
                    node = node.left
                if parent == node:
                    if self.root.right:
                        self.root = self.root.right
                    else:
                        self.root = None
                else:
                    parent.left = None

    def search_max(self):
        if self.empty():
            return False
        else:
            node = self.root
            while node.right:
                node = node.right
            return node.data
        
    def search_min(self):
        if self.empty():
            return False
        else:
            node = self.root
            while node.left:
                node = node.left
            return node.data


def solution(operations):
    dq = q()
    for oper in operations:
        o, n = oper.split()
        if o == "I":
            dq.insert(int(n))
        elif o == "D":
            if n == "1":
                dq.delete("1")
            elif n == '-1':
                dq.delete("-1")
                
    if dq.empty():
        return [0,0]
    else:
        return [int(dq.search_max()), int(dq.search_min())]