class Node:
    def __init__(self, multi_strs_in_node):
        self.multi_strs_in_node = multi_strs_in_node
        self.children = []

    def add_child(self, child_node):
        self.children.append(child_node)

    def __repr__(self):
        return str(self.multi_strs_in_node)
    
class Tree:
    def __init__(self, multi_strs_in_root):
        self.root = Node(multi_strs_in_root)

    def add_child(self, parent_node, multi_strs_in_child_node):
        child_node = Node(multi_strs_in_child_node)
        parent_node.add_child(child_node)
        return child_node

    def __repr__(self):
        return str(self.root)

    def iterate_strings_in_all_nodes(self, node):
        """
		TODO: For this task you need to implement this function for iterating through all strings in all nodes of the tree.

            pre-order traversel head-left-right
		"""
        if node is None:
            return
        
        for string in node.multi_strs_in_node:
            yield string

        for child in node.children:
            yield from self.iterate_strings_in_all_nodes(child)