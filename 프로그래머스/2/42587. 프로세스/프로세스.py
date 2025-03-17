def solution(priorities, location):
    test1 = []
    test2 = []
    for i in priorities:
        test1.append(i)
        test2.append(i)
    test2[location] = -1
    answer = 1
    if test2[0] == -1 and max(test1) == test1[0]:
        return answer

    while test1:
        print(test1, test2, answer)
        if test2[0] == -1 and max(test1) == test1[0]:
            return answer

        elif max(test1) == test1[0]:
            answer = answer + 1
            test1.pop(0)
            test2.pop(0)
        else:
            test1.append(test1.pop(0))
            test2.append(test2.pop(0))

    return answer

print(solution([1, 1, 9, 1, 1, 1], 0))