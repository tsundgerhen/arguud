from Tree import Tree

def tree_sample():
    t = Tree(['root', 'depth_0'])
    n1 = t.add_child(t.root, ['node1', 'node_left', 'depth_1'])
    n2 = t.add_child(t.root, ['node2', 'node_right', 'depth_1'])
    n3 = t.add_child(n1, ['node3', 'node_left_left', 'depth_2'])
    n4 = t.add_child(n1, ['node4', 'node_left_right', 'depth_2'])
    t.add_child(n2, ['node5', 'node_right_left', 'depth_2'])
    t.add_child(n2, ['node6', 'node_right_right', 'depth_2'])
    t.add_child(n3, ['node7', 'node_left_left_left', 'depth_3'])
    t.add_child(n3, ['node8', 'node_left_left_right', 'depth_3'])
    t.add_child(n4, ['node9', 'node_right_left_left', 'depth_4'])

    for s in t.iterate_strings_in_all_nodes(t.root):
        print(s)
    

if __name__ == '__main__':
    tree_sample()