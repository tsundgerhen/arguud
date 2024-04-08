x = 5
def foo():
    print(x)

def bar():
    global x
    x = 10
    foo()
    
bar()