def pactoral(X):
    if X == 0 or X == 1:
        return 1
    return X * pactoral(X-1)

result = pactoral(6)
print(result) 