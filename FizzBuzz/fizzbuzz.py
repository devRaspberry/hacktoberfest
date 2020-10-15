x = int(input("Number of iterations:"))

for i in range(x):
    write = ""
    if i % 3 == 0:
        write += "Fizz"
    if i % 5 == 0:
        write += "Buzz"

    if write is not "":
        print(write)
    else:
        print(i)
